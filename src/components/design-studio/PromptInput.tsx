import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
}

const PromptInput = ({ prompt, setPrompt }: PromptInputProps) => {
  const [productType, setProductType] = useState("t-shirt");
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);

  const requestApiKey = () => {
    const key = window.prompt(
      "Please enter your Gemini API key (get one at https://makersuite.google.com/app/apikey):"
    );
    if (key?.trim()) {
      localStorage.setItem("gemini_api_key", key.trim());
      return key.trim();
    }
    return null;
  };

  const generateProductPrompt = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description first");
      return;
    }

    setIsGeneratingPrompt(true);
    try {
      console.log("Generating product-optimized prompt for:", { description: prompt, productType });

      let apiKey = localStorage.getItem("gemini_api_key");

      if (!apiKey?.trim()) {
        apiKey = requestApiKey();
        if (!apiKey) {
          toast.error("API key is required to generate prompts");
          return;
        }
      }

      const promptText = `Create a detailed, product-optimized design prompt for a ${productType} based on this description: "${prompt}". 
      Focus on making the design visually appealing and suitable for printing on ${productType}s.
      Consider contrast, readability, and printing limitations.`;

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: promptText
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Gemini API error:', errorData);
        if (response.status === 403) {
          localStorage.removeItem("gemini_api_key");
          toast.error("Invalid API key. Please try again with a valid key.");
          return;
        }
        throw new Error(`Failed to generate prompt: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('Received response from Gemini:', responseData);

      if (!responseData.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from Gemini API');
      }

      const improvedPrompt = responseData.candidates[0].content.parts[0].text.trim();
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