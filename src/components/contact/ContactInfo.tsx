import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@dreamzprint.com",
    description: "Send us an email anytime!",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (662) 786-0001",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Dreamz Print, 11923 NE Sumner St",
    description: "STE 769554, Portland, Oregon, 97220",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "9:00 AM - 6:00 PM PST",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600">
          Have a question or need assistance? We're here to help! Fill out the form
          below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <item.icon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-900 font-medium">{item.content}</p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;