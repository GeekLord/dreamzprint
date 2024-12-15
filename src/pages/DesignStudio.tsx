import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { RunwareService, GenerateImageParams } from "../services/runware";
import PromptInput from "../components/design-studio/PromptInput";
import DesignPreview from "../components/design-studio/DesignPreview";
import { RUNWARE_API_KEY, GEMINI_API_KEY } from "@/services/api-keys";

const DesignStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);
  const [productType, setProductType] = useState("t-shirt");

  const generateProductPrompt = async (description: string, type: string) => {
    try {
      console.log("Generating product-optimized prompt for:", { description, type });

      const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Create a concise, specific design prompt for a ${type} design based on this description: "${description}".
              Follow these rules strictly:
              1. Focus only on the artistic design elements, not the ${type} itself
              2. Keep the prompt under 100 words
              3. Emphasize these key aspects:
                - High contrast and clear edges for good printing
                - Simple, clean artwork without complex gradients
                - Bold, distinctive visual elements
                - Appropriate scale for ${type} printing
              4. Remove any references to the product itself
              5. Format as a single, clear description without bullet points
              6. Avoid phrases like "design of" or "featuring" - be direct
              7. Focus on the visual elements only, no marketing or conceptual language`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate prompt');
      }

      const data = await response.json();
      const improvedPrompt = data.candidates[0].content.parts[0].text;

      // Clean up the response by removing any line breaks and extra spaces
      return improvedPrompt
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    } catch (error) {
      console.error("Error generating prompt:", error);
      throw error;
    }
  };

  const handleImprovePrompt = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description first");
      return;
    }

    setIsImprovingPrompt(true);
    try {
      const improvedPrompt = await generateProductPrompt(prompt, productType);
      setPrompt(improvedPrompt);
      toast.success("Prompt optimized successfully!");
    } catch (error) {
      console.error("Error improving prompt:", error);
      toast.error("Failed to optimize prompt. Please try again.");
    } finally {
      setIsImprovingPrompt(false);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description");
      return;
    }

    setIsGenerating(true);
    try {
      let finalPrompt = prompt;
      
      // Auto-optimize prompt for specific product types
      if (['t-shirt', 'hoodie', 'sweatshirt', 'tote bag'].includes(productType.toLowerCase())) {
        try {
          setIsImprovingPrompt(true);
          toast.info("Optimizing prompt for better results...");
          finalPrompt = await generateProductPrompt(prompt, productType);
          toast.success("Prompt optimized for better results!");
        } catch (error) {
          console.error("Error optimizing prompt:", error);
          toast.error("Failed to optimize prompt, using original prompt instead");
          finalPrompt = prompt; // Fallback to original prompt
        } finally {
          setIsImprovingPrompt(false);
        }
      }

      const runwareService = new RunwareService(RUNWARE_API_KEY);
      const params: GenerateImageParams = {
        positivePrompt: finalPrompt,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        width: 1024,
        height: 1024,
      };

      const result = await runwareService.generateImage(params);
      setGeneratedImage(result.imageURL);
      toast.success("Design generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate design. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text animate-float animate-gradient-x bg-[length:200%_auto]">
          Dreamz Print : Design Studio
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Create Your Design</h2>
            <div className="space-y-4">
              <PromptInput
                prompt={prompt}
                setPrompt={setPrompt}
                onImprove={handleImprovePrompt}
                isImprovingPrompt={isImprovingPrompt}
                productType={productType}
                setProductType={setProductType}
              />
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Design"
                )}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <DesignPreview
              imageUrl={generatedImage}
              isLoading={isGenerating}
              selectedProduct={productType}
            />
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignStudio;
