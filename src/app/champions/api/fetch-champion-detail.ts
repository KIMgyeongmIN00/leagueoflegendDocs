"use server";

import { fetchLatestVersion } from "@/app/api/fetch-version";
import { DetailResponse } from "@/lib/types";

export async function fetchChampionData(championId: string) {
  const version = await fetchLatestVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${championId}.json`
  );

  const data: DetailResponse = await response.json();
  return data.data[championId];
}
