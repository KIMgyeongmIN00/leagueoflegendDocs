import { fetchLatestVersion } from "@/app/api/fetchVersion";
import { ApiChampions } from "../types";

export async function fetchChampionList() {
  const version = await fetchLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    { next: { revalidate: 600 } }
  );
  const data = await response.json();
  const champions = Object.values(data.data) as ApiChampions[];

  // 모든 고유 태그 추출
  const allTags = Array.from(
    new Set(champions.flatMap((champion) => champion.tags))
  );

  return { champions, allTags };
}
