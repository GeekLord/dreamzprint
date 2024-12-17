import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";
import PromptInput from "./PromptInput";

interface GenerationFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprovePrompt: () => void;
  isImprovingPrompt: boolean;
  productType: string;
  setProductType: (type: string) => void;
  isGenerating: boolean;
  progress: number;
  onGenerate: () => void;
}

const GenerationForm = ({
  prompt,
  setPrompt,
  onImprovePrompt,
  isImprovingPrompt,
  productType,
  setProductType,
  isGenerating,
  progress,
  onGenerate,
}: GenerationFormProps) => {
  return (
    <div className="space-y-4">
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        onImprove={onImprovePrompt}
        isImprovingPrompt={isImprovingPrompt}
        productType={productType}
        setProductType={setProductType}
      />
      {isGenerating && (
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground text-center">
            {progress < 40 && "Preparing design parameters..."}
            {progress >= 40 && progress < 60 && "Optimizing prompt..."}
            {progress >= 60 && progress < 80 && "Generating design..."}
            {progress >= 80 && progress < 100 && "Finalizing design..."}
            {progress === 100 && "Design generated!"}
          </p>
        </div>
      )}
      <Button
        onClick={onGenerate}
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
  );
};

export default GenerationForm;