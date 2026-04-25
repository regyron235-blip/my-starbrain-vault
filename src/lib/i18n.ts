export type Lang = "ua" | "en" | "ru";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ua", label: "UA", flag: "🇺🇦" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export const T = {
  brand:        { ua: "BRAINROT ELITE",            en: "BRAINROT ELITE",            ru: "BRAINROT ELITE" },
  tagline:      { ua: "Steal a Brainrot · UA магазин", en: "Steal a Brainrot · UA store", ru: "Steal a Brainrot · UA магазин" },
  navCatalog:   { ua: "Каталог",       en: "Catalog",     ru: "Каталог" },
  navGuide:     { ua: "Як грати",      en: "How to play", ru: "Как играть" },
  navFaq:       { ua: "Питання",       en: "FAQ",         ru: "Вопросы" },
  navContact:   { ua: "Контакти",      en: "Contacts",    ru: "Контакты" },
  searchPh:     { ua: "Пошук брейнрота...", en: "Search a brainrot...", ru: "Поиск брейнрота..." },
  catalogTitle: { ua: "Найдорожчі брейнроти", en: "Most expensive brainrots", ru: "Самые дорогие брейнроты" },
  found:        { ua: "Знайдено",      en: "Found",       ru: "Найдено" },
  pets:         { ua: "петів",         en: "pets",        ru: "петов" },
  perSec:       { ua: "/сек",          en: "/sec",        ru: "/сек" },
  buy:          { ua: "Купити / Обмін", en: "Buy / Trade", ru: "Купить / Обмен" },
  guideTitle:   { ua: "Як грати",      en: "How to play", ru: "Как играть" },
  guideSub:     { ua: "Швидкий гайд по грі", en: "Quick guide to the game", ru: "Быстрый гайд по игре" },
  faqTitle:     { ua: "Часті питання", en: "Frequently asked questions", ru: "Частые вопросы" },
  faqSub:       { ua: "Відповіді на популярні запитання", en: "Answers to popular questions", ru: "Ответы на популярные вопросы" },
  contactTitle: { ua: "Контакти",      en: "Contacts",    ru: "Контакты" },
  contactSub:   { ua: "Зв'яжись зі мною в зручному месенджері", en: "Reach me in your preferred messenger", ru: "Свяжись со мной в удобном мессенджере" },
  topNote:      { ua: "Тільки SECRET брейнроти", en: "SECRET brainrots only", ru: "Только SECRET брейнроты" },
  guide: {
    ua: [
      { t: "1. Купуй брейнротів", d: "На конвеєрі з'являються пети — купуй найкращих за свій бюджет." },
      { t: "2. Збирай дохід",     d: "Кожен пет дає $/сек. Що вища рідкість — то вищий пасивний дохід." },
      { t: "3. Кради у ворогів",  d: "Заходь на бази інших гравців і забирай їхніх дорогих брейнротів." },
      { t: "4. Захищай базу",     d: "Став огорожі та лазери, щоб не дали вкрасти твоїх Secret-петів." },
    ],
    en: [
      { t: "1. Buy brainrots",     d: "Pets appear on the conveyor — grab the best ones you can afford." },
      { t: "2. Collect income",    d: "Each pet earns $/sec. Higher rarity means higher passive income." },
      { t: "3. Steal from enemies", d: "Raid other players' bases and snatch their expensive brainrots." },
      { t: "4. Defend your base",  d: "Build fences and lasers to protect your Secret pets." },
    ],
    ru: [
      { t: "1. Покупай брейнротов", d: "На конвейере появляются петы — бери лучших по своему бюджету." },
      { t: "2. Собирай доход",      d: "Каждый пет даёт $/сек. Чем выше редкость — тем больше пассив." },
      { t: "3. Кради у врагов",     d: "Заходи на базы других игроков и забирай их дорогих брейнротов." },
      { t: "4. Защищай базу",       d: "Ставь заборы и лазеры, чтобы не украли твоих Secret-петов." },
    ],
  },
  faq: {
    ua: [
      { q: "Це реальні брейнроти з гри?",   a: "Так, усі пети — Secret з Steal a Brainrot (Roblox)." },
      { q: "Як купити?",                     a: "Натисни «Купити / Обмін» — відкриється Telegram, домовляйся напряму." },
      { q: "Чи можна обмін на Robux?",       a: "Так, обмін через ігровий Trade. Деталі узгоджуй у чаті." },
      { q: "Які брейнроти найдорожчі?",      a: "Garama and Madundung (10B), Nuclearo Dinossauro (2.5B), La Grande Combinassion (1B)." },
    ],
    en: [
      { q: "Are these real brainrots from the game?", a: "Yes, all pets are Secret tier from Steal a Brainrot (Roblox)." },
      { q: "How do I buy?",                            a: "Click \"Buy / Trade\" — Telegram will open, negotiate directly." },
      { q: "Can I trade for Robux?",                   a: "Yes, trade in-game. Discuss details in chat." },
      { q: "Which brainrots are most expensive?",      a: "Garama and Madundung (10B), Nuclearo Dinossauro (2.5B), La Grande Combinassion (1B)." },
    ],
    ru: [
      { q: "Это реальные брейнроты из игры?", a: "Да, все петы — Secret из Steal a Brainrot (Roblox)." },
      { q: "Как купить?",                      a: "Нажми «Купить / Обмен» — откроется Telegram, договаривайся напрямую." },
      { q: "Можно обмен на Robux?",            a: "Да, обмен через игровой Trade. Детали в чате." },
      { q: "Какие брейнроты самые дорогие?",   a: "Garama and Madundung (10B), Nuclearo Dinossauro (2.5B), La Grande Combinassion (1B)." },
    ],
  },
} as const;

export const RARITY_LABEL = {
  secret: "SECRET",
} as const;
