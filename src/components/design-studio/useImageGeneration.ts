import { useState } from "react";
import { toast } from "sonner";
import { RunwareService, GenerateImageParams } from "@/services/runware";
import { RUNWARE_API_KEY } from "@/services/api-keys";

interface UseImageGenerationProps {
  prompt: string;
  productType: string;
}

export const useImageGeneration = ({ prompt, productType }: UseImageGenerationProps) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);
  const [progress, setProgress] = useState(0);

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

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description");
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      let finalPrompt = prompt;
      
      // Start progress for prompt optimization
      if (['t-shirt', 'hoodie', 'sweatshirt', 'tote bag'].includes(productType.toLowerCase())) {
        try {
          setIsImprovingPrompt(true);
          setProgress(20);
          toast.info("Optimizing prompt for better results...");
          finalPrompt = await generateProductPrompt(prompt, productType);
          setProgress(40);
          toast.success("Prompt optimized for better results!");
        } catch (error) {
          console.error("Error optimizing prompt:", error);
          toast.error("Failed to optimize prompt, using original prompt instead");
          finalPrompt = prompt;
        } finally {
          setIsImprovingPrompt(false);
        }
      } else {
        setProgress(40);
      }

      // Image generation progress
      setProgress(60);
      const runwareService = new RunwareService(RUNWARE_API_KEY);
      const params: GenerateImageParams = {
        positivePrompt: finalPrompt,
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "PNG",
        width: 1024,
        height: 1024,
      };

      setProgress(80);
      const result = await runwareService.generateImage(params);
      setGeneratedImage(result.imageURL);
      setProgress(100);
      toast.success("Design generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate design. Please try again.");
    } finally {
      setIsGenerating(false);
      // Reset progress after a delay
      setTimeout(() => setProgress(0), 1000);
    }
  };

  return {
    generatedImage,
    isGenerating,
    isImprovingPrompt,
    progress,
    handleGenerate,
  };
};
