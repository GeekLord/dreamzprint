import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { description, productType } = await req.json()
    console.log('Processing request for:', { description, productType })

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured')
    }

    console.log('Calling Gemini API...')
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an expert at creating prompts for AI image generation that work well for printing on products like ${productType}s. 
            Create a detailed prompt for an AI image generator to create a design for a ${productType}. The design should be based on this description: "${description}"
            
            Make sure the prompt:
            - Is detailed and specific
            - Works well for ${productType}s
            - Includes style guidance for clean, printable results
            - Maintains appropriate contrast and readability
            - Considers the product's printing limitations
            
            Return only the improved prompt text, nothing else.`
          }]
        }]
      })
    })

    const data = await response.json()
    console.log('Gemini response:', data)

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate prompt')
    }

    const improvedPrompt = data.candidates[0].content.parts[0].text.trim()

    return new Response(
      JSON.stringify({ improvedPrompt }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in generate-product-prompt function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})