import { RootLayoutProps } from "@/app/layout";
import { MainNav } from "@/components/client-nav";
import { marketingConfig } from "@/config/marketing";
import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { DocsSearch } from "@/components/search";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={marketingConfig.mainNav} />
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0"></div>
            <nav className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
    </div>
  );
}
