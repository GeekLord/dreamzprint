import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
}

const PromptInput = ({ prompt, setPrompt }: PromptInputProps) => {
  const [productType, setProductType] = useState("t-shirt");
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);

  const generateProductPrompt = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description first");
      return;
    }

    if (!supabase) {
      toast.error("Supabase client is not initialized. Please check your environment variables.");
      return;
    }

    setIsGeneratingPrompt(true);
    try {
      console.log("Calling generate-product-prompt with:", { description: prompt, productType });

      const { data, error } = await supabase.functions.invoke('generate-product-prompt', {
        body: {
          description: prompt,
          productType: productType,
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      console.log("Response from generate-product-prompt:", { data, error });

      if (error) {
        throw error;
      }

      if (!data?.improvedPrompt) {
        throw new Error("Invalid response from server");
      }

      setPrompt(data.improvedPrompt);
      toast.success("Generated product-optimized prompt!");
    } catch (error) {
      console.error("Error generating prompt:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to generate prompt. Please try again."
      );
    } finally {
      setIsGeneratingPrompt(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium mb-2">
        Design Description
      </label>
      <div className="flex gap-2 mb-2">
        <Select value={productType} onValueChange={setProductType}>
          <SelectTrigger>
            <SelectValue placeholder="Select product type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="t-shirt">T-Shirt</SelectItem>
            <SelectItem value="mug">Mug</SelectItem>
            <SelectItem value="hoodie">Hoodie</SelectItem>
            <SelectItem value="phone case">Phone Case</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="secondary"
          onClick={generateProductPrompt}
          disabled={isGeneratingPrompt || !prompt.trim()}
          className="flex-shrink-0"
        >
          <Sparkles className={`h-4 w-4 mr-2 ${isGeneratingPrompt ? 'animate-pulse' : ''}`} />
          Optimize for Product
        </Button>
      </div>
      <Textarea
        placeholder="Describe your design idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[100px]"
      />
    </div>
  );
};

export default PromptInput;