import { RootLayoutProps } from "@/app/layout";
import { MainNav } from "@/components/client-nav";
import { SiteFooter } from "@/components/site-footer";
import { projectConfig } from "@/config/projects";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={projectConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}