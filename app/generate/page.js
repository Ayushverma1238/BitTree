import { Suspense } from "react";
import GenerateClient from "@/app/generate/GenerateClient";

export default function Page({ searchParams }) {
  const handle = searchParams?.handle || "";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateClient handle={handle} />
    </Suspense>
  );
}
