import { CurrencyCode, CURRENCY_RATE, CURRENCY_SYMBOL } from "./i18n";

/**
 * Форматує ціну в певну валюту
 * @param usdPrice - ціна у доларах США
 * @param currency - код валюти (например, "UAH", "EUR")
 * @returns Відформатований рядок (например, "₴410" або "€2.30")
 */
export function formatPrice(usdPrice: number, currency: CurrencyCode): string {
  const rate = CURRENCY_RATE[currency];
  const symbol = CURRENCY_SYMBOL[currency];
  
  const convertedPrice = usdPrice * rate;
  
  // Формат залежить від величини числа
  let formatted: string;
  if (convertedPrice >= 1000) {
    formatted = Math.round(convertedPrice).toString();
  } else if (convertedPrice >= 10) {
    formatted = convertedPrice.toFixed(0);
  } else {
    formatted = convertedPrice.toFixed(2);
  }
  
  return `${symbol}${formatted}`;
}

/**
 * Конвертує ціну з однієї валюти в іншу
 * @param amount - сума у вихідній валюті
 * @param fromCurrency - вихідна валюта
 * @param toCurrency - цільова валюта
 * @returns Конвертована сума
 */
export function convertCurrency(
  amount: number,
  fromCurrency: CurrencyCode,
  toCurrency: CurrencyCode
): number {
  const fromRate = CURRENCY_RATE[fromCurrency];
  const toRate = CURRENCY_RATE[toCurrency];
  return (amount / fromRate) * toRate;
}

/**
 * Отримує відповідь валюти для мови
 */
export const CURRENCY_NAMES: Record<CurrencyCode, Record<string, string>> = {
  USD: { ua: "Долар США", en: "US Dollar", pl: "Dolar amerykański", de: "US-Dollar", fr: "Dollar américain", es: "Dólar estadounidense", it: "Dollaro americano", pt: "Dólar americano", tr: "ABD Doları", nl: "Amerikaanse dollar" },
  EUR: { ua: "Євро", en: "Euro", pl: "Euro", de: "Euro", fr: "Euro", es: "Euro", it: "Euro", pt: "Euro", tr: "Euro", nl: "Euro" },
  UAH: { ua: "Гривня", en: "Ukrainian Hryvnia", pl: "Hrywna ukraińska", de: "Ukrainische Griwnja", fr: "Hryvnia ukrainienne", es: "Grivnia ucraniana", it: "Grivnia ucraino", pt: "Grivnia ucraniana", tr: "Ukrayna Grivnası", nl: "Oekraïense grivna" },
  PLN: { ua: "Польський злотий", en: "Polish Zloty", pl: "Polski złoty", de: "Polnischer Zloty", fr: "Zloty polonais", es: "Zloty polaco", it: "Zloty polacco", pt: "Zloty polonês", tr: "Polonyalı Zloti", nl: "Poolse zloty" },
  TRY: { ua: "Турецька ліра", en: "Turkish Lira", pl: "Lira turecka", de: "Türkische Lira", fr: "Livre turque", es: "Lira turca", it: "Lira turca", pt: "Lira turca", tr: "Türk Lirası", nl: "Turkse lira" },
  GBP: { ua: "Британський фунт", en: "British Pound", pl: "Funt brytyjski", de: "Britisches Pfund", fr: "Livre sterling", es: "Libra esterlina", it: "Sterlina britannica", pt: "Libra esterlina", tr: "İngiliz Sterlini", nl: "Britse pond" },
  JPY: { ua: "Японська єна", en: "Japanese Yen", pl: "Jen japoński", de: "Japanischer Yen", fr: "Yen japonais", es: "Yen japonés", it: "Yen giapponese", pt: "Iene japonês", tr: "Japon Yeni", nl: "Japanse yen" },
  CNY: { ua: "Китайський юань", en: "Chinese Yuan", pl: "Yuan chiński", de: "Chinesischer Yuan", fr: "Yuan chinois", es: "Yuan chino", it: "Yuan cinese", pt: "Yuan chinês", tr: "Çin Yuanı", nl: "Chinese yuan" },
  INR: { ua: "Індійська рупія", en: "Indian Rupee", pl: "Rupia indyjska", de: "Indische Rupie", fr: "Roupie indienne", es: "Rupia india", it: "Rupia indiana", pt: "Rupia indiana", tr: "Hint Rupisi", nl: "Indische roepie" },
  RUB: { ua: "Російський рубль", en: "Russian Ruble", pl: "Rubel rosyjski", de: "Russischer Rubel", fr: "Rouble russe", es: "Rublo ruso", it: "Rublo russo", pt: "Rublo russo", tr: "Rus Rublesi", nl: "Russische roebel" },
  KRW: { ua: "Південнокорейська вона", en: "South Korean Won", pl: "Won południowokoreański", de: "Südkoreanischer Won", fr: "Won sud-coréen", es: "Won surcoreano", it: "Won sudcoreano", pt: "Won sul-coreano", tr: "Güney Kore Wonu", nl: "Zuid-Koreaanse won" },
  BRL: { ua: "Бразильський реал", en: "Brazilian Real", pl: "Real brazylijski", de: "Brasilianischer Real", fr: "Réal brésilien", es: "Real brasileño", it: "Real brasiliano", pt: "Real brasileiro", tr: "Brezilya Reali", nl: "Braziliaanse real" },
  AUD: { ua: "Австралійський долар", en: "Australian Dollar", pl: "Dolar australijski", de: "Australischer Dollar", fr: "Dollar australien", es: "Dólar australiano", it: "Dollaro australiano", pt: "Dólar australiano", tr: "Avustralya Doları", nl: "Australische dollar" },
  CAD: { ua: "Канадський долар", en: "Canadian Dollar", pl: "Dolar kanadyjski", de: "Kanadischer Dollar", fr: "Dollar canadien", es: "Dólar canadiense", it: "Dollaro canadese", pt: "Dólar canadense", tr: "Kanada Doları", nl: "Canadese dollar" },
  CHF: { ua: "Швейцарський франк", en: "Swiss Franc", pl: "Frank szwajcarski", de: "Schweizer Franken", fr: "Franc suisse", es: "Franco suizo", it: "Franco svizzero", pt: "Franco suíço", tr: "İsviçre Frangı", nl: "Zwitserse frank" },
  SEK: { ua: "Шведська крона", en: "Swedish Krona", pl: "Korona szwedzka", de: "Schwedische Krone", fr: "Couronne suédoise", es: "Corona sueca", it: "Corona svedese", pt: "Coroa sueca", tr: "İsveç Kronu", nl: "Zweedse kroon" },
  NOK: { ua: "Норвезька крона", en: "Norwegian Krone", pl: "Korona norweska", de: "Norwegische Krone", fr: "Couronne norvégienne", es: "Corona noruega", it: "Corona norvegese", pt: "Coroa norueguesa", tr: "Norveç Kronu", nl: "Noorse kroon" },
  DKK: { ua: "Данська крона", en: "Danish Krone", pl: "Korona duńska", de: "Dänische Krone", fr: "Couronne danoise", es: "Corona danesa", it: "Corona danese", pt: "Coroa dinamarquesa", tr: "Danimarka Kronu", nl: "Deense kroon" },
  CZK: { ua: "Чеська крона", en: "Czech Koruna", pl: "Korona czeska", de: "Tschechische Krone", fr: "Couronne tchèque", es: "Corona checa", it: "Corona ceca", pt: "Coroa Tcheca", tr: "Çek Korunası", nl: "Tsjechische kroon" },
  HUF: { ua: "Угорський форинт", en: "Hungarian Forint", pl: "Forint węgierski", de: "Ungarischer Forint", fr: "Forint hongrois", es: "Forinto húngaro", it: "Fiorino ungherese", pt: "Florim húngaro", tr: "Macar Forinti", nl: "Hongaarse forint" },
};
