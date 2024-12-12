export const resizeImageIfNeeded = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  maxDimension: number
) => {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > maxDimension || height > maxDimension) {
    if (width > height) {
      height = Math.round((height * maxDimension) / width);
      width = maxDimension;
    } else {
      width = Math.round((width * maxDimension) / height);
      height = maxDimension;
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

export const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};

export const getFileExtensionFromUrl = (url: string): string => {
  const extension = url.split('.').pop()?.toLowerCase() || 'png';
  return extension === 'webp' ? 'webp' : 'png';
};

export const sanitizePrompt = (prompt: string): string => {
  const urlParams = new URLSearchParams(window.location.search);
  const promptText = urlParams.get('prompt') || 'design';
  return promptText
    .slice(0, 30)
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .toLowerCase();
};