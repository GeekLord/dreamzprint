import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

export const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currency === "USD" ? "default" : "outline"}
        size="sm"
        onClick={() => setCurrency("USD")}
      >
        USD
      </Button>
      <Button
        variant={currency === "INR" ? "default" : "outline"}
        size="sm"
        onClick={() => setCurrency("INR")}
      >
        INR
      </Button>
    </div>
  );
};