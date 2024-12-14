import { Paintbrush, Zap, Shield, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "AI-Powered Design",
      description: "Create unique designs with our intelligent design assistant",
      gradientColors: "from-[#9b87f5] to-[#6E59A5]"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Preview",
      description: "See your designs come to life in real-time on our products",
      gradientColors: "from-[#98FB98] to-[#98FB98]"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Premium materials and expert printing for lasting quality",
      gradientColors: "from-[#0EA5E9] to-[#0369A1]"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick processing and reliable shipping worldwide",
      gradientColors: "from-[#D946EF] to-[#A21CAF]"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose DreamzPrint?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the perfect blend of technology and creativity
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradientColors} rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-lg`} />
              <div className="relative bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#F1F0FB] rounded-lg flex items-center justify-center text-[#6E59A5] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;