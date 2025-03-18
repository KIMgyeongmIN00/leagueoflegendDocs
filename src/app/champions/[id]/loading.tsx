import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 z-10"></div>
        <Skeleton className="w-full h-full" />
      </div>

      <div className="relative z-10 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <Skeleton className="w-full aspect-[1/2] rounded-lg" />

              <div className="mt-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <Skeleton className="h-8 w-40" />
                  <div className="flex gap-1">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
                <Skeleton className="h-6 w-48 mb-4" />

                <div className="grid grid-cols-2 gap-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Skeleton className="h-8 w-8 rounded-md" />
                        <div>
                          <Skeleton className="h-3 w-16 mb-1" />
                          <Skeleton className="h-4 w-8" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <Skeleton className="h-8 w-40 mb-4" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-3/4" />
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <Skeleton className="h-8 w-40 mb-6" />

                <div className="space-y-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i}>
                        <div className="flex gap-4">
                          <Skeleton className="w-16 h-16 rounded-md flex-shrink-0" />
                          <div className="w-full">
                            <div className="flex items-center gap-2 mb-2">
                              <Skeleton className="h-6 w-32" />
                              <Skeleton className="h-6 w-16" />
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6 mt-1" />
                          </div>
                        </div>
                        {i < 4 && <Separator className="bg-white/10 my-6" />}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
