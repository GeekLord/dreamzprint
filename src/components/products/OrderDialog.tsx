import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/types/product";

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  designUrl: string | null;
}

export const OrderDialog = ({ isOpen, onClose, product, designUrl }: OrderDialogProps) => {
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
      const { error } = await supabase
        .from('orders')
        .insert({
          product_title: product.title,
          product_category: product.category,
          design_url: designUrl,
          quantity: formData.quantity,
          price: price * formData.quantity,
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          shipping_address: formData.shippingAddress,
          notes: formData.notes,
          status: 'pending'
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