import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Settings,
  Package,
  Users,
  Mail,
  CreditCard,
  Key,
  Image,
  FileText,
} from "lucide-react";

const menuItems = [
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: Image, label: "Product Images", path: "/admin/product-images" },
  { icon: FileText, label: "Pages", path: "/admin/pages" },
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: Mail, label: "Emails", path: "/admin/emails" },
  { icon: CreditCard, label: "Payment Gateways", path: "/admin/payment" },
  { icon: Key, label: "API Keys", path: "/admin/api-keys" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="text-xl font-bold mb-8 px-4">Admin Panel</div>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-100"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};