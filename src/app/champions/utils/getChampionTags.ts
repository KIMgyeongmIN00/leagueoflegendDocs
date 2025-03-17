"use server";

import { fetchChampionList } from "../api/fetchChampionList";

export async function getChampionTags() {
  const champions = await fetchChampionList();

  // 모든 고유 태그 추출
  const allTags = Array.from(
    new Set(champions.flatMap((champion) => champion.tags))
  );

  return allTags;
}
