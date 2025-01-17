import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ApiKeyManagerProps {
  onApiKeyUpdate: () => void;
  disabled?: boolean;
}

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

const ApiKeyManager = ({ onApiKeyUpdate, disabled }: ApiKeyManagerProps) => {
  const handleResetApiKey = async () => {
    if (!supabase) {
      toast.error("Supabase configuration is missing. Please check your environment variables.");
      return;
    }

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            onClick={handleResetApiKey}
            disabled={disabled}
            title="Update API Key"
          >
            <Key className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Refresh your API key to ensure uninterrupted access to the design generation service
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ApiKeyManager;