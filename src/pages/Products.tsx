import { useEffect, useState } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { OrderDialog } from "@/components/products/OrderDialog";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/types/product";
import type { Product } from "@/types/product";

const Products = () => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [orderDialog, setOrderDialog] = useState<{
    isOpen: boolean;
    product: Product;
  } | null>(null);

  useEffect(() => {
    const design = localStorage.getItem('selectedDesign');
    const productType = localStorage.getItem('selectedProductType');
    
    if (design) {
      setSelectedDesign(design);
      toast.success("Your custom design has been loaded!");
      
      // Scroll to the selected product category if it exists
      if (productType) {
        const element = document.getElementById(productType);
        if (element) {
          console.log('Scrolling to:', productType);
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }, 500); // Added a slight delay to ensure DOM is ready
        } else {
          console.log('Element not found for:', productType);
        }
        localStorage.removeItem('selectedProductType'); // Clean up
      }
    }
  }, []);

  const clearDesign = () => {
    localStorage.removeItem('selectedDesign');
    setSelectedDesign(null);
    toast.success("Design cleared successfully");
  };

  const handleOrder = (product: Product) => {
    if (!selectedDesign) {
      toast.error("Please create a design first");
      return;
    }
    setOrderDialog({ isOpen: true, product });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Products
          </h1>
          {selectedDesign && (
            <Button variant="outline" onClick={clearDesign}>
              <X className="mr-2 h-4 w-4" />
              Clear Selected Design
            </Button>
          )}
        </div>

        <p className="text-lg text-gray-600 mb-12">
          Transform your ideas into reality with our premium quality products. Each item is carefully crafted to ensure your designs look their absolute best.
        </p>
        
        <div className="space-y-16">
          {products.map((category, index) => (
            <div 
              key={index} 
              className="space-y-8" 
              id={category.category.replace(/\s+/g, '')}
            >
              <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((product, productIndex) => (
                  <ProductCard
                    key={productIndex}
                    product={product}
                    selectedDesign={selectedDesign}
                    onOrder={handleOrder}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      {orderDialog && (
        <OrderDialog
          isOpen={orderDialog.isOpen}
          onClose={() => setOrderDialog(null)}
          product={orderDialog.product}
          designUrl={selectedDesign}
        />
      )}
      <Footer />
    </div>
  );
};

export default Products;