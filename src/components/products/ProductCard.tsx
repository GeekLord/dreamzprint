import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  selectedDesign: string | null;
  onOrder: (product: Product) => void;
}

export const ProductCard = ({ product, selectedDesign, onOrder }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-primary font-medium mb-4">{product.price}</p>
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.title}
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