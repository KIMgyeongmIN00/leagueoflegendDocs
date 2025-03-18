export function translateTag(tag: string): string {
  const translations: Record<string, string> = {
    Fighter: "전사",
    Tank: "탱커",
    Mage: "마법사",
    Assassin: "암살자",
    Marksman: "원딜",
    Support: "서포터",
  };
  return translations[tag] || tag;
}
