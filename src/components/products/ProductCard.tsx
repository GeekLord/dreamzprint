import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

interface ProductCardProps {
  product: Product;
  selectedDesign: string | null;
  onOrder: (product: Product) => void;
}

export const ProductCard = ({ product, selectedDesign, onOrder }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: '#ffffff',
    });

    setCanvas(fabricCanvas);

    // Load the product image
    fabric.Image.fromURL(product.image, (img) => {
      img.scaleToWidth(fabricCanvas.getWidth());
      img.set({
        selectable: false,
        evented: false,
      });
      fabricCanvas.add(img);
      fabricCanvas.centerObject(img);
      fabricCanvas.renderAll();
    });

    return () => {
      fabricCanvas.dispose();
    };
  }, [product.image]);

  // Handle design image updates
  useEffect(() => {
    if (!canvas || !selectedDesign) return;

    // Remove any existing design images
    const existingDesigns = canvas.getObjects().filter(obj => {
      const metadata = (obj as fabric.Object & { data?: { type: string } }).data;
      return metadata?.type === 'design';
    });
    existingDesigns.forEach(obj => canvas.remove(obj));

    // Add new design image
    fabric.Image.fromURL(selectedDesign, (img) => {
      img.scaleToWidth(canvas.getWidth() * 0.3); // Scale design to 30% of canvas width
      img.set({
        left: canvas.getWidth() * 0.35,
        top: canvas.getHeight() * 0.35,
        data: { type: 'design' },
        selectable: true,
        evented: true,
      });
      
      // Make design interactive
      img.setControlsVisibility({
        mt: true, // middle top
        mb: true, // middle bottom
        ml: true, // middle left
        mr: true, // middle right
        mtr: true, // rotate
      });

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
    });
  }, [selectedDesign, canvas]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-primary font-medium mb-4">{product.price}</p>
      
      {product.colors && (
        <div className="flex gap-2 mb-4">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor === color ? 'border-primary scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      )}
      
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-contain"
        />
      </div>
      
      <Button 
        className="w-full"
        onClick={() => onOrder(product)}
      >
        {selectedDesign ? 'Order with Custom Design' : 'Create Your Design'}
      </Button>
    </div>
  );
};