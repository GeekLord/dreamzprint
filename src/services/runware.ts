import { RUNWARE_API_KEY } from "./api-keys";

export interface GenerateImageParams {
  positivePrompt: string;
  model: string;
  numberResults: number;
  outputFormat: string;
  width: number;
  height: number;
}

export class RunwareService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.runware.com';
  }

  async generateImage(params: GenerateImageParams): Promise<{ imageURL: string }> {
    try {
      console.log('Generating image with params:', params);
      const response = await fetch(`${this.baseUrl}/v1/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        console.error('API request failed:', response.status, response.statusText);
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Generated image response:', data);
      return { imageURL: data.imageURL };
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  }
}