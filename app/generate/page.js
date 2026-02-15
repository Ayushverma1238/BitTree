import GenerateClient from "@/components/GenerateClient";

export default function Page({ searchParams }) {
  const handle = searchParams?.handle || "";
  return <GenerateClient handle={handle} />;
}
