"use server";

import { DetailChampion } from "../types";
import Image from "next/image";
import { translateTag } from "../utils/translateTag";
import { fetchChampionDetail } from "../utils/fetchChampionDetail";

export default async function ChampionDetailPage({ params }: DetailChampion) {
  const { champion } = await fetchChampionDetail(params.id);

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={champion.name}
              className="w-full h-auto"
              width={512}
              height={512}
            />
          </div>
        </div>

        <div className="md:w-2/3 space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{champion.name}</h1>
            <p className="text-xl text-muted-foreground">{champion.title}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                타입
              </h3>
              <p className="text-lg">
                {champion.tags.map((tag) => translateTag(tag)).join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                자원
              </h3>
              <p className="text-lg">{champion.partype}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                공격력
              </h3>
              <p className="text-lg">{champion.info.attack}/10</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                방어력
              </h3>
              <p className="text-lg">{champion.info.defense}/10</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">챔피언 소개</h2>
            <p className="text-lg leading-relaxed">{champion.blurb}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                체력
              </h3>
              <p className="text-lg">
                {champion.stats.hp} (+{champion.stats.hpperlevel})
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                공격 데미지
              </h3>
              <p className="text-lg">
                {champion.stats.attackdamage} (+
                {champion.stats.attackdamageperlevel})
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                방어력
              </h3>
              <p className="text-lg">
                {champion.stats.armor} (+{champion.stats.armorperlevel})
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                마법 저항력
              </h3>
              <p className="text-lg">
                {champion.stats.spellblock} (+
                {champion.stats.spellblockperlevel})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
