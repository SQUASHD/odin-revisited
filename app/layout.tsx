import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@/components/ui/toast";

export const metadata = {
  title: "Odin Revisited",
  description: "Redoing a fullstack curriculum from start to finish",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable
          )}
        >
          {children}
          <ToastProvider />
        </body>
      </html>
    </ClerkProvider>
  );
}
