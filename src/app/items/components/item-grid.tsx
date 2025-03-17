import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Coins, Info } from "lucide-react";
import { ItemGridProps } from "../types";
import { categoryFilter } from "../utils/filterItems";
import Image from "next/image";
import { removeHtmlTags } from "../utils/removeHtmlTags";
import { fetchItemList } from "../api/fetchItemList";

export async function ItemGrid({ category, items }: ItemGridProps) {
  const { filteredItems } = categoryFilter(category, items);
  const { version } = await fetchItemList();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredItems.map((item) => (
        <Card key={item.id} className="overflow-hidden h-full flex flex-col">
          <CardHeader className="p-4 pb-2 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                    alt={removeHtmlTags(item.name)}
                    className="w-full h-full object-cover"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <CardTitle className="text-base">
                    {removeHtmlTags(item.name)}
                  </CardTitle>
                  <div className="flex items-center mt-1">
                    <Coins className="w-4 h-4 mr-1" />
                    <span className="text-sm text-yellow-500 font-medium">
                      {item.gold.total}
                    </span>
                  </div>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      {removeHtmlTags(item.description)}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.entries(item.stats).map(([key, value], index) => {
                let statName = key;
                if (key === "FlatMovementSpeedMod")
                  statName = `+${value} 이동 속도`;
                else if (key === "FlatPhysicalDamageMod")
                  statName = `+${value} 공격력`;
                else if (key === "FlatMagicDamageMod")
                  statName = `+${value} 주문력`;
                else if (key === "FlatArmorMod") statName = `+${value} 방어력`;
                else if (key === "FlatSpellBlockMod")
                  statName = `+${value} 마법 저항력`;
                else if (key === "FlatHPPoolMod") statName = `+${value} 체력`;
                else if (key === "FlatMPPoolMod") statName = `+${value} 마나`;
                else if (key === "FlatHPRegenMod")
                  statName = `+${value * 100}% 체력 재생`;
                else if (key === "FlatMPRegenMod")
                  statName = `+${value * 100}% 마나 재생`;
                else if (key === "PercentAttackSpeedMod")
                  statName = `+${value * 100}% 공격 속도`;
                else if (key === "PercentLifeStealMod")
                  statName = `+${value * 100}% 생명력 흡수`;
                else if (key === "FlatCritChanceMod")
                  statName = `+${value * 100}% 치명타 확률`;
                else if (key === "PercentMovementSpeedMod")
                  statName = `+${value * 100}% 이동 속도`;
                else statName = `${key}: ${value}`;

                return (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-secondary/30"
                  >
                    {statName}
                  </Badge>
                );
              })}
            </div>
            <CardDescription className="mt-3 line-clamp-3 text-xs">
              {removeHtmlTags(item.plaintext) ||
                removeHtmlTags(item.description)}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
