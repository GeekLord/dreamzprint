import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (data: FormData) => {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${atob(import.meta.env.VITE_SENDGRID_API_KEY)}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "cyber.mitra@gmail.com" }],
          },
        ],
        from: { email: "contact@dreamzprint.com" },
        subject: `Contact Form: ${data.subject}`,
        content: [
          {
            type: "text/plain",
            value: `
              New Contact Form Submission
              
              From: ${data.name} (${data.email})
              Subject: ${data.subject}
              
              Message:
              ${data.message}
            `,
          },
        ],
        reply_to: { email: data.email, name: data.name },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("SendGrid API error:", error);
      throw new Error("Failed to send email");
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle Netlify form submission
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Send email via SendGrid
      await sendEmail(formData as unknown as FormData);

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form 
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            placeholder="What is your message about?"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[150px]"
            required
            placeholder="Tell us how we can help you..."
            disabled={isSubmitting}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;