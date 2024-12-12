import { Button } from "@/components/ui/button";
import { Loader2, Eraser, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

interface ImageEditorProps {
  imageUrl: string;
  onImageUpdate: (newImageUrl: string) => void;
}

const ImageEditor = ({ imageUrl, onImageUpdate }: ImageEditorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const resizeImageIfNeeded = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement
  ) => {
    let width = image.naturalWidth;
    let height = image.naturalHeight;

    if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
      if (width > height) {
        height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
        width = MAX_IMAGE_DIMENSION;
      } else {
        width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
        height = MAX_IMAGE_DIMENSION;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);
      return true;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    return false;
  };

  const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  };

  const removeBackground = async () => {
    try {
      setIsProcessing(true);
      toast.info("Removing background...");

      const segmenter = await pipeline(
        'image-segmentation',
        'Xenova/segformer-b0-finetuned-ade-512-512',
        { device: 'webgpu' }
      );

      // Load and prepare image
      const imageElement = await loadImage(imageUrl);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error('Could not get canvas context');

      // Resize image if needed and draw it to canvas
      resizeImageIfNeeded(canvas, ctx, imageElement);
      const imageData = canvas.toDataURL('image/jpeg', 0.8);

      // Process the image with the segmentation model
      const result = await segmenter(imageData);

      if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
        throw new Error('Invalid segmentation result');
      }

      // Create output canvas
      const outputCanvas = document.createElement('canvas');
      outputCanvas.width = canvas.width;
      outputCanvas.height = canvas.height;
      const outputCtx = outputCanvas.getContext('2d');

      if (!outputCtx) throw new Error('Could not get output canvas context');

      // Draw original image
      outputCtx.drawImage(canvas, 0, 0);

      // Apply the mask
      const outputImageData = outputCtx.getImageData(
        0, 0,
        outputCanvas.width,
        outputCanvas.height
      );
      const data = outputImageData.data;

      // Apply inverted mask to alpha channel
      for (let i = 0; i < result[0].mask.data.length; i++) {
        const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
        data[i * 4 + 3] = alpha;
      }

      outputCtx.putImageData(outputImageData, 0, 0);

      // Convert to blob and then to URL
      const blob = await new Promise<Blob>((resolve, reject) => {
        outputCanvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Failed to create blob'));
          },
          'image/png',
          1.0
        );
      });

      const newImageUrl = URL.createObjectURL(blob);
      onImageUpdate(newImageUrl);
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error('Error removing background:', error);
      toast.error("Failed to remove background. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const getFileExtensionFromUrl = (url: string): string => {
    const extension = url.split('.').pop()?.toLowerCase() || 'png';
    return extension === 'webp' ? 'webp' : 'png';
  };

  const sanitizePrompt = (prompt: string): string => {
    const urlParams = new URLSearchParams(window.location.search);
    const promptText = urlParams.get('prompt') || 'design';
    return promptText
      .slice(0, 30)
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const fileExtension = getFileExtensionFromUrl(imageUrl);
      const promptText = sanitizePrompt(window.location.search);
      const fileName = `DreamzPrint_${promptText}.${fileExtension}`;
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error('Error downloading image:', error);
      toast.error("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button
        onClick={removeBackground}
        disabled={isProcessing}
        variant="outline"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Eraser className="mr-2 h-4 w-4" />
            Remove Background
          </>
        )}
      </Button>
      <Button
        onClick={handleDownload}
        disabled={isProcessing}
        variant="outline"
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default ImageEditor;
