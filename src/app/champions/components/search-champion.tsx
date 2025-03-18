"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ChampionSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchQuery);
        router.replace(`${pathname}?${params.toString()}`);
      } else {
        const params = new URLSearchParams(searchParams);
        params.delete("search");
        router.replace(
          pathname + (params.toString() ? `?${params.toString()}` : "")
        );
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, router, pathname, searchParams]);

  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="챔피언 검색..."
        className="pl-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
