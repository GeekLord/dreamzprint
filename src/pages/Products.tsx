import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";

const Products = () => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  useEffect(() => {
    const design = localStorage.getItem('selectedDesign');
    if (design) {
      setSelectedDesign(design);
      toast.success("Your custom design has been loaded!");
    }
  }, []);

  const clearDesign = () => {
    localStorage.removeItem('selectedDesign');
    setSelectedDesign(null);
    toast.success("Design cleared successfully");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Our Products</h1>
          {selectedDesign && (
            <Button variant="outline" onClick={clearDesign}>
              <X className="mr-2 h-4 w-4" />
              Clear Selected Design
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Custom T-Shirts", description: "Create your own unique t-shirt designs" },
            { title: "Hoodies", description: "Comfortable and stylish custom hoodies" },
            { title: "Accessories", description: "Personalized accessories for every occasion" }
          ].map((product, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              {selectedDesign && (
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-accent">
                    <img 
                      src={selectedDesign} 
                      alt="Your design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button className="w-full">
                    Order with Custom Design
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;