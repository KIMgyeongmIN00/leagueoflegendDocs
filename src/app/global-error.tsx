"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GlobalError() {
  const router = useRouter();

  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            예상치 못한 오류가 발생하였습니다!
          </h1>

          <Button onClick={() => router.push("/")}>홈으로 이동</Button>
        </div>
      </body>
    </html>
  );
}
