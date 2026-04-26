import { useState } from "react";
import { CurrencyCode, CURRENCY_SYMBOL } from "@/lib/i18n";
import { CURRENCY_NAMES } from "@/lib/currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ALL_CURRENCIES: CurrencyCode[] = [
  "USD", "EUR", "UAH", "PLN", "TRY",
  "GBP", "JPY", "CNY", "INR", "RUB",
  "KRW", "BRL", "AUD", "CAD", "CHF",
  "SEK", "NOK", "DKK", "CZK", "HUF",
];

interface CurrencySelectorProps {
  value: CurrencyCode;
  onChange: (currency: CurrencyCode) => void;
  lang: "ua" | "en" | "pl" | "de" | "fr" | "es" | "it" | "pt" | "tr" | "nl";
}

export function CurrencySelector({ value, onChange, lang }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCurrencies = ALL_CURRENCIES.filter((currency) => {
    const name = CURRENCY_NAMES[currency][lang].toLowerCase();
    const code = currency.toLowerCase();
    const query = search.toLowerCase();
    return name.includes(query) || code.includes(query);
  });

  const handleSelect = (currency: CurrencyCode) => {
    onChange(currency);
    setOpen(false);
    setSearch("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">{CURRENCY_SYMBOL[value]}</span>
            <span>{value}</span>
          </span>
          <span className="text-sm text-muted-foreground">
            {CURRENCY_NAMES[value][lang]}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <div className="space-y-2 p-4 pb-2">
          <Input
            placeholder="Search currency..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8"
          />
        </div>
        <ScrollArea className="h-64">
          <div className="space-y-1 p-2">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((currency) => (
                <button
                  key={currency}
                  onClick={() => handleSelect(currency)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${
                    value === currency ? "bg-accent font-semibold" : ""
                  }`}
                >
                  <span className="text-lg">{CURRENCY_SYMBOL[currency]}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{currency}</div>
                    <div className="text-xs text-muted-foreground">
                      {CURRENCY_NAMES[currency][lang]}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-center text-sm text-muted-foreground">
                No currencies found
              </div>
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}

/**
 * Альтернативний простий селектор без пошуку
 */
interface SimpleCurrencySelectorProps {
  value: CurrencyCode;
  onChange: (currency: CurrencyCode) => void;
  lang: string;
}

export function SimpleCurrencySelector({
  value,
  onChange,
  lang,
}: SimpleCurrencySelectorProps) {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as CurrencyCode)}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {ALL_CURRENCIES.map((currency) => (
          <SelectItem key={currency} value={currency}>
            <span className="flex items-center gap-2">
              <span>{CURRENCY_SYMBOL[currency]}</span>
              <span>{currency}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
