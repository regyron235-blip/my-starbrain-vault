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
export type CurrencyCode = "UAH" | "USD" | "EUR" | "PLN" | "TRY";

/** Approximate USD-based rates (April 2026 baseline). 1 USD = X currency. */
export const CURRENCY_RATE: Record<CurrencyCode, number> = {
  USD: 1,
  UAH: 41,
  EUR: 0.92,
  PLN: 3.95,
  TRY: 38,
};

export const CURRENCY_SYMBOL: Record<CurrencyCode, string> = {
  USD: "$",
  UAH: "₴",
  EUR: "€",
  PLN: "zł",
  TRY: "₺",
};

/** Real-money price in USD for each in-game tag (B/M).
 *  Calibrated to UA OLX market: 1 USD ≈ 41 ₴, so ~150–700 ₴ for Secret pets. */
export const REAL_PRICE_USD: Record<string, number> = {
  "10B":  17,   // ~700 ₴
  "2.5B": 12,   // ~500 ₴
  "1B":   9,    // ~370 ₴
  "750M": 7.5,  // ~310 ₴
  "500M": 6,    // ~250 ₴
  "250M": 5,    // ~200 ₴
  "160M": 4.5,  // ~185 ₴
  "150M": 4,    // ~165 ₴
  "100M": 3.5,  // ~145 ₴
  "80M":  3,    // ~125 ₴
  "50M":  2.5,  // ~100 ₴
};

const t = <T extends Record<Lang, string>>(o: T) => o;

export const T = {
  brand:        t({ ua: "BRAINROT ELITE", en: "BRAINROT ELITE", pl: "BRAINROT ELITE", de: "BRAINROT ELITE", fr: "BRAINROT ELITE", es: "BRAINROT ELITE", it: "BRAINROT ELITE", pt: "BRAINROT ELITE", tr: "BRAINROT ELITE", nl: "BRAINROT ELITE" }),
  tagline:      t({ ua: "Steal a Brainrot · UA магазин", en: "Steal a Brainrot · store", pl: "Steal a Brainrot · sklep", de: "Steal a Brainrot · Shop", fr: "Steal a Brainrot · boutique", es: "Steal a Brainrot · tienda", it: "Steal a Brainrot · negozio", pt: "Steal a Brainrot · loja", tr: "Steal a Brainrot · mağaza", nl: "Steal a Brainrot · winkel" }),
  navCatalog:   t({ ua: "Каталог", en: "Catalog", pl: "Katalog", de: "Katalog", fr: "Catalogue", es: "Catálogo", it: "Catalogo", pt: "Catálogo", tr: "Katalog", nl: "Catalogus" }),
  navGuide:     t({ ua: "Як грати", en: "How to play", pl: "Jak grać", de: "Spielanleitung", fr: "Comment jouer", es: "Cómo jugar", it: "Come giocare", pt: "Como jogar", tr: "Nasıl oynanır", nl: "Hoe te spelen" }),
  navFaq:       t({ ua: "Питання", en: "FAQ", pl: "FAQ", de: "FAQ", fr: "FAQ", es: "FAQ", it: "FAQ", pt: "FAQ", tr: "SSS", nl: "FAQ" }),
  navContact:   t({ ua: "Контакти", en: "Contacts", pl: "Kontakt", de: "Kontakt", fr: "Contacts", es: "Contactos", it: "Contatti", pt: "Contatos", tr: "İletişim", nl: "Contact" }),
  searchPh:     t({ ua: "Пошук пета...", en: "Search a pet...", pl: "Szukaj peta...", de: "Pet suchen...", fr: "Chercher un pet...", es: "Buscar mascota...", it: "Cerca un pet...", pt: "Buscar pet...", tr: "Pet ara...", nl: "Zoek pet..." }),
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
