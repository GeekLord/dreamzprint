// Simple encoding to avoid plain text keys in source
const encode = (str: string) => btoa(str);
const decode = (str: string) => atob(str);

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Use environment variable with fallback to hardcoded value
export const RUNWARE_API_KEY = import.meta.env.RUNWARE_API_KEY || 'iBFMgjNzHpJyydIrcNAumsy194R1Kfk3';

// Gemini API Key - used for prompt enhancement in image generation
export const GEMINI_API_KEY = 'AIzaSyAfGzquMffsOdmKtjdhAKmrhnG7FjI0ZMs';


// Function to get API keys
export const getApiKeys = () => ({
  RUNWARE_API_KEY,
  GEMINI_API_KEY
});
