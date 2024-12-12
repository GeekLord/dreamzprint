import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Palette, Truck, CreditCard, RotateCcw, HelpCircle } from "lucide-react";

const KnowledgeBase = () => {
  const sections = [
    {
      title: "Design Studio Guide",
      icon: <Palette className="h-5 w-5" />,
      content: [
        {
          question: "How does the Design Studio work?",
          answer: `Our AI-powered Design Studio helps you create unique custom designs in a few simple steps:

1. Enter your design description or idea
2. Optionally upload inspiration images (JPEG, PNG, or WEBP, max 5MB)
3. Click "Generate Design" to create your artwork
4. Use our editing tools to:
   - Remove backgrounds
   - Download your design
   - Apply it to products

The AI considers factors like contrast, printability, and product requirements to ensure high-quality results.`
        },
        {
          question: "How to get the best results?",
          answer: `To achieve optimal results:
- Be specific in your design descriptions
- Use clear, detailed prompts
- Upload inspiration images for style reference
- Consider the final product when describing your design
- Experiment with different descriptions and variations`
        }
      ]
    },
    {
      title: "Products & Printing",
      icon: <Truck className="h-5 w-5" />,
      content: [
        {
          question: "What products can I customize?",
          answer: "We offer a wide range of customizable products including t-shirts, hoodies, canvas prints, wall art, phone cases, and more. Each product is carefully selected for optimal print quality and durability."
        },
        {
          question: "What's your printing process?",
          answer: "We use state-of-the-art digital printing technology to ensure vibrant colors and detailed designs. Our process is optimized for each product type to guarantee the best results and longevity."
        }
      ]
    },
    {
      title: "Ordering & Payment",
      icon: <CreditCard className="h-5 w-5" />,
      content: [
        {
          question: "How do I place an order?",
          answer: "1. Create your design in the Design Studio\n2. Choose your product\n3. Select size and quantity\n4. Add to cart\n5. Enter shipping details\n6. Complete payment"
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and other secure payment methods. All transactions are encrypted and processed securely."
        }
      ]
    },
    {
      title: "Shipping & Returns",
      icon: <RotateCcw className="h-5 w-5" />,
      content: [
        {
          question: "What are your shipping times?",
          answer: "Standard shipping takes 5-7 business days within the US. International shipping times vary by location. Express shipping options are available at checkout."
        },
        {
          question: "What's your return policy?",
          answer: "We offer a 30-day return policy for most items. If you're not satisfied with your purchase, contact our customer service team for a return authorization. Custom-designed items may have special return conditions."
        }
      ]
    },
    {
      title: "Additional Resources",
      icon: <Book className="h-5 w-5" />,
      content: [
        {
          question: "Do you offer design assistance?",
          answer: "Yes! Our AI-powered Design Studio helps you create unique designs. For additional assistance, our support team is available to help with design-related questions."
        },
        {
          question: "Where can I find inspiration?",
          answer: "Check out our blog for design tips and trending ideas. You can also browse our gallery of successful designs or follow us on social media for regular inspiration."
        }
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <CardTitle>Knowledge Base</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {section.content.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${index}-${itemIndex}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="whitespace-pre-line text-muted-foreground">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default KnowledgeBase;