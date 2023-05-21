import { RootLayoutProps } from "@/app/layout";
import React from "react";
import DynamicBreadCrumb, { MainNav } from "@/components/client-nav";
import { projectConfig } from "@/config/projects";
import { marketingConfig } from "@/config/marketing";
import { SiteFooter } from "@/components/site-footer";

export default function RootLayout({ children }: RootLayoutProps) {
  const recipes = projectConfig.projectLinks[0];
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <div className="flex-1">
        <div className="mx-auto h-full max-w-7xl px-4">
          <h1 className="font-heading text-4xl">Recipes</h1>
          <DynamicBreadCrumb
            className="py-2"
            rootHref={recipes.links?.newHref ?? "/"}
            rootName="Recipes"
          />
          <main className="py-4">{children}</main>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
