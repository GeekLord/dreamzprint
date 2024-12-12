import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";

const products = [
  {
    category: "Apparel",
    items: [
      { title: "Custom T-Shirts", description: "Create your own unique t-shirt designs", price: "From $24.99" },
      { title: "Hoodies", description: "Comfortable and stylish custom hoodies", price: "From $39.99" },
      { title: "Tank Tops", description: "Perfect for summer and workouts", price: "From $19.99" },
      { title: "Long Sleeve Shirts", description: "Year-round comfort with your designs", price: "From $29.99" }
    ]
  },
  {
    category: "Home Decor",
    items: [
      { title: "Wall Art", description: "Transform your space with custom prints", price: "From $29.99" },
      { title: "Canvas Prints", description: "Gallery-quality canvas prints", price: "From $49.99" },
      { title: "Throw Pillows", description: "Add personality to any room", price: "From $24.99" },
      { title: "Photo Blankets", description: "Cozy custom blankets", price: "From $59.99" }
    ]
  },
  {
    category: "Accessories",
    items: [
      { title: "Phone Cases", description: "Protect your device with style", price: "From $19.99" },
      { title: "Tote Bags", description: "Eco-friendly custom bags", price: "From $16.99" },
      { title: "Laptop Sleeves", description: "Stylish protection for your tech", price: "From $29.99" },
      { title: "Mouse Pads", description: "Custom desk accessories", price: "From $14.99" }
    ]
  }
];

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
            <div key={index} className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-primary font-medium mb-4">{product.price}</p>
                    {selectedDesign && (
                      <div className="space-y-4">
                        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
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
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;