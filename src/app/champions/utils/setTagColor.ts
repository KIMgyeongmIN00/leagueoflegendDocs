export function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    Fighter: "bg-orange-500/80",
    Tank: "bg-blue-500/80",
    Mage: "bg-purple-500/80",
    Assassin: "bg-red-500/80",
    Marksman: "bg-green-500/80",
    Support: "bg-teal-500/80",
  };
  return colors[tag] || "bg-primary/80";
}
