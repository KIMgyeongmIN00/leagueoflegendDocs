import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ItemGridSkeletonProps } from "@/lib/types";

export function ItemGridSkeleton({ count = 8 }: ItemGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className="overflow-hidden h-full flex flex-col">
            <CardHeader className="p-4 pb-2 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton className="w-12 h-12 rounded" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <div className="flex items-center">
                      <Skeleton className="h-4 w-4 rounded-full mr-1" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                </div>
                <Skeleton className="h-4 w-4 rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {Array(3)
                  .fill(0)
                  .map((_, j) => (
                    <Skeleton key={j} className="h-5 w-16 rounded-full" />
                  ))}
              </div>
              <div className="space-y-2 mt-3">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-4/6" />
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Skeleton className="h-3 w-24" />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
