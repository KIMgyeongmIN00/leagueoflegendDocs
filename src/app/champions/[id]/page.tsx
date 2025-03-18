"use server";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Swords, Wand2, Brain } from "lucide-react";
import { fetchLatestVersion } from "@/app/api/fetch-version";
import { removeHtmlTags } from "@/app/items/utils/removeHtmlTags";
import { Progress } from "@/components/ui/progress";
import { fetchChampionData } from "../api/fetch-champion-detail";
import Image from "next/image";
import { Champion, Spell } from "@/lib/types";

export default async function ChampionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const version: string = await fetchLatestVersion();

  const champion: Champion = await fetchChampionData(params.id);

  const spells = champion.spells || [];
  const passive = champion.passive || {
    name: "패시브 정보 없음",
    description: "패시브 정보를 가져오지 못했습니다.",
    image: { full: "placeholder.png" },
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/0 to-background/1 z-10"></div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>

      <div className="relative z-10 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  className="w-full h-auto"
                  width={1028}
                  height={1028}
                />
              </div>

              <div className="mt-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl font-bold">{champion.name}</h1>
                </div>
                <p className="text-lg mb-4">{champion.title}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="p-1 bg-orange-500/20">
                      <Swords className="h-4 w-4" />
                    </Badge>
                    <div>
                      <p className="text-sm">공격력</p>
                      <Progress
                        value={champion.info.attack * 10}
                        className="mt-2 h-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="p-1 bg-blue-500/20">
                      <Shield className="h-4 w-4" />
                    </Badge>
                    <div>
                      <p className="text-sm">방어력</p>
                      <Progress
                        value={champion.info.defense * 10}
                        className="mt-2 h-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="p-1 bg-purple-500/20">
                      <Wand2 className="h-4 w-4" />
                    </Badge>
                    <div>
                      <p className="text-sm">주문력</p>
                      <Progress
                        value={champion.info.magic * 10}
                        className="mt-2 h-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="p-1 bg-yellow-500/20">
                      <Brain className="h-4 w-4" />
                    </Badge>
                    <div>
                      <p className="text-sm">난이도</p>
                      <Progress
                        value={champion.info.difficulty * 10}
                        className="mt-2 h-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">챔피언 소개</h2>
                <p className="text-lg leading-relaxed">
                  {champion.lore || champion.blurb}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">챔피언 스킬</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-black/30 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passive.image.full}`}
                        alt="패시브 스킬"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">{passive.name}</h3>
                        <Badge>패시브</Badge>
                      </div>
                      <p className="mt-2">
                        {removeHtmlTags(passive.description)}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-white/10" />
                  {spells.map((spell: Spell, index: number) => {
                    const skillKeys = ["Q", "W", "E", "R"];
                    return (
                      <div key={index}>
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-black/30 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${spell.image.full}`}
                              alt={`${skillKeys[index]} 스킬`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold">
                                {spell.name}
                              </h3>
                              <Badge>{skillKeys[index]}</Badge>
                            </div>
                            <p className="mt-2">
                              {removeHtmlTags(spell.description)}
                            </p>
                          </div>
                        </div>
                        {index < spells.length - 1 && (
                          <Separator className="bg-white/10" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
