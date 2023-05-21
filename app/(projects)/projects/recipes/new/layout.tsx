import { RootLayoutProps } from "@/app/layout";
import React from "react";
import DynamicBreadCrumb from "@/components/client-nav";
import { projectConfig } from "@/config/projects";

export default function RootLayout({ children }: RootLayoutProps) {
  const recipes = projectConfig.projectLinks[0];
  return (
    <div className="mx-auto h-full max-w-7xl px-4">
      <h1 className="font-heading text-4xl">Recipes</h1>
      <DynamicBreadCrumb
        className="py-2"
        rootHref={recipes.links?.newHref ?? "/"}
        rootName="Recipes"
      />
      <main className="py-4">{children}</main>
    </div>
  );
}
