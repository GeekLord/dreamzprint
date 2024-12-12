import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageEditor from "./ImageEditor";

interface DesignPreviewProps {
  imageUrl: string | null;
  isLoading: boolean;
}

const DesignPreview = ({ imageUrl, isLoading }: DesignPreviewProps) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    if (imageUrl) {
      localStorage.setItem('selectedDesign', imageUrl);
      navigate('/products');
    }
  };

  const handleImageUpdate = (newImageUrl: string) => {
    // Store the updated image URL in localStorage
    localStorage.setItem('selectedDesign', newImageUrl);
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
        <>
          <ImageEditor 
            imageUrl={imageUrl} 
            onImageUpdate={handleImageUpdate}
          />
          <Button 
            className="w-full" 
            onClick={handleOrder}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Order with this design
          </Button>
        </>
      )}
    </div>
  );
};

export default DesignPreview;