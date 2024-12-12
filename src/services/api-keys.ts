// Simple encoding to avoid plain text keys in source
const encode = (str: string) => btoa(str);
const decode = (str: string) => atob(str);

export const RUNWARE_API_KEY = decode("QmtZRElCdGdCaGZlRDZwZ2txVVJQdGlrUm0ybnNDQkQ=");
export const GEMINI_API_KEY = decode("QUl6YVN5QWZHenF1TWZmc09kbUt0amRoQUttcmhuRzdGakkwWk1z");

// Function to get API keys
export const getApiKeys = () => ({
  RUNWARE_API_KEY,
  GEMINI_API_KEY
});