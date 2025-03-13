import { useSearchParams } from "next/navigation";
import { ChampionGridProps } from "../champions/types";

export function useFilteredChampions({
  initialChampions,
  tag,
}: ChampionGridProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredChampions = initialChampions
    .filter((champion) => {
      if (tag === "all") return true;
      return champion.tags.includes(tag);
    })
    .filter(
      (champion) =>
        searchQuery === "" ||
        champion.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));

  return { filteredChampions };
}
