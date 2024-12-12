import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KnowledgeBase from "@/components/KnowledgeBase";

const FAQ = () => {
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

        {/* Knowledge Base Section */}
        <KnowledgeBase />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;