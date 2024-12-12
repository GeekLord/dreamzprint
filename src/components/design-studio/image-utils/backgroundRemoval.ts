import { pipeline } from '@huggingface/transformers';
import { resizeImageIfNeeded } from './imageHelpers';

const MAX_IMAGE_DIMENSION = 1024;

export const removeImageBackground = async (imageElement: HTMLImageElement): Promise<string> => {
  console.log('Starting background removal process...');
  
  try {
    // Initialize segmentation model
    const segmenter = await pipeline(
      'image-segmentation',
      'Xenova/segformer-b0-finetuned-ade-512-512'
    );
    console.log('Segmentation model loaded');

    // Prepare canvas and context
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize and draw image
    resizeImageIfNeeded(canvas, ctx, imageElement, MAX_IMAGE_DIMENSION);
    console.log(`Image prepared. Dimensions: ${canvas.width}x${canvas.height}`);
    
    // Convert to data URL for processing
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    
    // Process with segmentation model
    console.log('Processing with segmentation model...');
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
    
    // Apply mask
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    
    // Apply inverted mask to alpha channel
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
    // Convert to blob URL
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
    
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error in background removal:', error);
    throw error;
  }
};