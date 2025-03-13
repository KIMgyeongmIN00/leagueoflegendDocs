"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div className="container py-12 flex flex-col items-center justify-center text-center space-y-6">
      <h2 className="text-3xl font-bold">
        챔피언 정보를 불러오는 중 오류가 발생했습니다
      </h2>
      <p className="text-muted-foreground max-w-md">
        잠시 후 다시 시도하거나 챔피언의 이름이 맞는지 확인해보세요.
      </p>
      <div className="flex gap-4">
        <Button
          className="hover:bg-gray-700"
          onClick={() => router.push("/champions")}
        >
          챔피언 목록으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
