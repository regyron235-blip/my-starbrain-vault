import { useMemo, useState, useEffect } from "react";
import {
  Search, PawPrint, BookOpen, HelpCircle, MessageCircle,
  ShoppingCart, Sparkles, TrendingUp, Crown, Zap, Globe, X, Send, DollarSign,
  ArrowDownUp, ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import BrainrotPlayer from "@/components/BrainrotPlayer";
import LogoBrainrot from "@/components/LogoBrainrot";
import { CurrencyPage } from "./Currency";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  T, LANGS, RARITY_LABEL, GUIDE, FAQ, REAL_PRICE_USD, formatPrice,
  type Lang,
} from "@/lib/i18n";
import { CATALOGS, type Item } from "@/lib/catalogs";

import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Rarity = "secret";

interface Brainrot extends Item {
  // Brainrot type alias for Item
}

const RARITY_HSL: Record<Rarity, string> = {
  secret: "var(--secret)",
};

type Section = "catalog" | "guide" | "faq" | "contact" | "currency" | "theme";

const THEMES = [
  { name: "Фіолет", hsl: "262 83% 65%", color: "#8b5cf6" },
  { name: "Рожеве", hsl: "334 78% 69%", color: "#ec4899" },
  { name: "Синє", hsl: "217 92% 57%", color: "#3b82f6" },
  { name: "Зелене", hsl: "160 84% 39%", color: "#10b981" },
  { name: "Оранжеве", hsl: "25 94% 55%", color: "#f97316" },
  { name: "Червоне", hsl: "0 84% 60%", color: "#ef4444" },
  { name: "Циан", hsl: "188 94% 42%", color: "#06b6d4" },
  { name: "Індиго", hsl: "244 77% 63%", color: "#6366f1" },
  { name: "Золотисте", hsl: "38 92% 50%", color: "#f59e0b" },
  { name: "Бузок", hsl: "268 85% 60%", color: "#a855f7" },
  { name: "Біле", hsl: "0 0% 100%", color: "#ffffff" },
  { name: "Чорне", hsl: "0 0% 0%", color: "#000000" },
];

const formatIncome = (n: number, suffix: string) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M${suffix}`
    : `$${(n / 1000).toFixed(0)}K${suffix}`;

const Index = () => {
  const [section, setSection] = useState<Section>("catalog");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "income">("price-asc");
  const [lang, setLang] = useState<Lang>("ua");
  const [selected, setSelected] = useState<Brainrot | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [themeColor, setThemeColor] = useState(0);
  const [catalogId, setCatalogId] = useState("steal-in-brainrot");
  const t = (k: keyof typeof T) => (T[k] as Record<Lang, string>)[lang];

  // Применить цвет при загрузке и при смене темы
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", THEMES[themeColor].hsl);
  }, [themeColor]);

  // Сбросить сортировку по доходу при переключении на Murder Mystery 2
  useEffect(() => {
    if (catalogId === "murder-mystery-2" && sortBy === "income") {
      setSortBy("price-asc");
    }
  }, [catalogId, sortBy, setSortBy]);

  const currentCatalog = CATALOGS.find((c) => c.id === catalogId) || CATALOGS[0];
  const BRAINROTS = currentCatalog.items;

  const filtered = useMemo(() => {
    let result = BRAINROTS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()));
    
    // Parse price function
    const parsePrice = (priceTag: string): number => {
      const num = parseInt(priceTag.replace(/[BM]/g, ""));
      if (priceTag.includes("B")) return num * 1_000; // Convert billions to millions
      return num;
    };
    
    // Apply sorting
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => parsePrice(a.priceTag) - parsePrice(b.priceTag));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => parsePrice(b.priceTag) - parsePrice(a.priceTag));
    } else if (sortBy === "income") {
      result = [...result].sort((a, b) => b.income - a.income);
    }
    
    return result;
  }, [query, sortBy, BRAINROTS]);

  const currentLang = LANGS.find((l) => l.code === lang)!;

  const NAV: { id: Section; icon: typeof PawPrint; label: string }[] = [
    { id: "catalog", icon: PawPrint,      label: t("navCatalog") },
    { id: "guide",   icon: BookOpen,      label: t("navGuide") },
    { id: "faq",     icon: HelpCircle,    label: t("navFaq") },
    { id: "contact", icon: MessageCircle, label: t("navContact") },
    { id: "currency", icon: DollarSign,   label: t("navCurrency") },
    { id: "theme",   icon: Sparkles,      label: "Тема" },
  ];

  const priceFor = (b: Brainrot) =>
    formatPrice(REAL_PRICE_USD[b.priceTag] ?? 0, currentLang.currency);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-6 border-r border-border bg-card/40 p-6">
        <div>
          <LogoBrainrot className="w-full mb-3" />
          <p className="text-xs text-muted-foreground mt-3 text-center">{t("tagline")}</p>
        </div>

        {/* Catalog selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[var(--shadow-glow)]">
              <span className="flex-1 text-left">{currentCatalog.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {CATALOGS.map((catalog) => (
              <DropdownMenuItem
                key={catalog.id}
                onClick={() => setCatalogId(catalog.id)}
                className={catalogId === catalog.id ? "bg-primary/20" : ""}
              >
                <span className="font-medium">{catalog.name}</span>
                {catalogId === catalog.id && <span className="ml-auto">✓</span>}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

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
      <main className="flex-1 p-4 md:p-10 min-w-0 overflow-x-hidden">
        {/* Mobile top bar */}
        <div className="md:hidden mb-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 max-w-xs">
              <LogoBrainrot className="w-full" />
            </div>
            <a
              href="https://t.me/snipern_TY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-2 text-xs font-semibold text-foreground h-10"
            >
              <Send className="h-4 w-4 text-primary" />
              @snipern_TY
            </a>
          </div>
          {/* Mobile catalog selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors h-10">
                <span className="flex-1 text-left">{currentCatalog.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {CATALOGS.map((catalog) => (
                <DropdownMenuItem
                  key={catalog.id}
                  onClick={() => setCatalogId(catalog.id)}
                  className={catalogId === catalog.id ? "bg-primary/20" : ""}
                >
                  <span className="font-medium">{catalog.name}</span>
                  {catalogId === catalog.id && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => setLangOpen(true)}
            className="flex w-full items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 text-sm h-10"
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
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap h-10 ${
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
            sortBy={sortBy}
            setSortBy={setSortBy}
            t={t}
            lang={lang}
            priceFor={priceFor}
            onSelect={setSelected}
            catalogId={catalogId}
          />
        )}
        {section === "guide" && <GuideSection lang={lang} t={t} />}
        {section === "faq" && <FaqSection lang={lang} t={t} />}
        {section === "contact" && <ContactSection t={t} />}
        {section === "currency" && <CurrencyPage lang={lang} />}
        {section === "theme" && (
          <ThemeSection
            themes={THEMES}
            selectedTheme={themeColor}
            onSelectTheme={setThemeColor}
          />
        )}
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
  filtered, query, setQuery, sortBy, setSortBy, t, lang, priceFor, onSelect, catalogId,
}: {
  filtered: Brainrot[]; query: string; setQuery: (v: string) => void;
  sortBy: "price-asc" | "price-desc" | "income"; setSortBy: (v: "price-asc" | "price-desc" | "income") => void;
  t: (k: keyof typeof T) => string; lang: Lang;
  priceFor: (b: Brainrot) => string;
  onSelect: (b: Brainrot) => void;
  catalogId: string;
}) => (
  <>
    <div 
      className="mb-6 md:mb-8 relative overflow-hidden rounded-2xl border-2 p-4 md:p-6 [transform:translateZ(0)] [backface-visibility:hidden]"
      style={{ 
        backgroundImage: "var(--gradient-primary)",
        borderColor: "hsl(var(--primary) / 0.4)"
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none [transform:translateZ(0)]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)", backgroundSize: "24px 24px, 32px 32px" }}
      />
      <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-5">
        <div className="text-4xl md:text-6xl md:animate-bounce">🧠</div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white/80 uppercase">
            ⚡ BRAINROT MODE ⚡
          </div>
          <div className="text-xl md:text-3xl font-black text-white md:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            TUNG TUNG TUNG SAHUR 🥁
          </div>
          <div className="text-xs md:text-sm text-white/90 font-semibold">
            Tralalero Tralala · Bombardiro Crocodilo · Lirili Larila 🐊✨
          </div>
          <div className="flex justify-center md:justify-start">
            <BrainrotPlayer />
          </div>
        </div>
        <div className="text-4xl md:text-6xl md:animate-spin" style={{ animationDuration: "3s" }}>💀</div>
      </div>
    </div>

    <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2 md:gap-3">
          <Crown className="h-7 w-7 md:h-8 md:w-8 text-brainrot-god" />
          {catalogId === "murder-mystery-2" ? "Найдорожчі предмети" : t("catalogTitle")}
        </h2>
        <p className="text-base md:text-base text-muted-foreground">
          {t("found")} {filtered.length} {catalogId === "murder-mystery-2" ? "предметів" : t("pets")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={catalogId === "murder-mystery-2" ? "Пошук предмету..." : t("searchPh")}
            className="pl-10 h-11 bg-secondary border-border text-base"
          />
        </div>
        <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
          <SelectTrigger className="w-full md:w-auto h-11 bg-secondary border-border">
            <ArrowDownUp className="h-5 w-5 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">{t("sortCheapToExpensive")}</SelectItem>
            <SelectItem value="price-desc">{t("sortExpensiveToCheap")}</SelectItem>
            {catalogId !== "murder-mystery-2" && (
              <SelectItem value="income">{t("sortByIncome")}</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
    </header>

    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {filtered.map((b) => {
        const color = RARITY_HSL[b.rarity];
        return (
          <article
            key={b.name}
            className="group rounded-2xl border-2 p-4 md:p-5 transition-all hover:-translate-y-1"
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
              className="text-center mb-2 md:mb-3 rounded-lg py-1.5 md:py-1.5 font-black text-xs md:text-xs tracking-widest"
              style={{ backgroundColor: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
            >
              {RARITY_LABEL[b.rarity]}
            </div>

            <button
              type="button"
              onClick={() => onSelect(b)}
              className="flex items-center justify-center h-32 md:h-40 mb-3 md:mb-4 w-full"
              aria-label={b.name}
            >
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                width={512}
                height={512}
                className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 md:drop-shadow-2xl"
              />
            </button>

            <h3 className="text-center font-bold text-base md:text-lg mb-2 md:mb-3 leading-tight line-clamp-2 min-h-[2.5em]">{b.name}</h3>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-sm md:text-sm mb-3 md:mb-4 px-1">
              {catalogId !== "murder-mystery-2" && (
                <span className="flex items-center gap-1 font-semibold truncate" style={{ color: `hsl(${color})` }}>
                  <Zap className="h-4 w-4 md:h-3.5 md:w-3.5 shrink-0" />
                  {formatIncome(b.income, t("perSec"))}
                </span>
              )}
              <span className="font-semibold text-foreground truncate" style={{ marginLeft: catalogId === "murder-mystery-2" ? "auto" : "0" }}>{priceFor(b)}</span>
            </div>

            <Button
              type="button"
              onClick={() => onSelect(b)}
              className="w-full h-11 md:h-10 text-sm md:text-sm"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <ShoppingCart className="mr-1.5 md:mr-2 h-4 w-4 md:h-4 md:w-4" />
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
                  className="max-h-full w-auto object-contain md:drop-shadow-2xl"
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

const ThemeSection = ({
  themes,
  selectedTheme,
  onSelectTheme,
}: {
  themes: typeof THEMES;
  selectedTheme: number;
  onSelectTheme: (idx: number) => void;
}) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-3xl font-bold mb-2">🎨 Вибір Теми</h2>
      <p className="text-muted-foreground">Виберіть колірну схему для сайту</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {themes.map((theme, idx) => (
        <button
          key={idx}
          onClick={() => {
            onSelectTheme(idx);
            document.documentElement.style.setProperty("--primary", theme.hsl);
          }}
          className={`relative rounded-2xl overflow-hidden p-6 border-2 transition-all ${
            selectedTheme === idx
              ? "border-primary scale-105 shadow-xl"
              : "border-border hover:scale-105"
          }`}
          style={{
            background: `linear-gradient(135deg, ${theme.color}33 0%, ${theme.color}11 100%)`,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: theme.color }}
            />
            <span className="text-sm font-medium text-center">{theme.name}</span>
          </div>
          {selectedTheme === idx && (
            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </button>
      ))}
    </div>
  </div>
);

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
