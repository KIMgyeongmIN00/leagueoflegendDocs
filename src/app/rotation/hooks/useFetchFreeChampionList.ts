"use client";

import { ApiChampions } from "@/app/champions/types";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export function useGetFreeChampionList() {
  const [champions, setChampions] = useState<ApiChampions[]>([]);

  const { data: rotationList } = useQuery<number[], Error>({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      if (!res.ok) throw new Error("Failed to fetch rotation list");
      return res.json();
    },
  });

  const { data: allChampions } = useQuery<ApiChampions[], Error>({
    queryKey: ["champion"],
    queryFn: async () => {
      const res = await fetch("/api/champion");
      if (!res.ok) throw new Error("Failed to fetch champion list");
      return res.json();
    },
  });

  useEffect(() => {
    if (rotationList && allChampions) {
      // ✅ 안전한 조건 처리 후 필터링 및 정렬
      const rotationChampions = allChampions.filter((champion) =>
        rotationList.includes(parseInt(champion.key))
      );

      const sortedChampions = [...rotationChampions].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );

      setChampions(sortedChampions);
    }
  }, [rotationList, allChampions]); // ✅ 의존성 배열 추가

  return { champions };
}
