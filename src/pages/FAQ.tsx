import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, HelpCircle, QuestionMark } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a custom design?",
      answer: "You can use our Design Studio to create custom designs. Simply click on the 'Design Studio' link in the navigation menu and follow the intuitive interface to create your unique design using AI-powered tools."
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

        {/* Help Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you can't find the answer you're looking for, our support team is here to help:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Email us at support@dreamzprint.com</li>
              <li>Visit our Contact page for more ways to reach us</li>
              <li>Check our detailed guides in the Design Studio</li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <QuestionMark className="h-6 w-6 text-primary" />
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