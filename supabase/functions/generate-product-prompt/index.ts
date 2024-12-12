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
    console.log('Processing request:', { description, productType })

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY not found in environment variables')
      throw new Error('API key configuration missing')
    }

    const prompt = `Create a detailed, product-optimized design prompt for a ${productType} based on this description: "${description}". 
    Focus on making the design visually appealing and suitable for printing on ${productType}s.
    Consider contrast, readability, and printing limitations.`

    console.log('Sending request to Gemini API')
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API error:', errorData)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    console.log('Received response from Gemini')

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Invalid response format from Gemini:', data)
      throw new Error('Invalid response format from Gemini API')
    }

    const improvedPrompt = data.candidates[0].content.parts[0].text.trim()
    console.log('Generated prompt:', improvedPrompt)

    return new Response(
      JSON.stringify({ improvedPrompt }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error in generate-product-prompt function:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to generate prompt. Please try again.'
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})