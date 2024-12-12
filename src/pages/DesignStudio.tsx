import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Loader2, Key } from "lucide-react";
import { toast } from "sonner";
import { RunwareService, GenerateImageParams } from "../services/runware";

const DesignStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const requestApiKey = () => {
    const key = window.prompt("Please enter your Runware API key (get one at https://my.runware.ai/signup):");
    if (key?.trim()) {
      localStorage.setItem("runware_api_key", key.trim());
      return key.trim();
    }
    return null;
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a design description");
      return;
    }

    setIsGenerating(true);
    try {
      let apiKey = localStorage.getItem("runware_api_key");
      
      // If no API key exists or it's invalid, request it
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
      // If we get an API key error, clear the stored key and ask for a new one
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

  const handleResetApiKey = () => {
    localStorage.removeItem("runware_api_key");
    const newKey = requestApiKey();
    if (newKey) {
      toast.success("API key updated successfully!");
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
              <div>
                <label className="block text-sm font-medium mb-2">
                  Design Description
                </label>
                <Textarea
                  placeholder="Describe your design idea..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
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
                <Button
                  variant="outline"
                  onClick={handleResetApiKey}
                  disabled={isGenerating}
                  title="Update API Key"
                >
                  <Key className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="aspect-square bg-accent rounded-lg overflow-hidden">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated design"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Your design will appear here
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignStudio;