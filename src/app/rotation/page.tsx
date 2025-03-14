"use client";

import { Separator } from "@/components/ui/separator";
import { RotationHeader } from "./components/rotationHeader";
import { RotationChampionList } from "./components/rotationList";
import { useGetFreeChampionList } from "./utils/hooks/useFetchFreeChampionList";

export default function RotationPage() {
  const { champions } = useGetFreeChampionList();
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
