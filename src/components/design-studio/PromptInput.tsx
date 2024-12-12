import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
}

const PromptInput = ({ prompt, setPrompt, onImprove, isImprovingPrompt }: PromptInputProps) => {
  const [productType, setProductType] = useState("t-shirt");
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);

  const generateProductPrompt = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description first");
      return;
    }

    setIsGeneratingPrompt(true);
    try {
      const response = await fetch("https://wycwyqxiozwjlutwypjx.supabase.co/functions/v1/generate-product-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: prompt,
          productType: productType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate prompt");
      }

      const data = await response.json();
      setPrompt(data.improvedPrompt);
      toast.success("Generated product-optimized prompt!");
    } catch (error) {
      console.error("Error generating prompt:", error);
      toast.error("Failed to generate prompt. Please try again.");
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
      <div className="relative">
        <Textarea
          placeholder="Describe your design idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] pr-10"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2"
          onClick={onImprove}
          disabled={isImprovingPrompt || !prompt.trim()}
          title="Improve prompt with AI"
        >
          <Wand2 className={`h-4 w-4 ${isImprovingPrompt ? 'animate-pulse' : ''}`} />
        </Button>
      </div>
    </div>
  );
};

export default PromptInput;