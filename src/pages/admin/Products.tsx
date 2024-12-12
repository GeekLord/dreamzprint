import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ProductDialog } from "@/components/admin/ProductDialog";
import { DeleteDialog } from "@/components/admin/DeleteDialog";
import type { Product } from "@/types/product";

const Products = () => {
  const [productDialog, setProductDialog] = useState<{
    isOpen: boolean;
    product?: Product;
  }>({ isOpen: false });
  const [deleteDialog, setDeleteDialog] = useState<{
    isOpen: boolean;
    product?: Product;
  }>({ isOpen: false });

  const { data: products, refetch } = useQuery({
    queryKey: ['adminProducts'],
    queryFn: async () => {
      console.log('Fetching products...');
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

      console.log('Products fetched:', data);
      return data;
    }
  });

  const handleDelete = async (product: Product) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', product.id);

      if (error) throw error;

      toast.success('Product deleted successfully');
      refetch();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={() => setProductDialog({ isOpen: true })}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setProductDialog({ isOpen: true, product })}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDeleteDialog({ isOpen: true, product })}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ProductDialog
        open={productDialog.isOpen}
        product={productDialog.product}
        onClose={() => setProductDialog({ isOpen: false })}
        onSuccess={() => {
          setProductDialog({ isOpen: false });
          refetch();
        }}
      />

      <DeleteDialog
        open={deleteDialog.isOpen}
        title="Delete Product"
        description="Are you sure you want to delete this product? This action cannot be undone."
        onClose={() => setDeleteDialog({ isOpen: false })}
        onConfirm={() => {
          if (deleteDialog.product) {
            handleDelete(deleteDialog.product);
          }
          setDeleteDialog({ isOpen: false });
        }}
      />
    </div>
  );
};

export default Products;