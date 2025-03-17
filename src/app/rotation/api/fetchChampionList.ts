"use server";

import { fetchLatestVersion } from "@/app/api/fetchVersion";
import { ApiChampions } from "@/app/champions/types";

export async function fetchChampionList() {
  const version = await fetchLatestVersion();

  const allChampionResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  const allChampionData = await allChampionResponse.json();
  const allChampions = Object.values<ApiChampions>(allChampionData.data);

  return allChampions;
}
