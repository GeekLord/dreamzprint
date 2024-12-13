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
import { RUNWARE_API_KEY } from "@/services/api-keys";

const DesignStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description");
      return;
    }

    setIsGenerating(true);
    try {
      const runwareService = new RunwareService(RUNWARE_API_KEY);
      const params: GenerateImageParams = {
        positivePrompt: prompt,
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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#F97316] text-transparent bg-clip-text animate-float">
          Dreamz Print : Design Studio
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Create Your Design</h2>
            <div className="space-y-4">
              <PromptInput
                prompt={prompt}
                setPrompt={setPrompt}
                onImprove={() => {}}
                isImprovingPrompt={isImprovingPrompt}
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
            />
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignStudio;