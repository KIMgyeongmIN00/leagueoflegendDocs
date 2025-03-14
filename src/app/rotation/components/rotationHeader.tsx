"use client";

import { RotateCw } from "lucide-react";

export function RotationHeader() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight flex items-center">
        <RotateCw className="mr-2 h-8 w-8 text-blue-500" />
        이번 주 무료 챔피언 로테이션
      </h1>
      <p className="text-muted-foreground mt-2">
        매주 화요일마다 업데이트되는 무료 플레이 챔피언 목록입니다.
      </p>
    </div>
  );
}
