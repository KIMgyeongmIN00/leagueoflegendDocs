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

interface ItemGridProps {
  category: string;
  items: ApiItem[];
}

export interface ApiItem {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from?: string[];
  into?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, number>;
  depth?: number;
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function ItemGrid({ category, items }: ItemGridProps) {
  const filteredItems = items.filter((item) => {
    if (category === "all") return true;
    if (category === "boots") return item.tags.includes("Boots");
    if (category === "attack")
      return item.tags.some((tag) =>
        ["Damage", "CriticalStrike", "AttackSpeed"].includes(tag)
      );
    if (category === "magic")
      return item.tags.some((tag) =>
        ["SpellDamage", "Mana", "ManaRegen"].includes(tag)
      );
    if (category === "defense")
      return item.tags.some((tag) =>
        ["Health", "Armor", "SpellBlock", "HealthRegen"].includes(tag)
      );
    if (category === "support")
      return item.tags.some((tag) =>
        ["Active", "GoldPer", "Vision"].includes(tag)
      );
    return false;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredItems.map((item) => (
        <Card key={item.id} className="overflow-hidden h-full flex flex-col">
          <CardHeader className="p-4 pb-2 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/item/${item.image.full}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-base">{item.name}</CardTitle>
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
                      {stripHtmlTags(item.description)}
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
              {item.plaintext || stripHtmlTags(item.description)}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
