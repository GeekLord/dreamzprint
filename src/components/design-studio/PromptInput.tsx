import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onImprove: () => void;
  isImprovingPrompt: boolean;
}

const PromptInput = ({ prompt, setPrompt, onImprove, isImprovingPrompt }: PromptInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Design Description
      </label>
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