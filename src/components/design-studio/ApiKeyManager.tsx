import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { toast } from "sonner";

interface ApiKeyManagerProps {
  onApiKeyUpdate: () => void;
  disabled?: boolean;
}

const DEFAULT_API_KEY = "YOUR_DEFAULT_RUNWARE_API_KEY"; // Replace this with your actual API key

const ApiKeyManager = ({ onApiKeyUpdate, disabled }: ApiKeyManagerProps) => {
  const handleResetApiKey = () => {
    // If there's no API key stored, use the default one
    if (!localStorage.getItem("runware_api_key")) {
      localStorage.setItem("runware_api_key", DEFAULT_API_KEY);
      toast.success("Using default API key");
      onApiKeyUpdate();
      return;
    }

    // Otherwise, allow manual input for advanced users
    const key = window.prompt(
      "Please enter your Runware API key (get one at https://my.runware.ai/signup):"
    );
    if (key?.trim()) {
      localStorage.setItem("runware_api_key", key.trim());
      toast.success("API key updated successfully!");
      onApiKeyUpdate();
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleResetApiKey}
      disabled={disabled}
      title="Update API Key"
    >
      <Key className="h-4 w-4" />
    </Button>
  );
};

export default ApiKeyManager;
