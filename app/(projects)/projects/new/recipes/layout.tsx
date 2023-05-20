import { RootLayoutProps } from "@/app/layout";
import React from "react";
import { RootBreadCrumb } from "@/components/client-nav";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="mx-auto h-full max-w-7xl px-4">
      <h1 className="font-heading text-4xl">Recipes</h1>
      <RootBreadCrumb
        rootHref={"/projects/new/recipes"}
        rootName="Recipes"
        className="py-2"
      />
      <main className="py-4">{children}</main>
    </div>
  );
}
