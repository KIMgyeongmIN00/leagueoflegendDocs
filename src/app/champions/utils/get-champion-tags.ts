"use server";

import { fetchChampionList } from "../api/fetch-championList";

export async function getChampionTags() {
  const champions = await fetchChampionList();

  const allTags = Array.from(
    new Set(champions.flatMap((champion) => champion.tags))
  );

  return allTags;
}
