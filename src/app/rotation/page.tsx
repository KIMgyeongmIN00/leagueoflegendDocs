"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { ApiChampions } from "../champions/types";
import { RotationHeader } from "./components/rotationHeader";
import { RotationChampionList } from "./components/rotationList";
import { fetchLatestVersion } from "../api/fetchVersion";

export default function RotationPage() {
  const [champions, setChampions] = useState<ApiChampions[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  useEffect(() => {
    async function fetchRotationChampions() {
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
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
      );
      const data = await response.json();
      const allChampions = Object.values(data.data) as ApiChampions[];

      const rotationChampions = allChampions.filter((champion) =>
        freeChampionIds.includes(parseInt(champion.key))
      );

      const sortedChampions = [...rotationChampions].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );

      setChampions(sortedChampions);
    }

    fetchRotationChampions();
  }, []);

  return (
    <div className="container py-6 space-y-8">
      <RotationHeader />

      <Separator />

      <div>
        <RotationChampionList champions={champions} />
      </div>
    </div>
  );
}
