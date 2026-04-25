import { useMemo, useState } from "react";
import { Search, PawPrint, Newspaper, Code2, Bot, Headphones, Info, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import tralalero from "@/assets/tralalero.png";
import bombardiro from "@/assets/bombardiro.png";
import tungtung from "@/assets/tungtung.png";
import lirili from "@/assets/lirili.png";
import patapim from "@/assets/patapim.png";
import chimpanzini from "@/assets/chimpanzini.png";

type Rarity = "legendary" | "epic" | "rare";

interface Brainrot {
  name: string;
  year: number;
  rarity: Rarity;
  image: string;
  seller: string;
  contact: string;
}

const BRAINROTS: Brainrot[] = [
  { name: "Tralalero Tralala", year: 2024, rarity: "legendary", image: tralalero, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
  { name: "Bombardiro Crocodilo", year: 2024, rarity: "legendary", image: bombardiro, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
  { name: "Tung Tung Tung Sahur", year: 2025, rarity: "epic", image: tungtung, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
  { name: "Lirili Larila", year: 2024, rarity: "legendary", image: lirili, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
  { name: "Brr Brr Patapim", year: 2024, rarity: "epic", image: patapim, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
  { name: "Chimpanzini Bananini", year: 2024, rarity: "rare", image: chimpanzini, seller: "@brainrot_ua", contact: "https://t.me/brainrot_ua" },
];

const rarityClass: Record<Rarity, string> = {
  legendary: "text-legendary",
  epic: "text-epic",
  rare: "text-rare",
};

const Index = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => BRAINROTS.filter((b) => b.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const navItems = [
    { icon: PawPrint, label: "Усі брейнроти", active: true },
    { icon: Newspaper, label: "Новини" },
    { icon: Code2, label: "Розробники" },
    { icon: Bot, label: "ШІ Помічник" },
    { icon: Headphones, label: "Підтримка" },
    { icon: Info, label: "Про сайт" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-6 border-r border-border bg-card/40 p-6">
        <h1 className="text-2xl font-black tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
          BRAINROT ELITE
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Пошук брейнрота..."
            className="pl-9 bg-secondary border-border"
          />
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
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
          🇺🇦 Київ · працює 24/7
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Колекція брейнротів</h2>
          <p className="text-muted-foreground">Знайдено {filtered.length} персонажів</p>
        </header>

        {/* Mobile search */}
        <div className="relative mb-6 md:hidden">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Пошук брейнрота..."
            className="pl-9 bg-secondary border-border"
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((b) => (
            <article
              key={b.name}
              className="group rounded-2xl border border-border p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
              style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-center mb-3">
                <p className={`text-xs font-bold tracking-widest uppercase ${rarityClass[b.rarity]}`}>
                  {b.rarity}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Рік: {b.year}</p>
              </div>

              <div className="flex items-center justify-center h-40 mb-4">
                <img
                  src={b.image}
                  alt={`Брейнрот ${b.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="max-h-full w-auto object-contain transition-transform group-hover:scale-110"
                />
              </div>

              <h3 className="text-center font-bold text-lg mb-4">{b.name}</h3>

              <Button asChild className="w-full" style={{ backgroundImage: "var(--gradient-primary)" }}>
                <a href={b.contact} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  КУПИТИ
                </a>
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-3">{b.seller}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
