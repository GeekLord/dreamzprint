import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  selectedDesign: string | null;
  onOrder: (product: Product) => void;
}

export const ProductCard = ({ product, selectedDesign, onOrder }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

  // Function to get the color-specific image URL
  const getColorSpecificImage = (color: string) => {
    // If it's a t-shirt product, return color-specific image
    if (product.category === "T-Shirts") {
      const colorMap: { [key: string]: string } = {
        "#FFFFFF": "/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png", // White t-shirt
        "#000000": "/lovable-uploads/black-tshirt.png", // Black t-shirt
        "#8E9196": "/lovable-uploads/gray-tshirt.png", // Gray t-shirt
        "#D6BCFA": "/lovable-uploads/purple-tshirt.png", // Purple t-shirt
        "#FDE1D3": "/lovable-uploads/peach-tshirt.png", // Peach t-shirt
      };
      return colorMap[color] || product.image;
    }
    // For other products, return the default image
    return product.image;
  };

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
        <img 
          src={selectedColor ? getColorSpecificImage(selectedColor) : product.image}
          alt={`${product.title} in ${selectedColor || 'default'} color`}
          className="w-full h-full object-cover"
        />
        {selectedDesign && (
          <div 
            className="absolute mix-blend-multiply"
            style={{
              top: product.overlayPosition.top,
              left: product.overlayPosition.left,
              width: product.overlayPosition.width,
            }}
          >
            <img 
              src={selectedDesign} 
              alt="Your design"
              className="w-full h-full object-contain"
            />
          </div>
        )}
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