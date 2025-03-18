import { NextResponse } from "next/server";
import { fetchLatestVersion } from "../fetch-version";
import { ApiChampions } from "@/lib/types";

export async function GET() {
  const version: string = await fetchLatestVersion();

  const allChampionResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  const allChampionData = await allChampionResponse.json();
  const allChampions = Object.values<ApiChampions>(allChampionData.data);

  return NextResponse.json(allChampions);
}
