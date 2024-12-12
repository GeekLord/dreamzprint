import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
    ],
    Products: [
      { name: "T-Shirts", path: "/products" },
      { name: "Wall Art", path: "/products" },
      { name: "Photo Print", path: "/products" },
      { name: "Gifts", path: "/products" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Returns Policy", path: "/returns" },
    ],
  };

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DreamzPrint
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Transform your ideas into beautiful custom prints with AI-powered design tools.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-base text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} DreamzPrint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;