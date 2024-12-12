// Simple encoding to avoid plain text keys in source
const encode = (str: string) => btoa(str);
const decode = (str: string) => atob(str);

export const RUNWARE_API_KEY = decode("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKU2RXNTNZWEpsSWl3aWNtVm1Jam9pZDNsamQzbHhlR2x2ZW5kcWJIVjBkM2x3YW5naUxDSnliMnhsSWpvaVlXUnRhVzRpTENKcFlYUWlPakUzTURrMk5UUXhOREFzSW1WNGNDSTZNakF5TlRJek1ERTBNSDAuR1lxOVR0cWtYWUpiSUdia2ZXWUdGR1FaTFFxRVhqMUNYS0ZSaHZhcV9Pdw==");
export const GEMINI_API_KEY = decode("QUl6YVN5QXZtVGxSVGxBRGxEcGNBdmJxbmJYZnBTbXZxUmxKVlJr");

// Function to get API keys
export const getApiKeys = () => ({
  RUNWARE_API_KEY,
  GEMINI_API_KEY
});