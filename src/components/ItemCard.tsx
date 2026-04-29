import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Item } from "@/lib/catalogs";

interface ItemCardProps {
  item: Item;
  price: string;
  color?: string;
  hideIncome?: boolean;
  onSelect?: (item: Item) => void;
  rarity: string;
}

export function ItemCard({
  item,
  price,
  color = "var(--secret)",
  hideIncome = false,
  onSelect,
  rarity,
}: ItemCardProps) {
  return (
    <article
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
      {/* Rarity Badge */}
      <div
        className="text-center mb-2 md:mb-3 rounded-lg py-1.5 md:py-1.5 font-black text-xs md:text-xs tracking-widest"
        style={{ backgroundColor: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
      >
        {rarity}
      </div>

      {/* Image */}
      <button
        type="button"
        onClick={() => onSelect?.(item)}
        className="flex items-center justify-center h-32 md:h-40 mb-3 md:mb-4 w-full"
        aria-label={item.name}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={512}
          height={512}
          className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 md:drop-shadow-2xl"
        />
      </button>

      {/* Name */}
      <h3 className="text-center font-bold text-base md:text-lg mb-2 md:mb-3 leading-tight line-clamp-2 min-h-[2.5em]">
        {item.name}
      </h3>

      {/* Stats and Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-sm md:text-sm mb-3 md:mb-4 px-1">
        {!hideIncome && item.income > 0 && (
          <span className="flex items-center gap-1 font-semibold truncate" style={{ color: `hsl(${color})` }}>
            💡 ${(item.income / 1_000_000).toFixed(1)}M/sec
          </span>
        )}
        <span
          className="font-semibold text-foreground truncate"
          style={{ marginLeft: hideIncome || item.income === 0 ? "auto" : "0" }}
        >
          {price}
        </span>
      </div>

      {/* Buy Button */}
      <Button
        type="button"
        onClick={() => onSelect?.(item)}
        className="w-full h-11 md:h-10 text-sm md:text-sm"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <ShoppingCart className="mr-1.5 md:mr-2 h-4 w-4 md:h-4 md:w-4" />
        Деталі
      </Button>
    </article>
  );
}
