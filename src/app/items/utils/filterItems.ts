import { ApiItem } from "../types";

export function categoryFilter(category: string, items: ApiItem[]) {
  const filteredItems = items.filter((item) => {
    if (category === "all") return true;
    if (category === "boots") return item.tags.includes("Boots");
    if (category === "attack")
      return item.tags.some((tag) =>
        ["Damage", "CriticalStrike", "AttackSpeed"].includes(tag)
      );
    if (category === "magic")
      return item.tags.some((tag) =>
        ["SpellDamage", "Mana", "ManaRegen"].includes(tag)
      );
    if (category === "defense")
      return item.tags.some((tag) =>
        ["Health", "Armor", "SpellBlock", "HealthRegen"].includes(tag)
      );
    if (category === "support")
      return item.tags.some((tag) =>
        ["Active", "GoldPer", "Vision"].includes(tag)
      );
    return false;
  });

  return { filteredItems };
}
