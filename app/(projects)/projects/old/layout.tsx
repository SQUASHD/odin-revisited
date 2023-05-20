import { MainNav } from "@/components/client-nav";
import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={docsConfig.mainNav}>
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </MainNav>
          </div>
        </header>
        {children}
      </div>
    </>
  );
}
