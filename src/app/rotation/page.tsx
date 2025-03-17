"use client";

import { Separator } from "@/components/ui/separator";
import { RotationHeader } from "./components/rotationHeader";
import { RotationChampionList } from "./components/rotationList";

export default function RotationPage() {
  return (
    <div className="container py-6 space-y-8">
      <RotationHeader />

      <Separator />

      <div>
        <RotationChampionList />
      </div>
    </div>
  );
}
