import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { toast } from "sonner";

interface ApiKeyManagerProps {
  onApiKeyUpdate: () => void;
  disabled?: boolean;
}

const ApiKeyManager = ({ onApiKeyUpdate, disabled }: ApiKeyManagerProps) => {
  const handleResetApiKey = () => {
    localStorage.removeItem("runware_api_key");
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