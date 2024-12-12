import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Transform Your Ideas Into Custom Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Create unique designs with AI and bring them to life on premium quality products. From t-shirts to wall art, make something truly yours.
            </p>
            <div className="flex gap-4">
              <Link to="/design-studio">
                <Button size="lg" className="gap-2">
                  <Wand2 className="w-5 h-5" />
                  Start Creating
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <img
              src="/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png"
              alt="AI-generated custom product designs"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;