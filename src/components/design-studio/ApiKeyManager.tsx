import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';

interface ApiKeyManagerProps {
  onApiKeyUpdate: () => void;
  disabled?: boolean;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ApiKeyManager = ({ onApiKeyUpdate, disabled }: ApiKeyManagerProps) => {
  const handleResetApiKey = async () => {
    try {
      const { data: { RUNWARE_API_KEY }, error } = await supabase.functions.invoke('get-secret', {
        body: { key: 'RUNWARE_API_KEY' }
      });

      if (error) throw error;

      if (RUNWARE_API_KEY) {
        localStorage.setItem("runware_api_key", RUNWARE_API_KEY);
        toast.success("API key loaded successfully!");
        onApiKeyUpdate();
      } else {
        toast.error("No API key found. Please add it in the project settings.");
      }
    } catch (error) {
      console.error('Error fetching API key:', error);
      toast.error("Failed to load API key. Please try again.");
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