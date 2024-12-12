import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    const emailContent = `
      New Contact Form Submission
      
      From: ${formData.name} (${formData.email})
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
    `;

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "cyber.mitra@gmail.com" }],
          },
        ],
        from: { email: "contact@dreamzprint.com" },
        subject: `Contact Form: ${formData.subject}`,
        content: [
          {
            type: "text/plain",
            value: emailContent,
          },
        ],
        reply_to: { email: formData.email, name: formData.name },
      }),
    });

    if (res.ok) {
      console.log("Email sent successfully via SendGrid");
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else {
      const error = await res.text();
      console.error("SendGrid API error:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);