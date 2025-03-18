"use client";

import { FilteredChampionArgs } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export function useFilteredChampions({
  initialChampions,
  tag,
}: FilteredChampionArgs) {
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
