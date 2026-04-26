import { useMemo, useState } from "react";
import {
  Search, PawPrint, BookOpen, HelpCircle, MessageCircle,
  ShoppingCart, Sparkles, TrendingUp, Crown, Zap, Globe, X, Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  T, LANGS, RARITY_LABEL, GUIDE, FAQ, REAL_PRICE_USD, formatPrice,
  type Lang,
} from "@/lib/i18n";

import grandeCombinazione from "@/assets/grande-combinazione.webp";
import vaccaSaturno from "@/assets/vacca-saturno.webp";
import losTralaleritos from "@/assets/los-tralaleritos.webp";
import garamaMadundung from "@/assets/garama-madundung.webp";
import chimpanziniSpiderini from "@/assets/chimpanzini-spiderini.webp";
import lasTralaleritas from "@/assets/las-tralaleritas.webp";
import nuclearoDinossauro from "@/assets/nuclearo-dinossauro.webp";
import graipussMedussi from "@/assets/graipuss-medussi.webp";
import potHotspot from "@/assets/pot-hotspot.webp";
import tortugfinni from "@/assets/tortugfinni.webp";
import lasVaquitas from "@/assets/las-vaquitas.webp";
import chicleteria from "@/assets/chicleteria.webp";
import agarrini from "@/assets/agarrini.webp";

type Rarity = "secret";

interface Brainrot {
  name: string;
  rarity: Rarity;
  image: string;
  income: number; // dollars per second (in-game)
  priceTag: string; // in-game price tag, key into REAL_PRICE_USD
}

const RARITY_HSL: Record<Rarity, string> = {
  secret: "var(--secret)",
};

const BRAINROTS: Brainrot[] = [
  { name: "Garama and Madundung",      rarity: "secret", image: garamaMadundung,      income: 50_000_000, priceTag: "10B" },
  { name: "Nuclearo Dinossauro",       rarity: "secret", image: nuclearoDinossauro,   income: 15_000_000, priceTag: "2.5B" },
  { name: "La Grande Combinassion",    rarity: "secret", image: grandeCombinazione,   income: 10_000_000, priceTag: "1B" },
  { name: "Chicleteria Bicicletera",   rarity: "secret", image: chicleteria,          income: 3_500_000,  priceTag: "750M" },
  { name: "Pot Hotspot",               rarity: "secret", image: potHotspot,           income: 2_500_000,  priceTag: "500M" },
  { name: "Graipuss Medussi",          rarity: "secret", image: graipussMedussi,      income: 1_000_000,  priceTag: "250M" },
  { name: "Las Vaquitas Saturnitas",   rarity: "secret", image: lasVaquitas,          income: 750_000,    priceTag: "160M" },
  { name: "Las Tralaleritas",          rarity: "secret", image: lasTralaleritas,      income: 650_000,    priceTag: "150M" },
  { name: "Los Tralaleritos",          rarity: "secret", image: losTralaleritos,      income: 500_000,    priceTag: "150M" },
  { name: "Agarrini la Palini",        rarity: "secret", image: agarrini,             income: 425_000,    priceTag: "80M" },
  { name: "Tortugfinni Dragonfrutini", rarity: "secret", image: tortugfinni,          income: 350_000,    priceTag: "500M" },
  { name: "Chimpanzini Spiderini",     rarity: "secret", image: chimpanziniSpiderini, income: 325_000,    priceTag: "100M" },
  { name: "La Vacca Saturno Saturnita",rarity: "secret", image: vaccaSaturno,         income: 250_000,    priceTag: "50M" },
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
  const [selected, setSelected] = useState<Brainrot | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const t = (k: keyof typeof T) => (T[k] as Record<Lang, string>)[lang];

  const filtered = useMemo(
    () => BRAINROTS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const currentLang = LANGS.find((l) => l.code === lang)!;

  const NAV: { id: Section; icon: typeof PawPrint; label: string }[] = [
    { id: "catalog", icon: PawPrint,      label: t("navCatalog") },
    { id: "guide",   icon: BookOpen,      label: t("navGuide") },
    { id: "faq",     icon: HelpCircle,    label: t("navFaq") },
    { id: "contact", icon: MessageCircle, label: t("navContact") },
  ];

  const priceFor = (b: Brainrot) =>
    formatPrice(REAL_PRICE_USD[b.priceTag] ?? 0, currentLang.currency);

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

        {/* Language button → opens modal */}
        <button
          onClick={() => setLangOpen(true)}
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/20 text-[10px] font-bold text-primary">
            {currentLang.cc}
          </span>
          <span className="flex-1 text-left">
            <span className="block leading-tight">{currentLang.name}</span>
            <span className="block text-[10px] text-muted-foreground leading-tight">
              {currentLang.native} · {currentLang.currency}
            </span>
          </span>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </button>

        <a
          href="https://t.me/snipern_TY"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 p-3 text-sm font-semibold text-foreground hover:bg-primary/20 transition-colors"
        >
          <Send className="h-4 w-4 text-primary shrink-0" />
          <span className="min-w-0 truncate">@snipern_TY</span>
        </a>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-10 min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden mb-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h1
              className="text-xl font-black tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("brand")}
            </h1>
            <a
              href="https://t.me/snipern_TY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground"
            >
              <Send className="h-3.5 w-3.5 text-primary" />
              @snipern_TY
            </a>
          </div>
          <button
            onClick={() => setLangOpen(true)}
            className="flex w-full items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/20 text-[10px] font-bold text-primary">
              {currentLang.cc}
            </span>
            <span className="flex-1 text-left font-medium">{currentLang.name}</span>
            <span className="text-xs text-muted-foreground">{currentLang.currency}</span>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </button>
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
            priceFor={priceFor}
            onSelect={setSelected}
          />
        )}
        {section === "guide" && <GuideSection lang={lang} t={t} />}
        {section === "faq" && <FaqSection lang={lang} t={t} />}
        {section === "contact" && <ContactSection t={t} />}
      </main>

      <BrainrotDialog
        brainrot={selected}
        onClose={() => setSelected(null)}
        t={t}
        lang={lang}
        priceFor={priceFor}
      />

      <LangDialog
        open={langOpen}
        onClose={() => setLangOpen(false)}
        current={lang}
        onPick={(l) => { setLang(l); setLangOpen(false); }}
        t={t}
      />
    </div>
  );
};

/* ---------- Sections ---------- */

const CatalogSection = ({
  filtered, query, setQuery, t, lang, priceFor, onSelect,
}: {
  filtered: Brainrot[]; query: string; setQuery: (v: string) => void;
  t: (k: keyof typeof T) => string; lang: Lang;
  priceFor: (b: Brainrot) => string;
  onSelect: (b: Brainrot) => void;
}) => (
  <>
    <div className="mb-6 md:mb-8 relative overflow-hidden rounded-2xl border-2 border-primary/40 p-4 md:p-6"
      style={{ backgroundImage: "var(--gradient-primary)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)", backgroundSize: "24px 24px, 32px 32px" }}
      />
      <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-5">
        <div className="text-4xl md:text-6xl animate-bounce">🧠</div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white/80 uppercase">
            ⚡ BRAINROT MODE ⚡
          </div>
          <div className="text-xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] animate-pulse">
            TUNG TUNG TUNG SAHUR 🥁
          </div>
          <div className="text-xs md:text-sm text-white/90 font-semibold">
            Tralalero Tralala · Bombardiro Crocodilo · Lirili Larila 🐊✨
          </div>
          <audio
            controls
            loop
            preload="none"
            src={`${import.meta.env.BASE_URL}audio/tung-tung-sahur.mp3`}
            className="mt-3 w-full max-w-xs h-9 rounded-full bg-white/90"
          >
            🎵 Tung Tung Sahur
          </audio>
        </div>
        <div className="text-4xl md:text-6xl animate-spin" style={{ animationDuration: "3s" }}>💀</div>
      </div>
    </div>

    <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 flex items-center gap-2 md:gap-3">
          <Crown className="h-6 w-6 md:h-8 md:w-8 text-brainrot-god" />
          {t("catalogTitle")}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
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

    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
      {filtered.map((b) => {
        const color = RARITY_HSL[b.rarity];
        return (
          <article
            key={b.name}
            className="group rounded-2xl border-2 p-3 md:p-5 transition-all hover:-translate-y-1"
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
              className="text-center mb-2 md:mb-3 rounded-lg py-1 md:py-1.5 font-black text-[10px] md:text-xs tracking-widest"
              style={{ backgroundColor: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
            >
              {RARITY_LABEL[b.rarity]}
            </div>

            <button
              type="button"
              onClick={() => onSelect(b)}
              className="flex items-center justify-center h-24 md:h-40 mb-3 md:mb-4 w-full"
              aria-label={b.name}
            >
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                width={512}
                height={512}
                className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-2xl"
              />
            </button>

            <h3 className="text-center font-bold text-sm md:text-lg mb-2 md:mb-3 leading-tight line-clamp-2 min-h-[2.5em]">{b.name}</h3>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-xs md:text-sm mb-3 md:mb-4 px-1">
              <span className="flex items-center gap-1 font-semibold truncate" style={{ color: `hsl(${color})` }}>
                <Zap className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0" />
                {formatIncome(b.income, t("perSec"))}
              </span>
              <span className="font-semibold text-foreground truncate">{priceFor(b)}</span>
            </div>

            <Button
              type="button"
              onClick={() => onSelect(b)}
              className="w-full h-9 md:h-10 text-xs md:text-sm"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <ShoppingCart className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
              {(T.details as Record<Lang, string>)[lang]}
            </Button>
          </article>
        );
      })}
    </section>
  </>
);

const BrainrotDialog = ({
  brainrot, onClose, t, lang, priceFor,
}: {
  brainrot: Brainrot | null;
  onClose: () => void;
  t: (k: keyof typeof T) => string;
  lang: Lang;
  priceFor: (b: Brainrot) => string;
}) => {
  const open = brainrot !== null;
  const color = brainrot ? RARITY_HSL[brainrot.rarity] : "var(--secret)";
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-md border-2 p-0 overflow-hidden"
        style={{
          borderColor: `hsl(${color} / 0.6)`,
          backgroundImage: "var(--gradient-card)",
          boxShadow: `0 0 60px -10px hsl(${color} / 0.6)`,
        }}
      >
        {brainrot && (
          <>
            <DialogHeader className="px-6 pt-6 pb-2">
              <div
                className="text-center mb-4 rounded-lg py-1.5 font-black text-xs tracking-widest"
                style={{ backgroundColor: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
              >
                {RARITY_LABEL[brainrot.rarity]}
              </div>
              <div className="flex items-center justify-center h-56">
                <img
                  src={brainrot.image}
                  alt={brainrot.name}
                  className="max-h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>
              <DialogTitle className="text-center text-2xl font-black mt-2">
                {brainrot.name}
              </DialogTitle>
              <DialogDescription className="sr-only">{brainrot.name}</DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-6 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg bg-secondary/50 p-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t("income")}</p>
                  <p className="font-bold flex items-center gap-1" style={{ color: `hsl(${color})` }}>
                    <Zap className="h-3.5 w-3.5" />
                    {formatIncome(brainrot.income, t("perSec"))}
                  </p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t("price")}</p>
                  <p className="font-bold">{priceFor(brainrot)}</p>
                </div>
              </div>

              <Button
                asChild
                className="w-full"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <a href="https://t.me/snipern_TY" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {(T.buy as Record<Lang, string>)[lang]}
                </a>
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const LangDialog = ({
  open, onClose, current, onPick, t,
}: {
  open: boolean;
  onClose: () => void;
  current: Lang;
  onPick: (l: Lang) => void;
  t: (k: keyof typeof T) => string;
}) => {
  const [q, setQ] = useState("");
  const list = LANGS.filter(
    (l) =>
      l.name.toLowerCase().includes(q.toLowerCase()) ||
      l.native.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl border-border p-0 overflow-hidden">
        <div className="flex items-center gap-4 p-6 pb-4">
          <DialogTitle
            className="flex-1 text-3xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            {t("selectLang")}
          </DialogTitle>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("searchPh")}
              className="pl-9 bg-secondary border-border rounded-full"
            />
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label={t("close")}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <DialogDescription className="sr-only">{t("selectLang")}</DialogDescription>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-6 pt-2 max-h-[60vh] overflow-y-auto">
          {list.map((l) => {
            const active = l.code === current;
            return (
              <button
                key={l.code}
                onClick={() => onPick(l.code)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                  active
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/40 hover:bg-secondary"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-background/60 text-xs font-bold text-muted-foreground">
                  {l.cc}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold truncate">{l.name}</span>
                  <span className="block text-xs text-muted-foreground truncate">
                    {l.native} · {l.currency}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const GuideSection = ({ lang, t }: { lang: Lang; t: (k: keyof typeof T) => string }) => {
  const steps = GUIDE[lang];
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
      {FAQ[lang].map(({ q, a }) => (
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
        { label: "Telegram", value: "@snipern_TY", href: "https://t.me/snipern_TY" },
      ].map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border p-6 hover:border-primary/60 transition-colors"
          style={{ backgroundImage: "var(--gradient-card)" }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
          <p className="font-bold text-lg">{c.value}</p>
        </a>
      ))}
    </div>
  </>
);

export default Index;
