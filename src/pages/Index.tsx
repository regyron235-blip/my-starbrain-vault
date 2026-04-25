import { useMemo, useState } from "react";
import {
  Search, PawPrint, BookOpen, HelpCircle, MessageCircle,
  ShoppingCart, Sparkles, TrendingUp, Crown, Zap, Globe,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { T, LANGS, RARITY_LABEL, type Lang } from "@/lib/i18n";

import grandeCombinazione from "@/assets/grande-combinazione.png";
import vaccaSaturno from "@/assets/vacca-saturno.png";
import losTralaleritos from "@/assets/los-tralaleritos.png";
import garamaMadundung from "@/assets/garama-madundung.png";
import chimpanziniSpiderini from "@/assets/chimpanzini-spiderini.png";
import lasTralaleritas from "@/assets/las-tralaleritas.png";
import nuclearoDinossauro from "@/assets/nuclearo-dinossauro.png";
import graipussMedussi from "@/assets/graipuss-medussi.png";
import potHotspot from "@/assets/pot-hotspot.png";
import tortugfinni from "@/assets/tortugfinni.png";
import lasVaquitas from "@/assets/las-vaquitas.png";
import chicleteria from "@/assets/chicleteria.png";
import agarrini from "@/assets/agarrini.png";

type Rarity = "secret";

interface Brainrot {
  name: string;
  rarity: Rarity;
  image: string;
  income: number; // dollars per second
  price: string;
}

const RARITY_HSL: Record<Rarity, string> = {
  secret: "var(--secret)",
};

/** All Secret brainrots with real in-game values (source: stealthygaming.com, Sep 2025). */
const BRAINROTS: Brainrot[] = [
  { name: "Garama and Madundung",      rarity: "secret", image: garamaMadundung,      income: 50_000_000, price: "10B" },
  { name: "Nuclearo Dinossauro",       rarity: "secret", image: nuclearoDinossauro,   income: 15_000_000, price: "2.5B" },
  { name: "La Grande Combinassion",    rarity: "secret", image: grandeCombinazione,   income: 10_000_000, price: "1B" },
  { name: "Chicleteria Bicicletera",   rarity: "secret", image: chicleteria,          income: 3_500_000,  price: "750M" },
  { name: "Pot Hotspot",               rarity: "secret", image: potHotspot,           income: 2_500_000,  price: "500M" },
  { name: "Graipuss Medussi",          rarity: "secret", image: graipussMedussi,      income: 1_000_000,  price: "250M" },
  { name: "Las Vaquitas Saturnitas",   rarity: "secret", image: lasVaquitas,          income: 750_000,    price: "160M" },
  { name: "Las Tralaleritas",          rarity: "secret", image: lasTralaleritas,      income: 650_000,    price: "150M" },
  { name: "Los Tralaleritos",          rarity: "secret", image: losTralaleritos,      income: 500_000,    price: "150M" },
  { name: "Agarrini la Palini",        rarity: "secret", image: agarrini,             income: 425_000,    price: "80M" },
  { name: "Tortugfinni Dragonfrutini", rarity: "secret", image: tortugfinni,          income: 350_000,    price: "500M" },
  { name: "Chimpanzini Spiderini",     rarity: "secret", image: chimpanziniSpiderini, income: 325_000,    price: "100M" },
  { name: "La Vacca Saturno Saturnita",rarity: "secret", image: vaccaSaturno,         income: 250_000,    price: "50M" },
];

type Section = "catalog" | "guide" | "faq" | "contact";

const formatIncome = (n: number, suffix: string) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M${suffix}`
    : `$${(n / 1000).toFixed(0)}K${suffix}`;

const Index = () => {
  const [section, setSection] = useState<Section>("catalog");
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState<Lang>("ua");
  const t = (k: keyof typeof T) => (T[k] as Record<Lang, string>)[lang];

  const filtered = useMemo(
    () => BRAINROTS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const NAV: { id: Section; icon: typeof PawPrint; label: string }[] = [
    { id: "catalog", icon: PawPrint,      label: t("navCatalog") },
    { id: "guide",   icon: BookOpen,      label: t("navGuide") },
    { id: "faq",     icon: HelpCircle,    label: t("navFaq") },
    { id: "contact", icon: MessageCircle, label: t("navContact") },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-6 border-r border-border bg-card/40 p-6">
        <div>
          <h1
            className="text-2xl font-black tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            {t("brand")}
          </h1>
          <p className="text-xs text-muted-foreground mt-1">{t("tagline")}</p>
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

        {/* Language switcher */}
        <div className="rounded-xl border border-border bg-secondary/40 p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Globe className="h-3.5 w-3.5" /> Language
          </div>
          <div className="flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-bold transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.flag} {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto rounded-xl border border-border bg-secondary/50 p-4 text-xs text-muted-foreground">
          {t("topNote")}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        {/* Mobile top bar */}
        <div className="md:hidden mb-6 space-y-3">
          <div className="flex gap-1 rounded-xl bg-secondary/40 p-1">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-bold ${
                  lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {l.flag} {l.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {NAV.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setSection(id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  section === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {section === "catalog" && (
          <CatalogSection
            filtered={filtered}
            query={query}
            setQuery={setQuery}
            t={t}
            lang={lang}
          />
        )}
        {section === "guide" && <GuideSection lang={lang} t={t} />}
        {section === "faq" && <FaqSection lang={lang} t={t} />}
        {section === "contact" && <ContactSection t={t} />}
      </main>
    </div>
  );
};

/* ---------- Sections ---------- */

const CatalogSection = ({
  filtered, query, setQuery, t, lang,
}: {
  filtered: Brainrot[]; query: string; setQuery: (v: string) => void;
  t: (k: keyof typeof T) => string; lang: Lang;
}) => (
  <>
    <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
          <Crown className="h-8 w-8 text-brainrot-god" />
          {t("catalogTitle")}
        </h2>
        <p className="text-muted-foreground">
          {t("found")} {filtered.length} {t("pets")}
        </p>
      </div>
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPh")}
          className="pl-9 bg-secondary border-border"
        />
      </div>
    </header>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filtered.map((b) => {
        const color = RARITY_HSL[b.rarity];
        return (
          <article
            key={b.name}
            className="group rounded-2xl border-2 p-5 transition-all hover:-translate-y-1"
            style={{
              backgroundImage: "var(--gradient-card)",
              boxShadow: "var(--shadow-card)",
              borderColor: `hsl(${color} / 0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `hsl(${color})`;
              e.currentTarget.style.boxShadow = `0 0 30px -5px hsl(${color} / 0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `hsl(${color} / 0.3)`;
              e.currentTarget.style.boxShadow = "var(--shadow-card)";
            }}
          >
            <div
              className="text-center mb-3 rounded-lg py-1.5 font-black text-xs tracking-widest"
              style={{ backgroundColor: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
            >
              {RARITY_LABEL[b.rarity]}
            </div>

            <div className="flex items-center justify-center h-40 mb-4">
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                width={512}
                height={512}
                className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-2xl"
              />
            </div>

            <h3 className="text-center font-bold text-lg mb-3 leading-tight">{b.name}</h3>

            <div className="flex items-center justify-between text-sm mb-4 px-1">
              <span className="flex items-center gap-1 font-semibold" style={{ color: `hsl(${color})` }}>
                <Zap className="h-3.5 w-3.5" />
                {formatIncome(b.income, t("perSec"))}
              </span>
              <span className="text-muted-foreground">~{b.price}</span>
            </div>

            <Button asChild className="w-full" style={{ backgroundImage: "var(--gradient-primary)" }}>
              <a href="https://t.me/brainrot_ua" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {(T.buy as Record<Lang, string>)[lang]}
              </a>
            </Button>
          </article>
        );
      })}
    </section>
  </>
);

const GuideSection = ({ lang, t }: { lang: Lang; t: (k: keyof typeof T) => string }) => {
  const steps = T.guide[lang];
  const icons = [Sparkles, TrendingUp, Zap, Crown];
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-accent" /> {t("guideTitle")}
      </h2>
      <p className="text-muted-foreground mb-8">{t("guideSub")}</p>
      <div className="grid md:grid-cols-2 gap-5">
        {steps.map((s, i) => {
          const Icon = icons[i];
          return (
            <div
              key={s.t}
              className="rounded-2xl border border-border p-6"
              style={{ backgroundImage: "var(--gradient-card)" }}
            >
              <Icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const FaqSection = ({ lang, t }: { lang: Lang; t: (k: keyof typeof T) => string }) => (
  <>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
      <HelpCircle className="h-8 w-8 text-accent" /> {t("faqTitle")}
    </h2>
    <p className="text-muted-foreground mb-8">{t("faqSub")}</p>
    <div className="space-y-3">
      {T.faq[lang].map(({ q, a }) => (
        <details
          key={q}
          className="group rounded-2xl border border-border p-5 cursor-pointer"
          style={{ backgroundImage: "var(--gradient-card)" }}
        >
          <summary className="font-semibold flex items-center justify-between list-none">
            {q}
            <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
          </summary>
          <p className="text-muted-foreground text-sm mt-3">{a}</p>
        </details>
      ))}
    </div>
  </>
);

const ContactSection = ({ t }: { t: (k: keyof typeof T) => string }) => (
  <>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
      <MessageCircle className="h-8 w-8 text-accent" /> {t("contactTitle")}
    </h2>
    <p className="text-muted-foreground mb-8">{t("contactSub")}</p>
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
