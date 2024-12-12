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
import ApiKeyManager from "../components/design-studio/ApiKeyManager";

const DesignStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);

  const requestApiKey = () => {
    const key = window.prompt(
      "Please enter your Runware API key (get one at https://my.runware.ai/signup):"
    );
    if (key?.trim()) {
      localStorage.setItem("runware_api_key", key.trim());
      return key.trim();
    }
    return null;
  };

  const improvePrompt = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description first");
      return;
    }

    const apiKey = localStorage.getItem("runware_api_key");
    if (!apiKey) {
      toast.error("API key is required to improve prompts");
      return;
    }

    setIsImprovingPrompt(true);
    try {
      const ws = new WebSocket("wss://ws-api.runware.ai/v1");
      
      const taskUUID = crypto.randomUUID();
      
      await new Promise((resolve, reject) => {
        ws.onopen = () => {
          console.log("WebSocket connected for prompt improvement");
          const messages = [
            {
              taskType: "authentication",
              apiKey: apiKey
            },
            {
              taskType: "promptImprovement",
              taskUUID: taskUUID,
              prompt: prompt
            }
          ];
          ws.send(JSON.stringify(messages));
        };

        ws.onmessage = (event) => {
          console.log("Received prompt improvement response:", event.data);
          const response = JSON.parse(event.data);
          
          if (response.error || response.errors) {
            const errorMessage = response.errorMessage || response.errors?.[0]?.message || "Failed to improve prompt";
            reject(new Error(errorMessage));
            return;
          }

          if (response.data) {
            const improvedPromptData = response.data.find(
              (item: any) => item.taskType === "promptImprovement" && item.taskUUID === taskUUID
            );
            
            if (improvedPromptData?.improvedPrompt) {
              setPrompt(improvedPromptData.improvedPrompt);
              resolve(improvedPromptData.improvedPrompt);
            } else {
              reject(new Error("No improved prompt received"));
            }
          }
        };

        ws.onerror = (error) => {
          console.error("WebSocket error during prompt improvement:", error);
          reject(new Error("Connection error"));
        };

        // Set a timeout for the request
        setTimeout(() => {
          reject(new Error("Request timed out"));
          ws.close();
        }, 30000);
      });

      toast.success("Prompt improved successfully!");
    } catch (error) {
      console.error("Error improving prompt:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to improve prompt. Please try again."
      );

      if (error instanceof Error && error.message.includes("Missing API Key")) {
        localStorage.removeItem("runware_api_key");
      }
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
      let apiKey = localStorage.getItem("runware_api_key");

      if (!apiKey?.trim()) {
        apiKey = requestApiKey();
        if (!apiKey) {
          toast.error("API key is required to generate images");
          return;
        }
      }

      const runwareService = new RunwareService(apiKey);
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
      if (error.toString().includes("Missing API Key")) {
        localStorage.removeItem("runware_api_key");
        toast.error("Invalid API key. Please try again with a valid key.");
      } else {
        toast.error("Failed to generate design. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Design Studio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Create Your Design</h2>
            <div className="space-y-4">
              <PromptInput
                prompt={prompt}
                setPrompt={setPrompt}
                onImprove={improvePrompt}
                isImprovingPrompt={isImprovingPrompt}
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex-1"
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
                <ApiKeyManager
                  onApiKeyUpdate={() => {}}
                  disabled={isGenerating}
                />
              </div>
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