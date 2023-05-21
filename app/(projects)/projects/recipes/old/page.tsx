"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RecipesLandingPage() {
  const pathname = usePathname();

  return (
    <>
      <h1>Odin Recipes</h1>
      <Link href={`${pathname}/lasagna`}>Lasagna</Link>
      <Link href={`${pathname}/risotto`}>Risotto</Link>
    </>
  );
}
