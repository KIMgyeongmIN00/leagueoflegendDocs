"use server";

import { fetchLatestVersion } from "@/app/api/fetchVersion";
import { ApiChampions } from "../types";

export async function fetchChampionDetail(id: string) {
  const version = await fetchLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const champion = data.data[id] as ApiChampions;

  return { champion };
}
