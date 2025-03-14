"use server";

import { fetchLatestVersion } from "@/app/api/fetchVersion";
import { ApiChampions } from "@/app/champions/types";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export async function fetchRotationChampions() {
  const rotationResponse = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey || "",
      },
    }
  );
  const rotationData = await rotationResponse.json();
  const freeChampionIds = rotationData.freeChampionIds;

  const version = await fetchLatestVersion();

  const allChampionResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  const allChampionData = await allChampionResponse.json();
  const allChampions = Object.values(allChampionData.data) as ApiChampions[];

  return { freeChampionIds, allChampions };
}
