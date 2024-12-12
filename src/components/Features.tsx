const Features = () => {
  const features = [
    {
      title: "AI-Powered Design",
      description: "Create unique designs instantly with our advanced AI technology",
      icon: "/lovable-uploads/079dd5ab-c6a7-42a5-b758-91ed0076b902.png"
    },
    {
      title: "Premium Quality",
      description: "High-quality materials and printing for lasting products",
      icon: "/lovable-uploads/2ecb0533-68aa-49ea-be4c-90ab318cc2fa.png"
    },
    {
      title: "Easy Customization",
      description: "Simple tools to personalize your designs exactly how you want",
      icon: "/lovable-uploads/2dc945e6-b664-46da-8a5c-24e2926fd585.png"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the perfect blend of technology and creativity
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="aspect-square mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;