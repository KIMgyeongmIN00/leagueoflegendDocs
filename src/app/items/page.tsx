import { ItemGrid } from "@/components/item-grid";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchLatestVersion } from "@/lib/api/fetch-version";

interface ItemType {
  id: string;
  name: string;
  plaintext: string;
  gold: {
    base: number;
  };

  tags: string[];
}

export default async function ItemsPage() {
  const version = await fetchLatestVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    { cache: "force-cache" }
  );
  const { data } = await res.json();
  const items = Object.entries<Record<string, ItemType>>(data).map(
    ([id, item]) => ({
      id,
      ...item,
    })
  );

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">아이템 목록</h1>
        <p className="text-muted-foreground mt-2">
          소환사의 협곡에서 사용할 수 있는 모든 아이템을 확인하세요.
        </p>
      </div>

      <Separator />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="attack">공격력</TabsTrigger>
          <TabsTrigger value="magic">주문력</TabsTrigger>
          <TabsTrigger value="defense">방어력</TabsTrigger>
          <TabsTrigger value="support">서포터</TabsTrigger>
          <TabsTrigger value="boots">신발</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <ItemGrid items={items} category="all" />
        </TabsContent>

        <TabsContent value="attack" className="mt-0">
          <ItemGrid items={items} category="attack" />
        </TabsContent>

        <TabsContent value="magic" className="mt-0">
          <ItemGrid items={items} category="magic" />
        </TabsContent>

        <TabsContent value="defense" className="mt-0">
          <ItemGrid items={items} category="defense" />
        </TabsContent>

        <TabsContent value="support" className="mt-0">
          <ItemGrid items={items} category="support" />
        </TabsContent>

        <TabsContent value="boots" className="mt-0">
          <ItemGrid items={items} category="boots" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
