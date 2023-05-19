import { RootLayoutProps } from "@/app/layout";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className="flex h-full w-screen items-center justify-center">
      {children}
    </main>
  );
}
