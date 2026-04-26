# 💱 Currency System Documentation

## Overview
Система включає **20 основних світових валют** з реальними курсами обміну та можливістю конвертації.

## Поддерживаемые валюты (20)

### Original (5)
- **USD** - Долар США ($)
- **EUR** - Євро (€)
- **UAH** - Гривня (₴)
- **PLN** - Польський злотий (zł)
- **TRY** - Турецька ліра (₺)

### Major Asian/Eastern (5)
- **GBP** - Британський фунт (£)
- **JPY** - Японська єна (¥)
- **CNY** - Китайський юань (¥)
- **INR** - Індійська рупія (₹)
- **RUB** - Російський рубль (₽)

### Pacific/Americas (5)
- **KRW** - Південнокорейська вона (₩)
- **BRL** - Бразильський реал (R$)
- **AUD** - Австралійський долар (A$)
- **CAD** - Канадський долар (C$)
- **CHF** - Швейцарський франк (CHF)

### Scandinavia/Central Europe (5)
- **SEK** - Шведська крона (kr)
- **NOK** - Норвезька крона (kr)
- **DKK** - Данська крона (kr)
- **CZK** - Чеська крона (Kč)
- **HUF** - Угорський форинт (Ft)

## Використання

### 1. Форматування ціни
```typescript
import { formatPrice } from "@/lib/currency";

// Форматує ціну з USD в будь-яку валюту
formatPrice(100, "USD");   // "₴4100"
formatPrice(100, "EUR");   // "€92"
formatPrice(100, "JPY");   // "¥15400"
```

### 2. Конвертація валют
```typescript
import { convertCurrency } from "@/lib/currency";

// Конвертує з однієї валюти в іншу
convertCurrency(100, "USD", "EUR");  // 92
convertCurrency(4100, "UAH", "EUR");  // 100
```

### 3. Компонент вибору валюти
```typescript
import { CurrencySelector } from "@/components/CurrencySelector";
import { useState } from "react";

function MyComponent() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  return (
    <CurrencySelector
      value={currency}
      onChange={setCurrency}
      lang="ua"
    />
  );
}
```

### 4. Демо сторінка
Відвідайте `/currency` для перегляду:
- Всіх 20 валют
- Поточних курсів обміну
- Конвертера для будь-якої суми
- Таблиці з усіма валютами

## Archivo Files

### Core
- `src/lib/i18n.ts` - Типи, коефіцієнти та символи валют
- `src/lib/currency.ts` - Утиліти для форматування та конвертації
- `src/components/CurrencySelector.tsx` - React компоненти для вибору
- `src/pages/Currency.tsx` - Демо сторінка

### Routes
- `/` - Головна сторінка
- `/currency` - Сторінка валют та конвертера

## Exchange Rates (April 2026 Baseline)

| Currency | Rate | Currency | Rate |
|----------|------|----------|------|
| USD | 1.00 | GBP | 0.79 |
| EUR | 0.92 | JPY | 154.00 |
| UAH | 41.00 | CNY | 7.20 |
| PLN | 3.95 | INR | 83.00 |
| TRY | 38.00 | RUB | 98.00 |
| KRW | 1,300.00 | BRL | 4.95 |
| AUD | 1.52 | CAD | 1.37 |
| CHF | 0.88 | SEK | 10.50 |
| NOK | 10.80 | DKK | 6.85 |
| CZK | 23.50 | HUF | 350.00 |

## Internationalization

Всі назви валют доступні на 10 мовах:
- Українська (ua)
- English (en)
- Polski (pl)
- Deutsch (de)
- Français (fr)
- Español (es)
- Italiano (it)
- Português (pt)
- Türkçe (tr)
- Nederlands (nl)

## Extending the System

### Додавання нової валюти

1. Додайте до типу `CurrencyCode` в `src/lib/i18n.ts`:
```typescript
export type CurrencyCode = "USD" | "EUR" | "NEW_CURRENCY";
```

2. Додайте коефіцієнт до `CURRENCY_RATE`:
```typescript
export const CURRENCY_RATE: Record<CurrencyCode, number> = {
  // ...
  NEW_CURRENCY: 10.5,
};
```

3. Додайте символ до `CURRENCY_SYMBOL`:
```typescript
export const CURRENCY_SYMBOL: Record<CurrencyCode, string> = {
  // ...
  NEW_CURRENCY: "€",
};
```

4. Додайте назву до `CURRENCY_NAMES`:
```typescript
NEW_CURRENCY: { 
  ua: "...", en: "...", // ... інші мови
}
```

## Performance Notes

- Всі коефіцієнти кешовані в константах
- Функції форматування використовують чисту математику (без API)
- Таблиця з 20 валютами відображається ефективно
- Пошук компонента оптимізований з `ScrollArea`

## Future Enhancements

- [ ] Real-time API integration (OpenExchangeRates, etc.)
- [ ] Historical rate charts
- [ ] Favorite currencies
- [ ] Custom exchange rate adjustments
- [ ] Offline mode with cached rates
