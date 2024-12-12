import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the Design Studio work?",
      answer: `Our Design Studio uses advanced AI technology to create custom designs. Here's how it works:

1. Description: Start by describing your design idea in detail.
2. Product Optimization: Click "Optimize for Product" to refine your prompt for the specific product type you've chosen.
3. Inspiration Images: Optionally upload an image (JPEG, PNG, or WEBP, max 5MB) to inspire the AI. The system will use it as a reference for style and composition.
4. Generation: Click "Generate Design" to create your custom artwork.

The AI considers factors like contrast, printability, and product-specific requirements to ensure high-quality results.`
    },
    {
      question: "How do I get the best results from the Design Studio?",
      answer: `To get optimal results:
- Be specific in your design descriptions
- Use the "Optimize for Product" feature to tailor your prompt
- Upload inspiration images to guide the AI's style and composition
- Experiment with different descriptions and inspiration images
- Consider the product type when describing your design`
    },
    {
      question: "What products can I customize?",
      answer: "We offer customization for a wide range of products including t-shirts, wall art, photo books, and various gift items. Check out our Products page to see the full range of customizable items."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location and the product ordered. Generally, orders are processed within 2-3 business days, and shipping takes 5-7 business days for domestic orders."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Please visit our Returns Policy page for detailed information about our return process and eligibility criteria."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-24 space-y-12">
        {/* Introduction Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            <CardTitle>Welcome to DreamzPrint Help Center</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to our help center! Here you'll find everything you need to know about creating custom prints,
              managing your orders, and making the most of our AI-powered design tools. Browse through our frequently
              asked questions or reach out to our support team if you need additional assistance.
            </p>
          </CardContent>
        </Card>

        {/* Design Studio Guide Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <CardTitle>Design Studio Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Our Design Studio combines AI technology with your creativity to generate unique designs. Here's a detailed guide on how to use it:
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">1. Design Description</h3>
                <p className="text-muted-foreground">Start by describing your design idea in detail. The more specific you are, the better the results.</p>
                
                <h3 className="font-semibold">2. Product Selection</h3>
                <p className="text-muted-foreground">Choose the product type you want to create a design for. This helps optimize the design for specific printing requirements.</p>
                
                <h3 className="font-semibold">3. Prompt Optimization</h3>
                <p className="text-muted-foreground">Use the "Optimize for Product" feature to refine your description. This ensures the design works well for your chosen product.</p>
                
                <h3 className="font-semibold">4. Inspiration Images</h3>
                <p className="text-muted-foreground">Optionally upload an inspiration image to guide the AI. This helps achieve specific styles or compositions you're looking for.</p>
                
                <h3 className="font-semibold">5. Design Generation</h3>
                <p className="text-muted-foreground">Click "Generate Design" to create your custom artwork. The AI considers factors like contrast, printability, and product requirements.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
