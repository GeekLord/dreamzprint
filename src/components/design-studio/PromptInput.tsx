import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Upload, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GEMINI_API_KEY } from "@/services/api-keys";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
  productType: string;
  setProductType: (type: string) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const PromptInput = ({ prompt, setPrompt, onImprove, isImprovingPrompt, productType, setProductType }: PromptInputProps) => {
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

  return (
    <TooltipProvider>
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm">
          <p className="text-muted-foreground">
            💡 <span className="font-medium">Pro tips:</span>
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>For better results, first describe your design idea, then click "AI Idea Optimizer" to enhance your prompt.</li>
            <li>For T-Shirts, Hoodies, Sweatshirts, and Tote Bags, your prompt will be automatically optimized before generation.</li>
            <li>Upload an inspiration image to guide the AI in creating designs that match your vision.</li>
          </ul>
        </div>
        <label className="block text-sm font-medium mb-2">
          Design Description
        </label>
        <div className="flex gap-2 mb-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex-grow">
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
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Select the type of product you want to create a design for. This helps optimize the AI generation.
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                onClick={onImprove}
                disabled={isImprovingPrompt || !prompt.trim()}
              >
                {isImprovingPrompt ? (
                  <>Optimizing...</>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    AI Idea Optimizer
                  </>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Click to optimize your prompt for better results
            </TooltipContent>
          </Tooltip>
        </div>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <Textarea
                placeholder="Describe your design idea..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Describe what you want in your design. Be specific about colors, style, and elements you want to include.
          </TooltipContent>
        </Tooltip>

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Upload Inspiration Image (Optional)
          </label>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
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
              </TooltipTrigger>
              <TooltipContent>
                Upload an image to inspire the AI. The generated design will incorporate elements from your reference image.
              </TooltipContent>
            </Tooltip>
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
    </TooltipProvider>
  );
};

export default PromptInput;