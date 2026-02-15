import GenerateClient from "@/components/GenerateClient";
export default function Generate({ searchParams }) {
  const handle = searchParams?.handle || "";

  return <GenerateClient handle={handle} />;
}
