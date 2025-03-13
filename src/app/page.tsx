import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12 py-6">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700">
            롤 도감
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            챔피언 정보, 아이템 가이드, 그리고 당신의 전적을 한눈에 확인하세요.
          </p>
          <div className="space-x-4">
            <Link href="/champions">
              <Button className="hover:bg-gray-700">
                챔피언 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/items">
              <Button variant="outline">
                아이템 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
