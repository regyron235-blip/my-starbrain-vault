import { ItemCard } from "@/components/ItemCard";
import type { Item } from "@/lib/catalogs";
import { REAL_PRICE_USD, formatPrice } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

interface HeartbladeDisplayProps {
  lang?: Lang;
}

export function HeartbladeDisplay({ lang = "ua" }: HeartbladeDisplayProps) {
  const item: Item = {
    name: "Heartblade",
    rarity: "secret",
    image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_p6mfssp6mfssp6mf.png`,
    income: 0,
    priceTag: "1.59",
  };

  const price = formatPrice(REAL_PRICE_USD[item.priceTag] ?? 0, "UAH");

  return (
    <div className="w-full max-w-sm">
      <ItemCard
        item={item}
        price={price}
        color="var(--secret)"
        hideIncome={true}
        rarity="SECRET"
        onSelect={(selectedItem) => {
          console.log("Обраний товар:", selectedItem);
          // Тут можна додати логіку для обробки вибору товару
        }}
      />
    </div>
  );
}
