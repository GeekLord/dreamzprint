import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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
    // Create a Supabase client with the Auth context of the function
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Now we can get the session or user object
    const {
      data: { user },
    } = await supabaseClient.auth.getUser()

    console.log("User context:", user?.id || "No user found")

    const { description, productType } = await req.json()
    console.log('Processing request:', { description, productType })

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY not found in environment variables')
      throw new Error('API key configuration missing')
    }

    const prompt = `Create a print-ready design description (max 50 words) for this idea: "${description}".
    Focus on the artwork/graphic only, no product.
    The design will be printed on a ${productType}, so ensure:
    - High contrast elements
    - Clear, readable design
    - No gradients or tiny details
    - Clean edges and shapes`

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