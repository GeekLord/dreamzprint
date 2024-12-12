import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenerativeAI } from "@google/generative-ai"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    if (!GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key')
    }

    const { description, productType } = await req.json()
    
    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    console.log("Generating prompt for:", { description, productType })

    const prompt = `Create a design prompt for a ${productType} design based on this description: "${description}".
    Focus on creating a standalone artistic design suitable for printing, without including the ${productType} itself.
    Consider these printing requirements:
    - High contrast and clear edges
    - Appropriate size and placement for ${productType}
    - No product mockups, just the design itself
    - Simple, clean artwork that will print well`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const improvedPrompt = response.text()

    console.log("Generated prompt:", improvedPrompt)

    return new Response(
      JSON.stringify({ improvedPrompt }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})