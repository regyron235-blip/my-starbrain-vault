export type Lang = "ua" | "en" | "pl" | "de" | "fr" | "es" | "it" | "pt" | "tr" | "nl";

export const LANGS: {
  code: Lang;
  label: string;   // short code shown in chips (UA, EN…)
  cc: string;      // 2-letter chip text (UA, US, PL…)
  name: string;    // English name
  native: string;  // native name
  currency: CurrencyCode;
}[] = [
  { code: "ua", label: "UA", cc: "UA", name: "Ukrainian",  native: "Українська", currency: "UAH" },
  { code: "en", label: "EN", cc: "US", name: "English",    native: "English",    currency: "USD" },
  { code: "pl", label: "PL", cc: "PL", name: "Polish",     native: "Polski",     currency: "PLN" },
  { code: "de", label: "DE", cc: "DE", name: "German",     native: "Deutsch",    currency: "EUR" },
  { code: "fr", label: "FR", cc: "FR", name: "French",     native: "Français",   currency: "EUR" },
  { code: "es", label: "ES", cc: "ES", name: "Spanish",    native: "Español",    currency: "EUR" },
  { code: "it", label: "IT", cc: "IT", name: "Italian",    native: "Italiano",   currency: "EUR" },
  { code: "pt", label: "PT", cc: "PT", name: "Portuguese", native: "Português",  currency: "EUR" },
  { code: "tr", label: "TR", cc: "TR", name: "Turkish",    native: "Türkçe",     currency: "TRY" },
  { code: "nl", label: "NL", cc: "NL", name: "Dutch",      native: "Nederlands", currency: "EUR" },
];

/* ----- Currency ----- */
export type CurrencyCode = 
  | "USD" | "EUR" | "UAH" | "PLN" | "TRY"  // Original 5
  | "GBP" | "JPY" | "CNY" | "INR" | "RUB"  // Major Asian/Eastern
  | "KRW" | "BRL" | "AUD" | "CAD" | "CHF"  // Pacific/America
  | "SEK" | "NOK" | "DKK" | "CZK" | "HUF"; // Scandinavia/Central Europe

/** Approximate USD-based rates (April 2026 baseline). 1 USD = X currency. */
export const CURRENCY_RATE: Record<CurrencyCode, number> = {
  // Original 5
  USD: 1,
  UAH: 41,
  EUR: 0.92,
  PLN: 3.95,
  TRY: 38,
  // Major Asian/Eastern
  GBP: 0.79,
  JPY: 154,
  CNY: 7.2,
  INR: 83,
  RUB: 98,
  // Pacific/America
  KRW: 1300,
  BRL: 4.95,
  AUD: 1.52,
  CAD: 1.37,
  CHF: 0.88,
  // Scandinavia/Central Europe
  SEK: 10.5,
  NOK: 10.8,
  DKK: 6.85,
  CZK: 23.5,
  HUF: 350,
};

export const CURRENCY_SYMBOL: Record<CurrencyCode, string> = {
  // Original 5
  USD: "$",
  UAH: "₴",
  EUR: "€",
  PLN: "zł",
  TRY: "₺",
  // Major Asian/Eastern
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  INR: "₹",
  RUB: "₽",
  // Pacific/America
  KRW: "₩",
  BRL: "R$",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  // Scandinavia/Central Europe
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  CZK: "Kč",
  HUF: "Ft",
};

/** Real-money price in USD for each in-game tag (B/M).
 *  Calibrated to UA OLX market: 1 USD ≈ 41 ₴, target range 25–500 ₴ for Secret pets. */
export const REAL_PRICE_USD: Record<string, number> = {
  "10B":  2.4,  // ~100 ₴
  "2.5B": 1.8,  // ~75 ₴
  "1B":   1.5,  // ~60 ₴
  "750M": 1.2,  // ~50 ₴
  "500M": 1.0,  // ~40 ₴
  "250M": 0.8,  // ~33 ₴
  "160M": 0.6,  // ~25 ₴
  "150M": 0.5,  // ~20 ₴
  "100M": 0.4,  // ~16 ₴
  "80M":  0.3,  // ~12 ₴
  "50M":  0.25, // ~10 ₴
  "5B":   1.95, // ~80 ₴
  "1.5B": 1.5,  // ~60 ₴
  "800M": 1.1,  // ~45 ₴
  "600M": 0.85, // ~35 ₴
  "2":    1.8,  // ~74 ₴ (Heartblade knife special)  "1.59": 1.59, // ~65 ₴ (Heartblade)};

const t = <T extends Record<Lang, string>>(o: T) => o;

export const T = {
  brand:        t({ ua: "BRAINROT ELITE", en: "BRAINROT ELITE", pl: "BRAINROT ELITE", de: "BRAINROT ELITE", fr: "BRAINROT ELITE", es: "BRAINROT ELITE", it: "BRAINROT ELITE", pt: "BRAINROT ELITE", tr: "BRAINROT ELITE", nl: "BRAINROT ELITE" }),
  tagline:      t({ ua: "Steal a Brainrot · UA магазин", en: "Steal a Brainrot · store", pl: "Steal a Brainrot · sklep", de: "Steal a Brainrot · Shop", fr: "Steal a Brainrot · boutique", es: "Steal a Brainrot · tienda", it: "Steal a Brainrot · negozio", pt: "Steal a Brainrot · loja", tr: "Steal a Brainrot · mağaza", nl: "Steal a Brainrot · winkel" }),
  navCatalog:   t({ ua: "Каталог", en: "Catalog", pl: "Katalog", de: "Katalog", fr: "Catalogue", es: "Catálogo", it: "Catalogo", pt: "Catálogo", tr: "Katalog", nl: "Catalogus" }),
  navGuide:     t({ ua: "Як грати", en: "How to play", pl: "Jak grać", de: "Spielanleitung", fr: "Comment jouer", es: "Cómo jugar", it: "Come giocare", pt: "Como jogar", tr: "Nasıl oynanır", nl: "Hoe te spelen" }),
  navFaq:       t({ ua: "Питання", en: "FAQ", pl: "FAQ", de: "FAQ", fr: "FAQ", es: "FAQ", it: "FAQ", pt: "FAQ", tr: "SSS", nl: "FAQ" }),
  navContact:   t({ ua: "Контакти", en: "Contacts", pl: "Kontakt", de: "Kontakt", fr: "Contacts", es: "Contactos", it: "Contatti", pt: "Contatos", tr: "İletişim", nl: "Contact" }),
  navCurrency:  t({ ua: "Валюти", en: "Currency", pl: "Waluta", de: "Währung", fr: "Devise", es: "Moneda", it: "Valuta", pt: "Moeda", tr: "Para Birimi", nl: "Valuta" }),
  searchPh:     t({ ua: "Пошук бреинрота...", en: "Search a brainrot...", pl: "Szukaj brainrota...", de: "Brainrot suchen...", fr: "Chercher un brainrot...", es: "Buscar brainrot...", it: "Cerca un brainrot...", pt: "Buscar brainrot...", tr: "Brainrot ara...", nl: "Zoek brainrot..." }),
  catalogTitle: t({ ua: "Найдорожчі брейнроти", en: "Most expensive brainrots", pl: "Najdroższe brainroty", de: "Teuerste Brainrots", fr: "Brainrots les plus chers", es: "Brainrots más caros", it: "Brainrot più costosi", pt: "Brainrots mais caros", tr: "En pahalı brainrotlar", nl: "Duurste brainrots" }),
  found:        t({ ua: "Знайдено", en: "Found", pl: "Znaleziono", de: "Gefunden", fr: "Trouvé", es: "Encontrado", it: "Trovati", pt: "Encontrados", tr: "Bulundu", nl: "Gevonden" }),
  pets:         t({ ua: "петів", en: "pets", pl: "petów", de: "Pets", fr: "pets", es: "mascotas", it: "pet", pt: "pets", tr: "pet", nl: "pets" }),
  perSec:       t({ ua: "/сек", en: "/sec", pl: "/sek", de: "/Sek", fr: "/sec", es: "/seg", it: "/sec", pt: "/seg", tr: "/sn", nl: "/sec" }),
  buy:          t({ ua: "Купити / Обмін", en: "Buy / Trade", pl: "Kup / Wymień", de: "Kaufen / Tauschen", fr: "Acheter / Échanger", es: "Comprar / Cambiar", it: "Compra / Scambia", pt: "Comprar / Trocar", tr: "Satın al / Takas", nl: "Kopen / Ruilen" }),
  details:      t({ ua: "Деталі", en: "Details", pl: "Szczegóły", de: "Details", fr: "Détails", es: "Detalles", it: "Dettagli", pt: "Detalhes", tr: "Detaylar", nl: "Details" }),
  income:       t({ ua: "Дохід", en: "Income", pl: "Dochód", de: "Einkommen", fr: "Revenu", es: "Ingreso", it: "Guadagno", pt: "Renda", tr: "Gelir", nl: "Inkomen" }),
  price:        t({ ua: "Ціна", en: "Price", pl: "Cena", de: "Preis", fr: "Prix", es: "Precio", it: "Prezzo", pt: "Preço", tr: "Fiyat", nl: "Prijs" }),
  rarity:       t({ ua: "Рідкість", en: "Rarity", pl: "Rzadkość", de: "Seltenheit", fr: "Rareté", es: "Rareza", it: "Rarità", pt: "Raridade", tr: "Nadir", nl: "Zeldzaamheid" }),
  close:        t({ ua: "Закрити", en: "Close", pl: "Zamknij", de: "Schließen", fr: "Fermer", es: "Cerrar", it: "Chiudi", pt: "Fechar", tr: "Kapat", nl: "Sluiten" }),
  guideTitle:   t({ ua: "Як грати", en: "How to play", pl: "Jak grać", de: "Spielanleitung", fr: "Comment jouer", es: "Cómo jugar", it: "Come giocare", pt: "Como jogar", tr: "Nasıl oynanır", nl: "Hoe te spelen" }),
  guideSub:     t({ ua: "Швидкий гайд по грі", en: "Quick guide to the game", pl: "Szybki poradnik", de: "Schnelle Anleitung", fr: "Guide rapide", es: "Guía rápida", it: "Guida rapida", pt: "Guia rápido", tr: "Hızlı kılavuz", nl: "Snelle gids" }),
  faqTitle:     t({ ua: "Часті питання", en: "Frequently asked questions", pl: "Częste pytania", de: "Häufige Fragen", fr: "Questions fréquentes", es: "Preguntas frecuentes", it: "Domande frequenti", pt: "Perguntas frequentes", tr: "Sık sorulanlar", nl: "Veelgestelde vragen" }),
  faqSub:       t({ ua: "Відповіді на популярні запитання", en: "Answers to popular questions", pl: "Odpowiedzi na popularne pytania", de: "Antworten auf beliebte Fragen", fr: "Réponses aux questions populaires", es: "Respuestas a preguntas populares", it: "Risposte alle domande comuni", pt: "Respostas às perguntas populares", tr: "Popüler sorulara yanıtlar", nl: "Antwoorden op populaire vragen" }),
  contactTitle: t({ ua: "Контакти", en: "Contacts", pl: "Kontakt", de: "Kontakt", fr: "Contacts", es: "Contactos", it: "Contatti", pt: "Contatos", tr: "İletişim", nl: "Contact" }),
  contactSub:   t({ ua: "Зв'яжись зі мною в зручному месенджері", en: "Reach me in your preferred messenger", pl: "Skontaktuj się przez wygodny komunikator", de: "Erreiche mich über deinen bevorzugten Messenger", fr: "Contactez-moi sur votre messagerie préférée", es: "Contáctame en tu mensajero preferido", it: "Contattami nel tuo messenger preferito", pt: "Fale comigo no seu mensageiro preferido", tr: "Tercih ettiğin mesajlaşma uygulamasından ulaş", nl: "Bereik me via je favoriete messenger" }),
  topNote:      t({ ua: "Тільки SECRET брейнроти", en: "SECRET brainrots only", pl: "Tylko SECRET brainroty", de: "Nur SECRET Brainrots", fr: "Brainrots SECRET uniquement", es: "Solo brainrots SECRET", it: "Solo brainrot SECRET", pt: "Apenas brainrots SECRET", tr: "Sadece SECRET brainrotlar", nl: "Alleen SECRET brainrots" }),
  selectLang:   t({ ua: "Виберіть мову", en: "Select language", pl: "Wybierz język", de: "Sprache wählen", fr: "Choisir la langue", es: "Elegir idioma", it: "Scegli la lingua", pt: "Escolher idioma", tr: "Dil seçin", nl: "Kies taal" }),
  currencyTitle: t({ ua: "Обмін валют", en: "Currency Exchange", pl: "Wymiana walut", de: "Währungsumtausch", fr: "Change de devises", es: "Cambio de divisas", it: "Cambio di valuta", pt: "Câmbio de moedas", tr: "Döviz Kuru", nl: "Valutawisseling" }),
  currencySub:  t({ ua: "20 світових валют з реальними курсами", en: "20 World Currencies with Real-Time Rates", pl: "20 światowych walut z rzeczywistymi kursami", de: "20 Weltwährungen mit aktuellen Kursen", fr: "20 devises mondiales avec les taux actuels", es: "20 monedas mundiales con tasas reales", it: "20 valute mondiali con tassi reali", pt: "20 moedas mundiais com taxas reais", tr: "Gerçek Zamanlı Oranlarla 20 Dünya Para Birimi", nl: "20 Wereldvaluta's met Realtime Koersen" }),
  selectCurrency: t({ ua: "Вибір валюти", en: "Select Currency", pl: "Wybierz walutę", de: "Währung auswählen", fr: "Choisir une devise", es: "Seleccionar moneda", it: "Seleziona valuta", pt: "Selecionar moeda", tr: "Para Birimi Seçin", nl: "Selecteer valuta" }),
  choose20:    t({ ua: "Виберіть з 20 валют", en: "Choose from 20 world currencies", pl: "Wybierz spośród 20 walut", de: "Wählen Sie aus 20 Währungen", fr: "Choisir parmi 20 devises", es: "Elige entre 20 monedas", it: "Scegli tra 20 valute", pt: "Escolha entre 20 moedas", tr: "20 Para Biriminden Seçin", nl: "Kies uit 20 valuta's" }),
  exchangeRate: t({ ua: "Обмінний курс", en: "Exchange Rate", pl: "Kurs wymiany", de: "Wechselkurs", fr: "Taux de change", es: "Tipo de cambio", it: "Tasso di cambio", pt: "Taxa de câmbio", tr: "Döviz Kuru", nl: "Wisselkoers" }),
  oneUSD:      t({ ua: "1 USD =", en: "1 USD =", pl: "1 USD =", de: "1 USD =", fr: "1 USD =", es: "1 USD =", it: "1 USD =", pt: "1 USD =", tr: "1 USD =", nl: "1 USD =" }),
  converter:   t({ ua: "Конвертер валют", en: "Price Converter", pl: "Konwerter cen", de: "Preisumrechner", fr: "Convertisseur de prix", es: "Convertidor de precios", it: "Convertitore di prezzi", pt: "Conversor de preços", tr: "Fiyat Dönüştürücü", nl: "Prijsomzetter" }),
  convertUSD:  t({ ua: "Конвертуйте USD в", en: "Convert USD to", pl: "Konwertuj USD na", de: "USD zu umrechnen", fr: "Convertir USD à", es: "Convertir USD a", it: "Converti USD in", pt: "Converter USD para", tr: "USD'yi dönüştür", nl: "Converteer USD naar" }),
  amountUSD:   t({ ua: "Сума в USD", en: "Amount in USD", pl: "Kwota w USD", de: "Betrag in USD", fr: "Montant en USD", es: "Cantidad en USD", it: "Importo in USD", pt: "Valor em USD", tr: "USD Miktarı", nl: "Bedrag in USD" }),
  enterUSD:    t({ ua: "Введіть суму в USD", en: "Enter USD amount", pl: "Wpisz kwotę w USD", de: "Geben Sie USD-Betrag ein", fr: "Entrez le montant en USD", es: "Ingrese cantidad de USD", it: "Inserisci importo in USD", pt: "Insira valor em USD", tr: "USD Miktarını Girin", nl: "Voer USD-bedrag in" }),
  resultIn:    t({ ua: "Результат у", en: "Result in", pl: "Wynik w", de: "Ergebnis in", fr: "Résultat en", es: "Resultado en", it: "Risultato in", pt: "Resultado em", tr: "Sonuç", nl: "Resultaat in" }),
  allCurrencies: t({ ua: "Усі 20 валют", en: "All 20 Currencies", pl: "Wszystkie 20 walut", de: "Alle 20 Währungen", fr: "Les 20 devises", es: "Las 20 monedas", it: "Tutte le 20 valute", pt: "As 20 moedas", tr: "20 Para Biriminin Tümü", nl: "Alle 20 valuta's" }),
  rates:       t({ ua: "Обмінні курси та конвертація", en: "Exchange rates and conversion", pl: "Kursy wymiany i konwersja", de: "Wechselkurse und Umrechnung", fr: "Taux de change et conversion", es: "Tasas de cambio y conversión", it: "Tassi di cambio e conversione", pt: "Taxas de câmbio e conversão", tr: "Döviz Oranları ve Dönüşüm", nl: "Wisselkoersen en conversie" }),
  codeCol:     t({ ua: "Код", en: "Code", pl: "Kod", de: "Code", fr: "Code", es: "Código", it: "Codice", pt: "Código", tr: "Kod", nl: "Code" }),
  nameCol:     t({ ua: "Назва", en: "Name", pl: "Nazwa", de: "Name", fr: "Nom", es: "Nombre", it: "Nome", pt: "Nome", tr: "Ad", nl: "Naam" }),
  symbolCol:   t({ ua: "Символ", en: "Symbol", pl: "Symbol", de: "Symbol", fr: "Symbole", es: "Símbolo", it: "Simbolo", pt: "Símbolo", tr: "Sembol", nl: "Symbool" }),
  rateCol:     t({ ua: "Курс (1 USD)", en: "Rate (1 USD)", pl: "Kurs (1 USD)", de: "Kurs (1 USD)", fr: "Taux (1 USD)", es: "Tasa (1 USD)", it: "Tasso (1 USD)", pt: "Taxa (1 USD)", tr: "Oran (1 USD)", nl: "Koers (1 USD)" }),
  resultCol:   t({ ua: "Результат", en: "Result", pl: "Wynik", de: "Ergebnis", fr: "Résultat", es: "Resultado", it: "Risultato", pt: "Resultado", tr: "Sonuç", nl: "Resultaat" }),
  aboutRates:  t({ ua: "Про ці курси", en: "About These Rates", pl: "O tych kursach", de: "Über diese Kurse", fr: "À propos de ces taux", es: "Acerca de estas tasas", it: "Su questi tassi", pt: "Sobre essas taxas", tr: "Bu Oranlar Hakkında", nl: "Over Deze Koersen" }),
  ratesInfo:   t({ ua: "Ці курси є приблизними базовими курсами на квітень 2026 року і використовуються для демонстраційних цілей.", en: "These rates are approximate baseline rates for April 2026 and are used for demo purposes.", pl: "Te kursy są przybliżonymi kursami bazowymi na kwiecień 2026 r. i są używane w celach demonstracyjnych.", de: "Dies sind ungefähre Basiskurse für April 2026 und werden zu Demonstrationszwecken verwendet.", fr: "Ces taux sont des taux de base approximatifs pour avril 2026 et sont utilisés à des fins de démonstration.", es: "Estas tasas son tasas base aproximadas para abril de 2026 y se utilizan con fines de demostración.", it: "Questi tassi sono tassi di base approssimativi per aprile 2026 e vengono utilizzati a scopo dimostrativo.", pt: "Estas taxas são taxas base aproximadas para abril de 2026 e são usadas para fins de demonstração.", tr: "Bu oranlar Nisan 2026 için yaklaşık temel oranlar ve demo amaçları için kullanılmaktadır.", nl: "Dit zijn geschatte basiskoersen voor april 2026 en worden gebruikt voor demonstratiedoeleinden." }),
  includesInfo: t({ ua: "Система включає 20 основних світових валют", en: "The system includes 20 major world currencies", pl: "System obejmuje 20 głównych walut światowych", de: "Das System umfasst 20 Hauptweltwährungen", fr: "Le système comprend 20 principales devises mondiales", es: "El sistema incluye 20 monedas principales del mundo", it: "Il sistema include le 20 principali valute mondiali", pt: "O sistema inclui as 20 principais moedas mundiais", tr: "Sistem 20 ana dünya para birimini içerir", nl: "Het systeem bevat 20 belangrijke wereldvaluta's" }),
  major:       t({ ua: "Основні", en: "Major", pl: "Główne", de: "Haupt", fr: "Principal", es: "Principal", it: "Principale", pt: "Principal", tr: "Ana", nl: "Hoofd" }),
  eastEurope:  t({ ua: "Східна Європа", en: "Eastern Europe", pl: "Europa Wschodnia", de: "Osteuropa", fr: "Europe de l'Est", es: "Europa Oriental", it: "Europa Orientale", pt: "Europa Oriental", tr: "Doğu Avrupa", nl: "Oost-Europa" }),
  asia:        t({ ua: "Азія", en: "Asia", pl: "Azja", de: "Asien", fr: "Asie", es: "Asia", it: "Asia", pt: "Ásia", tr: "Asya", nl: "Azië" }),
  americas:    t({ ua: "Америка", en: "Americas", pl: "Ameryka", de: "Amerika", fr: "Amériques", es: "Américas", it: "Americhe", pt: "Américas", tr: "Amerika", nl: "Amerika" }),
  nordics:     t({ ua: "Північні країни", en: "Nordics", pl: "Kraje nordyckie", de: "Nordische Länder", fr: "Pays nordiques", es: "Países nórdicos", it: "Paesi nordici", pt: "Países nórdicos", tr: "İskandinav Ülkeleri", nl: "Scandinavische landen" }),
  sortCheapToExpensive: t({ ua: "Дешеві до дорогих", en: "Cheap to Expensive", pl: "Tanie do drogich", de: "Günstig bis teuer", fr: "Pas cher à cher", es: "Barato a caro", it: "Economico a costoso", pt: "Barato a caro", tr: "Ucuz'dan Pahalıya", nl: "Goedkoop tot duur" }),
  sortExpensiveToCheap: t({ ua: "Дорогі до дешевих", en: "Expensive to Cheap", pl: "Drogie do tanich", de: "Teuer bis günstig", fr: "Cher à pas cher", es: "Caro a barato", it: "Costoso a economico", pt: "Caro a barato", tr: "Pahalıdan Ucuza", nl: "Duur tot goedkoop" }),
  sortByIncome: t({ ua: "За доходом /сек", en: "By Income /sec", pl: "Według dochodu /sek", de: "Nach Einkommen /sek", fr: "Par revenu /sec", es: "Por ingresos /seg", it: "Per guadagno /sec", pt: "Por renda /seg", tr: "Gelire Göre /sn", nl: "Op inkomsten /sec" }),
} as const;

type Step = { t: string; d: string };
type Q = { q: string; a: string };

export const GUIDE: Record<Lang, Step[]> = {
  ua: [
    { t: "1. Купуй брейнротів", d: "На конвеєрі з'являються пети — купуй найкращих за свій бюджет." },
    { t: "2. Збирай дохід",     d: "Кожен пет дає $/сек. Що вища рідкість — то вищий пасивний дохід." },
    { t: "3. Кради у ворогів",  d: "Заходь на бази інших гравців і забирай їхніх дорогих брейнротів." },
    { t: "4. Захищай базу",     d: "Став огорожі та лазери, щоб не дали вкрасти твоїх Secret-петів." },
  ],
  en: [
    { t: "1. Buy brainrots",      d: "Pets appear on the conveyor — grab the best ones you can afford." },
    { t: "2. Collect income",     d: "Each pet earns $/sec. Higher rarity means higher passive income." },
    { t: "3. Steal from enemies", d: "Raid other players' bases and snatch their expensive brainrots." },
    { t: "4. Defend your base",   d: "Build fences and lasers to protect your Secret pets." },
  ],
  pl: [
    { t: "1. Kupuj brainroty",     d: "Na taśmie pojawiają się pety — wybieraj najlepsze w swoim budżecie." },
    { t: "2. Zbieraj dochód",      d: "Każdy pet daje $/sek. Wyższa rzadkość = wyższy pasywny dochód." },
    { t: "3. Kradnij wrogom",      d: "Wpadaj na bazy innych graczy i zabieraj ich drogie brainroty." },
    { t: "4. Broń bazy",           d: "Stawiaj płoty i lasery, żeby chronić swoich Secret-petów." },
  ],
  de: [
    { t: "1. Brainrots kaufen",     d: "Auf dem Förderband erscheinen Pets — kauf die besten in deinem Budget." },
    { t: "2. Einkommen sammeln",    d: "Jedes Pet verdient $/Sek. Höhere Seltenheit = höheres passives Einkommen." },
    { t: "3. Gegner bestehlen",     d: "Überfalle andere Basen und schnapp dir teure Brainrots." },
    { t: "4. Basis verteidigen",    d: "Baue Zäune und Laser, um deine Secret-Pets zu schützen." },
  ],
  fr: [
    { t: "1. Achète des brainrots", d: "Des pets apparaissent sur le tapis — prends les meilleurs selon ton budget." },
    { t: "2. Collecte des revenus", d: "Chaque pet rapporte $/sec. Plus rare = plus de revenus passifs." },
    { t: "3. Vole tes ennemis",     d: "Raid les bases adverses et empare-toi de leurs brainrots chers." },
    { t: "4. Défends ta base",      d: "Pose des clôtures et lasers pour protéger tes pets Secret." },
  ],
  es: [
    { t: "1. Compra brainrots",     d: "Aparecen pets en la cinta — coge los mejores que puedas pagar." },
    { t: "2. Recoge ingresos",      d: "Cada pet gana $/seg. Más rareza = más ingreso pasivo." },
    { t: "3. Roba a enemigos",      d: "Asalta las bases de otros jugadores y róbales sus brainrots caros." },
    { t: "4. Defiende tu base",     d: "Coloca vallas y láseres para proteger tus pets Secret." },
  ],
  it: [
    { t: "1. Compra brainrot",      d: "Sul nastro appaiono pet — prendi i migliori che ti puoi permettere." },
    { t: "2. Raccogli guadagni",    d: "Ogni pet dà $/sec. Maggiore rarità = maggior reddito passivo." },
    { t: "3. Ruba ai nemici",       d: "Assalta le basi avversarie e ruba i loro brainrot costosi." },
    { t: "4. Difendi la base",      d: "Metti recinzioni e laser per proteggere i tuoi pet Secret." },
  ],
  pt: [
    { t: "1. Compre brainrots",     d: "Pets aparecem na esteira — pegue os melhores no seu orçamento." },
    { t: "2. Colete renda",         d: "Cada pet rende $/seg. Mais raridade = mais renda passiva." },
    { t: "3. Roube dos inimigos",   d: "Invada outras bases e leve os brainrots caros deles." },
    { t: "4. Defenda sua base",     d: "Coloque cercas e lasers para proteger seus pets Secret." },
  ],
  tr: [
    { t: "1. Brainrot satın al",    d: "Bantta petler beliriyor — bütçene göre en iyilerini al." },
    { t: "2. Gelir topla",          d: "Her pet $/sn kazandırır. Nadir = daha yüksek pasif gelir." },
    { t: "3. Düşmandan çal",        d: "Başka oyuncuların üssünü bas ve pahalı brainrotları kap." },
    { t: "4. Üssünü savun",         d: "Çit ve lazer kurarak Secret petlerini koru." },
  ],
  nl: [
    { t: "1. Koop brainrots",       d: "Op de band verschijnen pets — pak de beste binnen je budget." },
    { t: "2. Verzamel inkomen",     d: "Elke pet verdient $/sec. Hogere zeldzaamheid = meer passief inkomen." },
    { t: "3. Steel van vijanden",   d: "Val andere bases binnen en pak hun dure brainrots." },
    { t: "4. Verdedig je basis",    d: "Plaats hekken en lasers om je Secret-pets te beschermen." },
  ],
};

export const FAQ: Record<Lang, Q[]> = {
  ua: [
    { q: "Це реальні брейнроти з гри?", a: "Так, усі пети — Secret з Steal a Brainrot (Roblox)." },
    { q: "Як купити?", a: "Натисни «Купити / Обмін» — відкриється Telegram, домовляйся напряму." },
    { q: "Чи можна обмін на Robux?", a: "Так, обмін через ігровий Trade. Деталі узгоджуй у чаті." },
    { q: "В якій валюті ціни?", a: "Перемкни мову — ціни автоматично переведуться у валюту країни." },
  ],
  en: [
    { q: "Are these real brainrots from the game?", a: "Yes, all pets are Secret tier from Steal a Brainrot (Roblox)." },
    { q: "How do I buy?", a: "Click \"Buy / Trade\" — Telegram opens, negotiate directly." },
    { q: "Can I trade for Robux?", a: "Yes, trade in-game. Discuss details in chat." },
    { q: "What currency are prices in?", a: "Switch the language — prices auto-convert to your country's currency." },
  ],
  pl: [
    { q: "Czy to prawdziwe brainroty z gry?", a: "Tak, wszystkie pety to Secret ze Steal a Brainrot (Roblox)." },
    { q: "Jak kupić?", a: "Kliknij „Kup / Wymień\" — otworzy się Telegram, dogadaj się bezpośrednio." },
    { q: "Czy można wymienić na Robux?", a: "Tak, wymiana w grze. Szczegóły na czacie." },
    { q: "W jakiej walucie są ceny?", a: "Zmień język — ceny przeliczą się na walutę kraju." },
  ],
  de: [
    { q: "Sind das echte Brainrots aus dem Spiel?", a: "Ja, alle Pets sind Secret-Tier aus Steal a Brainrot (Roblox)." },
    { q: "Wie kaufe ich?", a: "Klicke „Kaufen / Tauschen\" — Telegram öffnet sich." },
    { q: "Kann ich gegen Robux tauschen?", a: "Ja, Tausch im Spiel. Details im Chat." },
    { q: "In welcher Währung sind die Preise?", a: "Sprache wechseln — Preise rechnen sich automatisch um." },
  ],
  fr: [
    { q: "Ce sont de vrais brainrots du jeu ?", a: "Oui, tous les pets sont de tier Secret de Steal a Brainrot (Roblox)." },
    { q: "Comment acheter ?", a: "Clique sur « Acheter / Échanger » — Telegram s'ouvre." },
    { q: "Échange contre des Robux ?", a: "Oui, échange en jeu. Détails dans le chat." },
    { q: "Dans quelle devise sont les prix ?", a: "Change de langue — les prix se convertissent automatiquement." },
  ],
  es: [
    { q: "¿Son brainrots reales del juego?", a: "Sí, todos los pets son tier Secret de Steal a Brainrot (Roblox)." },
    { q: "¿Cómo compro?", a: "Pulsa \"Comprar / Cambiar\" — se abre Telegram." },
    { q: "¿Puedo cambiar por Robux?", a: "Sí, intercambio en el juego. Detalles en el chat." },
    { q: "¿En qué moneda están los precios?", a: "Cambia el idioma — los precios se convierten automáticamente." },
  ],
  it: [
    { q: "Sono brainrot reali del gioco?", a: "Sì, tutti i pet sono tier Secret di Steal a Brainrot (Roblox)." },
    { q: "Come compro?", a: "Clicca \"Compra / Scambia\" — si apre Telegram." },
    { q: "Posso scambiare per Robux?", a: "Sì, scambio in gioco. Dettagli in chat." },
    { q: "In che valuta sono i prezzi?", a: "Cambia lingua — i prezzi si convertono automaticamente." },
  ],
  pt: [
    { q: "São brainrots reais do jogo?", a: "Sim, todos os pets são tier Secret de Steal a Brainrot (Roblox)." },
    { q: "Como compro?", a: "Clique em \"Comprar / Trocar\" — o Telegram abre." },
    { q: "Posso trocar por Robux?", a: "Sim, troca no jogo. Detalhes no chat." },
    { q: "Em que moeda estão os preços?", a: "Mude o idioma — os preços convertem automaticamente." },
  ],
  tr: [
    { q: "Bunlar oyundaki gerçek brainrotlar mı?", a: "Evet, tüm petler Steal a Brainrot (Roblox) Secret seviyesinden." },
    { q: "Nasıl satın alırım?", a: "\"Satın al / Takas\" tıkla — Telegram açılır." },
    { q: "Robux ile takas yapabilir miyim?", a: "Evet, oyun içi takas. Detaylar sohbette." },
    { q: "Fiyatlar hangi para biriminde?", a: "Dili değiştir — fiyatlar otomatik dönüşür." },
  ],
  nl: [
    { q: "Zijn dit echte brainrots uit de game?", a: "Ja, alle pets zijn Secret tier uit Steal a Brainrot (Roblox)." },
    { q: "Hoe koop ik?", a: "Klik \"Kopen / Ruilen\" — Telegram opent." },
    { q: "Kan ik ruilen voor Robux?", a: "Ja, ruilen in-game. Details in de chat." },
    { q: "In welke valuta zijn de prijzen?", a: "Wissel de taal — prijzen worden automatisch omgerekend." },
  ],
};

export const RARITY_LABEL = {
  secret: "SECRET",
} as const;

/** Format a USD price into the given currency. */
export function formatPrice(usd: number, currency: CurrencyCode): string {
  const v = usd * CURRENCY_RATE[currency];
  const sym = CURRENCY_SYMBOL[currency];
  const rounded = v >= 100 ? Math.round(v) : Math.round(v * 10) / 10;
  const num = rounded.toLocaleString("en-US");
  // Polish/Turkish put symbol after
  if (currency === "PLN" || currency === "UAH") return `${num} ${sym}`;
  return `${sym}${num}`;
}
