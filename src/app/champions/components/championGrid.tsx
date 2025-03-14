"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { ChampionGridProps } from "../types";
import Image from "next/image";
import { getTagColor } from "../utils/setTagColor";
import { translateTag } from "../utils/translateTag";
import { useFilteredChampions } from "../utils/hooks/useFilterChampions";

export function ChampionGrid({
  initialChampions,
  tag,
  version,
}: ChampionGridProps) {
  const { filteredChampions } = useFilteredChampions({ initialChampions, tag });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {filteredChampions.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 hover:scale-[1.02]">
            <div className="aspect-square w-full overflow-hidden bg-gradient-to-b from-secondary/50 to-background relative">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                alt={champion.name}
                className="w-full h-full object-cover object-top transition-transform duration-300"
                width={512}
                height={512}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-1/3" />
              <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
                {champion.tags.map((tag, index) => (
                  <Badge key={index} className={`${getTagColor(tag)}`}>
                    {translateTag(tag)}
                  </Badge>
                ))}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{champion.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {champion.title}
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                <div>
                  <p className="text-muted-foreground mb-1">공격력</p>
                  <Progress
                    value={champion.info.attack * 10}
                    className="h-1.5"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">방어력</p>
                  <Progress
                    value={champion.info.defense * 10}
                    className="h-1.5"
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">난이도</p>
                  <Progress
                    value={champion.info.difficulty * 10}
                    className="h-1.5"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
              {champion.partype}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
