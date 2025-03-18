"use client";

import { Separator } from "@/components/ui/separator";
import { RotationHeader } from "./components/rotation-header";
import { RotationChampionList } from "./components/rotation-list";

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
