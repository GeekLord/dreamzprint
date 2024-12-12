import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { RunwareService, GenerateImageParams } from "../services/runware";
import PromptInput from "../components/design-studio/PromptInput";
import DesignPreview from "../components/design-studio/DesignPreview";
import { supabase } from "@/integrations/supabase/client";

const DesignStudio = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please log in to use the Design Studio");
        navigate("/login");
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

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
      const response = await fetch("https://api.runware.ai/v1/improve-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to improve prompt");
      }

      if (!data.improvedPrompt) {
        throw new Error("Invalid response from server");
      }

      setPrompt(data.improvedPrompt);
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
