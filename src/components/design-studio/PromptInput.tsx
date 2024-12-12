import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Upload, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GEMINI_API_KEY } from "@/services/api-keys";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const PromptInput = ({ prompt, setPrompt }: PromptInputProps) => {
  const [productType, setProductType] = useState("t-shirt");
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
  const [inspirationImage, setInspirationImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast.error("Please upload a JPEG, PNG, or WEBP image");
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size must be less than 5MB");
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setInspirationImage(file);
    toast.success("Image uploaded successfully!");
  };

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setInspirationImage(null);
    setPreviewUrl(null);
  };

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
              text: `Create a concise, specific design prompt for a ${productType} design based on this description: "${prompt}".
              Follow these rules strictly:
              1. Focus only on the artistic design elements, not the ${productType} itself
              2. Keep the prompt under 100 words
              3. Emphasize these key aspects:
                - High contrast and clear edges for good printing
                - Simple, clean artwork without complex gradients
                - Bold, distinctive visual elements
                - Appropriate scale for ${productType} printing
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
      const cleanedPrompt = improvedPrompt
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      setPrompt(cleanedPrompt);
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
      <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm">
        <p className="text-muted-foreground">
          💡 <span className="font-medium">Pro tips:</span>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>For better results, first describe your design idea, then click "AI Idea Optimizer" to enhance your prompt.</li>
          <li>Upload an inspiration image to guide the AI in creating designs that match your vision. The AI will use it as a reference for style, colors, and composition.</li>
        </ul>
      </div>
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
            <SelectItem value="photo print">Photo Print</SelectItem>
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
          AI Idea Optimizer
        </Button>
      </div>
      <Textarea
        placeholder="Describe your design idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Upload Inspiration Image (Optional)
        </label>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="relative"
            onClick={() => document.getElementById('inspiration-image')?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Choose Image
            <input
              type="file"
              id="inspiration-image"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileUpload}
              className="hidden"
            />
          </Button>
          <span className="text-sm text-muted-foreground">
            Max size: 5MB (JPEG, PNG, WEBP)
          </span>
        </div>

        {previewUrl && (
          <div className="relative w-32 h-32">
            <img
              src={previewUrl}
              alt="Inspiration"
              className="w-full h-full object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptInput;
