import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    category: string;
    price: string;
  };
  designUrl: string | null;
}

const OrderDialog = ({ isOpen, onClose, product, designUrl }: OrderDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    shippingAddress: '',
    quantity: 1,
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!designUrl) {
      toast.error("Please select a design first");
      return;
    }

    setIsSubmitting(true);
    try {
      const price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
      const { error } = await supabase.from('orders').insert({
        product_title: product.title,
        product_category: product.category,
        design_url: designUrl,
        quantity: formData.quantity,
        price: price * formData.quantity,
        customer_name: formData.customerName,
        customer_email: formData.customerEmail,
        shipping_address: formData.shippingAddress,
        notes: formData.notes
      });

      if (error) throw error;

      toast.success("Order placed successfully!");
      onClose();
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Place Order</DialogTitle>
          <DialogDescription>
            Complete your order details for {product.title}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customerName">Name</Label>
            <Input
              id="customerName"
              required
              value={formData.customerName}
              onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerEmail">Email</Label>
            <Input
              id="customerEmail"
              type="email"
              required
              value={formData.customerEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, customerEmail: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shippingAddress">Shipping Address</Label>
            <Textarea
              id="shippingAddress"
              required
              value={formData.shippingAddress}
              onChange={(e) => setFormData(prev => ({ ...prev, shippingAddress: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              required
              value={formData.quantity}
              onChange={(e) => setFormData(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Products = () => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [orderDialog, setOrderDialog] = useState<{
    isOpen: boolean;
    product: any;
  } | null>(null);

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

  const handleOrder = (product: any) => {
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
            <div key={index} className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
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
                          className="absolute" 
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
                      onClick={() => handleOrder({ ...product, category: category.category })}
                    >
                      {selectedDesign ? 'Order with Custom Design' : 'Create Your Design'}
                    </Button>
                  </div>
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