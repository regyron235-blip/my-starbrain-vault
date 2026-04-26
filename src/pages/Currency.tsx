import { useState } from "react";
import { CurrencyCode, CURRENCY_RATE, CURRENCY_SYMBOL, T, type Lang } from "@/lib/i18n";
import { CURRENCY_NAMES, formatPrice, convertCurrency } from "@/lib/currency";
import { CurrencySelector } from "@/components/CurrencySelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ALL_CURRENCIES: CurrencyCode[] = [
  "USD", "EUR", "UAH", "PLN", "TRY",
  "GBP", "JPY", "CNY", "INR", "RUB",
  "KRW", "BRL", "AUD", "CAD", "CHF",
  "SEK", "NOK", "DKK", "CZK", "HUF",
];

interface CurrencyPageProps {
  lang?: Lang;
}

export function CurrencyPage({ lang = "en" }: CurrencyPageProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");
  const [amount, setAmount] = useState<number>(100);
  
  const t = (k: keyof typeof T) => (T[k] as Record<Lang, string>)[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">{t("currencyTitle")}</h1>
          <p className="text-purple-300">{t("currencySub")}</p>
        </div>

        {/* Currency Selector Card */}
        <Card className="border-purple-500/20 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">{t("selectCurrency")}</CardTitle>
            <CardDescription>{t("choose20")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CurrencySelector
              value={selectedCurrency}
              onChange={setSelectedCurrency}
              lang={lang}
            />
            <div className="bg-slate-700/50 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">{t("exchangeRate")} ({t("oneUSD")} {selectedCurrency} = ...)</p>
              <p className="text-2xl font-bold text-white">
                {CURRENCY_RATE[selectedCurrency].toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Price Converter */}
        <Card className="border-purple-500/20 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">{t("converter")}</CardTitle>
            <CardDescription>{t("convertUSD")} {selectedCurrency}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">
                {t("amountUSD")}
              </Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="bg-slate-700 border-purple-500/30 text-white"
                placeholder={t("enterUSD")}
              />
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
              <p className="text-sm text-gray-400 mb-2">{t("resultIn")} {selectedCurrency}</p>
              <p className="text-3xl font-bold text-white">
                {formatPrice(amount, selectedCurrency)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* All Currencies Table */}
        <Card className="border-purple-500/20 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">{t("allCurrencies")}</CardTitle>
            <CardDescription>
              {t("rates")} ${amount.toFixed(2)} USD
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-purple-500/20 hover:bg-slate-700/50">
                    <TableHead className="text-gray-400">{t("codeCol")}</TableHead>
                    <TableHead className="text-gray-400">{t("nameCol")}</TableHead>
                    <TableHead className="text-gray-400">{t("symbolCol")}</TableHead>
                    <TableHead className="text-right text-gray-400">{t("rateCol")}</TableHead>
                    <TableHead className="text-right text-gray-400">${amount} USD</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ALL_CURRENCIES.map((currency) => (
                    <TableRow
                      key={currency}
                      className={`border-purple-500/10 transition-colors ${
                        selectedCurrency === currency
                          ? "bg-purple-500/20 hover:bg-purple-500/30"
                          : "hover:bg-slate-700/50"
                      }`}
                    >
                      <TableCell className="font-semibold text-white">{currency}</TableCell>
                      <TableCell className="text-gray-300">
                        {CURRENCY_NAMES[currency][lang]}
                      </TableCell>
                      <TableCell className="text-lg text-white">
                        {CURRENCY_SYMBOL[currency]}
                      </TableCell>
                      <TableCell className="text-right text-gray-300">
                        {CURRENCY_RATE[currency].toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                      <TableCell className="text-right text-white font-semibold">
                        {formatPrice(amount, currency)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="border-purple-500/20 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">ℹ️ {t("aboutRates")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-300">
            <p>
              {t("ratesInfo")}
            </p>
            <p>
              {t("includesInfo")}:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>{t("major")}: USD, EUR, GBP, JPY, CHF</li>
              <li>{t("eastEurope")}: UAH, PLN, TRY, RUB, CZK, HUF</li>
              <li>{t("asia")}: CNY, INR, KRW</li>
              <li>{t("americas")}: BRL, CAD, AUD</li>
              <li>{t("nordics")}: SEK, NOK, DKK</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CurrencyPage;
