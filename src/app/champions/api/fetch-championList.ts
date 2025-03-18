import { fetchLatestVersion } from "@/app/api/fetch-version";
import { ApiChampions } from "@/lib/types";

export async function fetchChampionList() {
  const version = await fetchLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    { next: { revalidate: 60000 } }
  );
  const data = await response.json();
  const champions = Object.values(data.data) as ApiChampions[];

  return champions;
}
