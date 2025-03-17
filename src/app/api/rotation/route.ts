import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export async function GET() {
  const rotationResponse = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey || "",
      },
    }
  );

  const rotationData = await rotationResponse.json();

  const rotationChampionIds: number[] = rotationData.freeChampionIds;

  return NextResponse.json(rotationChampionIds);
}
