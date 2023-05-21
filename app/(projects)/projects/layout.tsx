import { RootLayoutProps } from "@/app/layout";
import { MainNav } from "@/components/client-nav";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
