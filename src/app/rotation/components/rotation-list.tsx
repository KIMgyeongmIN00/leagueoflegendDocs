import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useFetchFreeChampionList } from "../hooks/use-fetch-free-champion-list";

export function RotationChampionList() {
  const { champions } = useFetchFreeChampionList();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {champions.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-b from-background to-secondary/10">
            <div className="relative">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                className="w-full aspect-square object-cover object-center"
                width={256}
                height={256}
                priority
              />
              <div className="absolute top-0 right-0 m-2">
                <Badge className="bg-blue-500 text-white">무료</Badge>
              </div>
            </div>
            <CardContent className="p-3 text-center">
              <h3 className="font-bold">{champion.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {champion.title}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
