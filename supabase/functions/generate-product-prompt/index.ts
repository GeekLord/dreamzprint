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
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      throw new Error('Missing OpenAI API key')
    }

    console.log('Generating prompt for:', { description, productType })

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an expert at creating prompts for AI image generation that work well for printing on products like t-shirts and mugs. 
            Create prompts that:
            - Are detailed and specific
            - Work well for ${productType}s
            - Include style guidance for clean, printable results
            - Maintain appropriate contrast and readability
            - Consider the product's printing limitations`
          },
          {
            role: 'user',
            content: `Create a detailed prompt for an AI image generator to create a design for a ${productType}. The design should be based on this description: "${description}". The result should work well when printed on the ${productType}.`
          }
        ],
      }),
    })

    const data = await response.json()
    console.log('OpenAI response:', data)

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate prompt')
    }

    const improvedPrompt = data.choices[0].message.content

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