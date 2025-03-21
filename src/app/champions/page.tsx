import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChampionSearch } from "./components/search-champion";
import { ChampionGrid } from "./components/champion-grid";
import { translateTag } from "./utils/translate-tag";
import { fetchLatestVersion } from "../api/fetch-version";
import { getChampionTags } from "./utils/get-champion-tags";
import { fetchChampionList } from "./api/fetch-championList";

export default async function ChampionsPage() {
  const version = await fetchLatestVersion();
  const champions = await fetchChampionList();
  const allTags = await getChampionTags();

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold pretty break-keep tracking-tight">
          챔피언 목록
        </h1>
        <p className="text-muted-foreground pretty break-keep mt-2">
          리그 오브 레전드의 모든 챔피언을 확인하고 정보를 살펴보세요.
        </p>
      </div>

      <ChampionSearch />

      <Separator />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">전체</TabsTrigger>
          {allTags.map((tag) => (
            <TabsTrigger key={tag} value={tag}>
              {translateTag(tag)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <ChampionGrid
            initialChampions={champions}
            tag="all"
            version={version}
          />
        </TabsContent>

        {allTags.map((tag) => (
          <TabsContent key={tag} value={tag} className="mt-0">
            <ChampionGrid
              initialChampions={champions}
              tag={tag}
              version={version}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
