import { useMemo, useState } from "react";
import {
  Search, PawPrint, Trophy, BookOpen, HelpCircle, MessageCircle,
  ShoppingCart, Sparkles, TrendingUp, Crown, Zap,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import grandeCombinazione from "@/assets/grande-combinazione.png";
import vaccaSaturno from "@/assets/vacca-saturno.png";
import losTralaleritos from "@/assets/los-tralaleritos.png";
import garamaMadundung from "@/assets/garama-madundung.png";
import chimpanziniSpiderini from "@/assets/chimpanzini-spiderini.png";
import lasTralaleritas from "@/assets/las-tralaleritas.png";
import nuclearoDinossauro from "@/assets/nuclearo-dinossauro.png";
import graipussMedussi from "@/assets/graipuss-medussi.png";

type Rarity = "secret" | "brainrot-god" | "og" | "mythic" | "legendary";

interface Brainrot {
  name: string;
  rarity: Rarity;
  image: string;
  income: number; // $/сек
  price: string;  // примірна ціна за обмін/купівлю
}

const RARITY_LABEL: Record<Rarity, string> = {
  secret: "SECRET",
  "brainrot-god": "BRAINROT GOD",
  og: "OG",
  mythic: "MYTHIC",
  legendary: "LEGENDARY",
};

const RARITY_COLOR: Record<Rarity, string> = {
  secret: "text-secret",
  "brainrot-god": "text-brainrot-god",
  og: "text-og",
  mythic: "text-mythic",
  legendary: "text-legendary",
};

const RARITY_BORDER: Record<Rarity, string> = {
  secret: "hover:border-secret/60 hover:shadow-[0_0_30px_-5px_hsl(var(--secret)/0.5)]",
  "brainrot-god": "hover:border-brainrot-god/60 hover:shadow-[0_0_30px_-5px_hsl(var(--brainrot-god)/0.5)]",
  og: "hover:border-og/60 hover:shadow-[0_0_30px_-5px_hsl(var(--og)/0.5)]",
  mythic: "hover:border-mythic/60 hover:shadow-[0_0_30px_-5px_hsl(var(--mythic)/0.5)]",
  legendary: "hover:border-legendary/60",
};

const BRAINROTS: Brainrot[] = [
  { name: "La Grande Combinazione", rarity: "secret",        image: grandeCombinazione,    income: 100_000_000, price: "1B+" },
  { name: "Garama and Madundung",   rarity: "secret",        image: garamaMadundung,       income: 50_000_000,  price: "500M" },
  { name: "Los Tralaleritos",       rarity: "secret",        image: losTralaleritos,       income: 25_000_000,  price: "250M" },
  { name: "La Vacca Saturno",       rarity: "brainrot-god",  image: vaccaSaturno,          income: 5_000_000,   price: "50M" },
  { name: "Las Tralaleritas",       rarity: "brainrot-god",  image: lasTralaleritas,       income: 3_500_000,   price: "35M" },
  { name: "Graipuss Medussi",       rarity: "brainrot-god",  image: graipussMedussi,       income: 1_000_000,   price: "10M" },
  { name: "Chimpanzini Spiderini",  rarity: "og",            image: chimpanziniSpiderini,  income: 750_000,     price: "7.5M" },
  { name: "Nuclearo Dinossauro",    rarity: "mythic",        image: nuclearoDinossauro,    income: 500_000,     price: "5M" },
];

type Section = "catalog" | "tier" | "guide" | "faq" | "contact";

const NAV: { id: Section; icon: typeof PawPrint; label: string }[] = [
  { id: "catalog", icon: PawPrint,     label: "Каталог" },
  { id: "tier",    icon: Trophy,       label: "Тір-лист" },
  { id: "guide",   icon: BookOpen,     label: "Як грати" },
  { id: "faq",     icon: HelpCircle,   label: "FAQ" },
  { id: "contact", icon: MessageCircle, label: "Контакти" },
];

const formatIncome = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M/с` : `$${(n / 1000).toFixed(0)}K/с`;

const Index = () => {
  const [section, setSection] = useState<Section>("catalog");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => BRAINROTS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-6 border-r border-border bg-card/40 p-6">
        <div>
          <h1
            className="text-2xl font-black tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            BRAINROT ELITE
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Steal a Brainrot · UA</p>
        </div>

        <nav className="flex flex-col gap-1">
          {NAV.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                section === id
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-border bg-secondary/50 p-4 text-xs text-muted-foreground">
          🇺🇦 Тільки топ-тір брейнроти<br />Secret · Brainrot God · OG
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        {/* Mobile nav */}
        <div className="md:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
          {NAV.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                section === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {section === "catalog" && <CatalogSection filtered={filtered} query={query} setQuery={setQuery} />}
        {section === "tier" && <TierSection />}
        {section === "guide" && <GuideSection />}
        {section === "faq" && <FaqSection />}
        {section === "contact" && <ContactSection />}
      </main>
    </div>
  );
};

/* ---------- Sections ---------- */

const CatalogSection = ({
  filtered, query, setQuery,
}: { filtered: Brainrot[]; query: string; setQuery: (v: string) => void }) => (
  <>
    <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
          <Crown className="h-8 w-8 text-brainrot-god" />
          Найдорожчі брейнроти
        </h2>
        <p className="text-muted-foreground">Знайдено {filtered.length} топ-тір петів зі Steal a Brainrot</p>
      </div>
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Пошук брейнрота..."
          className="pl-9 bg-secondary border-border"
        />
      </div>
    </header>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filtered.map((b) => (
        <article
          key={b.name}
          className={`group rounded-2xl border border-border p-5 transition-all hover:-translate-y-1 ${RARITY_BORDER[b.rarity]}`}
          style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
        >
          <div className="text-center mb-3">
            <p className={`text-xs font-black tracking-widest uppercase ${RARITY_COLOR[b.rarity]}`}>
              {RARITY_LABEL[b.rarity]}
            </p>
          </div>

          <div className="flex items-center justify-center h-40 mb-4">
            <img
              src={b.image}
              alt={`Брейнрот ${b.name}`}
              loading="lazy"
              width={512}
              height={512}
              className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-2xl"
            />
          </div>

          <h3 className="text-center font-bold text-lg mb-3 leading-tight">{b.name}</h3>

          <div className="flex items-center justify-between text-sm mb-4 px-1">
            <span className="flex items-center gap-1 text-brainrot-god font-semibold">
              <Zap className="h-3.5 w-3.5" />
              {formatIncome(b.income)}
            </span>
            <span className="text-muted-foreground">~{b.price}</span>
          </div>

          <Button asChild className="w-full" style={{ backgroundImage: "var(--gradient-primary)" }}>
            <a href="https://t.me/brainrot_ua" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-4 w-4" />
              КУПИТИ / ОБМІН
            </a>
          </Button>
        </article>
      ))}
    </section>
  </>
);

const TierSection = () => {
  const tiers: { tier: Rarity; pets: string[] }[] = [
    { tier: "secret", pets: ["La Grande Combinazione", "Garama and Madundung", "Los Tralaleritos"] },
    { tier: "brainrot-god", pets: ["La Vacca Saturno", "Las Tralaleritas", "Graipuss Medussi"] },
    { tier: "og", pets: ["Chimpanzini Spiderini"] },
    { tier: "mythic", pets: ["Nuclearo Dinossauro"] },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
        <Trophy className="h-8 w-8 text-brainrot-god" /> Тір-лист
      </h2>
      <p className="text-muted-foreground mb-8">Рейтинг за прибутком $/сек у грі Steal a Brainrot</p>
      <div className="space-y-4">
        {tiers.map(({ tier, pets }) => (
          <div
            key={tier}
            className="rounded-2xl border border-border p-5 flex flex-col md:flex-row md:items-center gap-4"
            style={{ backgroundImage: "var(--gradient-card)" }}
          >
            <div className={`w-full md:w-44 text-center font-black text-lg ${RARITY_COLOR[tier]}`}>
              {RARITY_LABEL[tier]}
            </div>
            <div className="flex flex-wrap gap-2">
              {pets.map((p) => (
                <span key={p} className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const GuideSection = () => (
  <>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
      <BookOpen className="h-8 w-8 text-accent" /> Як грати
    </h2>
    <p className="text-muted-foreground mb-8">Швидкий гайд по Steal a Brainrot</p>
    <div className="grid md:grid-cols-2 gap-5">
      {[
        { icon: Sparkles, title: "1. Купуй брейнротів", text: "На конвеєрі з'являються брейнроти — купуй найкращих за свій бюджет." },
        { icon: TrendingUp, title: "2. Збирай дохід", text: "Кожен пет дає $/сек. Чим вища рідкість — тим більший пасивний дохід." },
        { icon: Zap, title: "3. Кради у ворогів", text: "Заходь на бази інших гравців і краcти їхніх дорогих брейнротів." },
        { icon: Crown, title: "4. Захищай базу", text: "Ставь огорожі та лазери, щоб не дали вкрасти твоїх Secret-петів." },
      ].map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="rounded-2xl border border-border p-6"
          style={{ backgroundImage: "var(--gradient-card)" }}
        >
          <Icon className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      ))}
    </div>
  </>
);

const FaqSection = () => {
  const items = [
    { q: "Це реальні брейнроти з гри?", a: "Так, усі пети з каталогу — топові з Steal a Brainrot (Roblox)." },
    { q: "Як купити?", a: "Натисни «КУПИТИ / ОБМІН» — відкриється Telegram, домовляйся напряму." },
    { q: "Чи можна обмін на Robux?", a: "Так, обмін через ігровий Trade. Деталі узгоджуй у чаті." },
    { q: "Які брейнроти найдорожчі?", a: "Secret-тір: La Grande Combinazione, Garama and Madundung, Los Tralaleritos." },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
        <HelpCircle className="h-8 w-8 text-accent" /> Часті питання
      </h2>
      <p className="text-muted-foreground mb-8">Відповіді на найпопулярніші запитання</p>
      <div className="space-y-3">
        {items.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-border p-5 cursor-pointer"
            style={{ backgroundImage: "var(--gradient-card)" }}
          >
            <summary className="font-semibold flex items-center justify-between">
              {q}
              <span className="text-primary group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-muted-foreground text-sm mt-3">{a}</p>
          </details>
        ))}
      </div>
    </>
  );
};

const ContactSection = () => (
  <>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
      <MessageCircle className="h-8 w-8 text-accent" /> Контакти
    </h2>
    <p className="text-muted-foreground mb-8">Зв'яжись зі мною в зручному месенджері</p>
    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
      {[
        { label: "Telegram", value: "@brainrot_ua", href: "https://t.me/brainrot_ua" },
        { label: "Discord",  value: "brainrot.ua",   href: "#" },
      ].map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border p-6 hover:border-primary/60 transition-colors"
          style={{ backgroundImage: "var(--gradient-card)" }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{c.label}</p>
          <p className="font-bold text-lg">{c.value}</p>
        </a>
      ))}
    </div>
  </>
);

export default Index;
