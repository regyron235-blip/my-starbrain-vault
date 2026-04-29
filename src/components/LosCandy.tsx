import { ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LosCandyProps {
  name?: string;
  image?: string;
  income?: number;
  priceTag?: string;
  rarity?: string;
  onBuyClick?: () => void;
}

const formatIncome = (n: number, suffix: string = "/s") =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M${suffix}`
    : `$${(n / 1000).toFixed(0)}K${suffix}`;

export const LosCandy = ({
  name = "Los Candies",
  image = `${import.meta.env.BASE_URL}Gemini_Generated_Image_i6bmuei6bmuei6bm.png`,
  income = 23_000_000,
  priceTag = "150M",
  rarity = "secret",
  onBuyClick,
}: LosCandyProps) => {
  const colorHsl = "262 83% 65%"; // Фіолетовий (secret rarity)
  
  return (
    <Card
      className="group rounded-2xl border-2 p-6 max-w-sm transition-all hover:-translate-y-1 overflow-hidden"
      style={{
        backgroundImage: "var(--gradient-card)",
        boxShadow: "var(--shadow-card)",
        borderColor: `hsl(${colorHsl} / 0.3)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `hsl(${colorHsl})`;
        e.currentTarget.style.boxShadow = `0 0 30px -5px hsl(${colorHsl} / 0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `hsl(${colorHsl} / 0.3)`;
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
    >
      {/* Rarity Badge */}
      <div
        className="text-center mb-4 rounded-lg py-1.5 font-black text-xs tracking-widest uppercase mb-4"
        style={{ backgroundColor: `hsl(${colorHsl} / 0.15)`, color: `hsl(${colorHsl})` }}
      >
        {rarity}
      </div>

      {/* Image */}
      <button
        type="button"
        onClick={onBuyClick}
        className="flex items-center justify-center h-48 mb-4 w-full hover:cursor-pointer"
        aria-label={name}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={512}
          height={512}
          className="max-h-full w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-2xl"
        />
      </button>

      {/* Name */}
      <h3 className="text-center font-bold text-lg mb-4 leading-tight line-clamp-2 min-h-[2.5em]">
        {name}
      </h3>

      {/* Stats */}
      <div className="flex items-center justify-between gap-3 text-sm mb-4 px-1">
        <span className="flex items-center gap-2 font-semibold truncate" style={{ color: `hsl(${colorHsl})` }}>
          <Zap className="h-4 w-4 shrink-0" />
          {formatIncome(income)}
        </span>
        <span className="font-semibold text-foreground truncate">{priceTag}</span>
      </div>

      {/* Buy Button */}
      <Button
        onClick={onBuyClick}
        className="w-full h-11 text-sm"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Купити
      </Button>
    </Card>
  );
};

export default LosCandy;
