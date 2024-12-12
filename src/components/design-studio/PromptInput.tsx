import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GEMINI_API_KEY } from "@/services/api-keys";

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

    setIsGeneratingPrompt(true);
    try {
      console.log("Generating product-optimized prompt for:", { description: prompt, productType });

      const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Create a design prompt for a ${productType} design based on this description: "${prompt}".
              Focus on creating a standalone artistic design suitable for printing, without including the ${productType} itself.
              Consider these printing requirements:
              - High contrast and clear edges
              - Appropriate size and placement for ${productType}
              - No product mockups, just the design itself
              - Simple, clean artwork that will print well`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate prompt');
      }

      const data = await response.json();
      const improvedPrompt = data.candidates[0].content.parts[0].text;

      setPrompt(improvedPrompt);
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
            <SelectItem value="hoodie">Hoodie</SelectItem>
            <SelectItem value="sweatshirt">Sweatshirt</SelectItem>
            <SelectItem value="phone case">Phone Case</SelectItem>
            <SelectItem value="wall art">Wall Art</SelectItem>
            <SelectItem value="photo book">Photo Book</SelectItem>
            <SelectItem value="canvas print">Canvas Print</SelectItem>
            <SelectItem value="tote bag">Tote Bag</SelectItem>
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