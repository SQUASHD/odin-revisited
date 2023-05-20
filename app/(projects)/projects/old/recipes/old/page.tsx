"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export default function RecipesLandingPage() {
  const segment = usePathname();

  return (
    <>
      <h1>Odin Recipes</h1>
      <Link href={`${segment}/lasagna`}>Lasagna</Link>
      <Link href={`${segment}/risotto`}>Risotto</Link>
    </>
  );
}
