import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { useImageGeneration } from "../components/design-studio/useImageGeneration";
import DesignPreview from "../components/design-studio/DesignPreview";
import GenerationForm from "../components/design-studio/GenerationForm";
import { toast } from "sonner";

const DesignStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [productType, setProductType] = useState("t-shirt");
  const [isImprovingPrompt, setIsImprovingPrompt] = useState(false);

  const {
    generatedImage,
    isGenerating,
    progress,
    handleGenerate,
    generateProductPrompt,
  } = useImageGeneration({ prompt, productType });

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
            <GenerationForm
              prompt={prompt}
              setPrompt={setPrompt}
              onImprovePrompt={handleImprovePrompt}
              isImprovingPrompt={isImprovingPrompt}
              productType={productType}
              setProductType={setProductType}
              isGenerating={isGenerating}
              progress={progress}
              onGenerate={handleGenerate}
            />
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