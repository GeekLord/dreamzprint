import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DesignPreviewProps {
  imageUrl: string | null;
  isLoading: boolean;
}

const DesignPreview = ({ imageUrl, isLoading }: DesignPreviewProps) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    if (imageUrl) {
      // Store the design URL in localStorage to access it in the products page
      localStorage.setItem('selectedDesign', imageUrl);
      navigate('/products');
    }
  };

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-accent rounded-lg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Generated design"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Your design will appear here
          </div>
        )}
      </div>
      {imageUrl && !isLoading && (
        <Button 
          className="w-full" 
          onClick={handleOrder}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Order with this design
        </Button>
      )}
    </div>
  );
};

export default DesignPreview;