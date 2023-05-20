import { RootLayoutProps } from "@/app/layout";
import React from "react";
import DynamicBreadCrumb from "@/components/client-nav";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="mx-auto h-full max-w-7xl px-4">
      <h1 className="font-heading text-4xl">Recipes</h1>
      <DynamicBreadCrumb
        className="py-2"
        rootHref={"/projects/new/recipes"}
        rootName="Recipes"
      />
      <main className="py-4">{children}</main>
    </div>
  );
}
