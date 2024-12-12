import { Button } from "@/components/ui/button";
import { Loader2, Eraser, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { removeImageBackground } from "./image-utils/backgroundRemoval";
import { loadImage, getFileExtensionFromUrl, sanitizePrompt } from "./image-utils/imageHelpers";

interface ImageEditorProps {
  imageUrl: string;
  onImageUpdate: (newImageUrl: string) => void;
}

const ImageEditor = ({ imageUrl, onImageUpdate }: ImageEditorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const removeBackground = async () => {
    try {
      setIsProcessing(true);
      toast.info("Removing background...");

      const imageElement = await loadImage(imageUrl);
      const newImageUrl = await removeImageBackground(imageElement);
      
      onImageUpdate(newImageUrl);
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error('Error removing background:', error);
      toast.error("Failed to remove background. Please try again.");
    } finally {
      setIsProcessing(false);
    }
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