import { ItemCard } from "@/components/ItemCard";
import type { Item } from "@/lib/catalogs";

export function IcebeamProduct() {
  const icebeamItem: Item = {
    name: "Icebeam",
    rarity: "secret",
    image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_7ddbi27ddbi27ddb.png`,
    income: 0,
    priceTag: "18",
  };

  return (
    <div className="flex justify-center p-4">
      <ItemCard
        item={icebeamItem}
        price="18 грн"
        color="var(--secret)"
        rarity="SECRET"
        onSelect={(item) => console.log("Selected:", item)}
      />
    </div>
  );
}
