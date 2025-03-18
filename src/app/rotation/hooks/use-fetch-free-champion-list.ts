"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiChampions } from "@/lib/types";

export function useFetchFreeChampionList() {
  const [champions, setChampions] = useState<ApiChampions[]>([]);

  const { data: rotationList } = useQuery<number[], Error>({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      if (!res.ok) throw new Error();
      return res.json();
    },
  });

  const { data: allChampions } = useQuery<ApiChampions[], Error>({
    queryKey: ["champion"],
    queryFn: async () => {
      const res = await fetch("/api/champion");
      if (!res.ok) throw new Error();
      return res.json();
    },
  });

  useEffect(() => {
    if (rotationList && allChampions) {
      const rotationChampions = allChampions.filter((champion) =>
        rotationList.includes(parseInt(champion.key))
      );

      const sortedChampions = [...rotationChampions].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );

      setChampions(sortedChampions);
    }
  }, [rotationList, allChampions]);

  return { champions };
}
