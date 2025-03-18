import { fetchLatestVersion } from "@/app/api/fetch-version";
import { ApiItem, ItemPageLogicResult } from "@/lib/types";

export async function fetchItemList(): Promise<ItemPageLogicResult> {
  const version: string = await fetchLatestVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );
  const { data } = await res.json();
  const items = Object.entries<ApiItem>(data).map(([id, item]) => ({
    ...item,
    id,
  }));

  return { version, items };
}
