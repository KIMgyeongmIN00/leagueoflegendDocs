"use client";

import { ApiChampions } from "@/app/champions/types";
import { useEffect, useState } from "react";
import { fetchRotationChampions } from "../action";

export function useGetFreeChampionList() {
  const [champions, setChampions] = useState<ApiChampions[]>([]);

  useEffect(() => {
    async function getFreeChampions() {
      const { freeChampionIds, allChampions } = await fetchRotationChampions();

      const rotationChampions = allChampions.filter((champion) =>
        freeChampionIds.includes(parseInt(champion.key))
      );

      const sortedChampions = [...rotationChampions].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );

      setChampions(sortedChampions);
    }

    getFreeChampions();
  }, []);

  return { champions };
}
