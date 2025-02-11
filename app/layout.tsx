import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppProviders } from "@/components/providers/AppProviders"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScrapeFlow",
  description: "ScrapeFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html lang="en">
        <body className={inter.className}>
          <AppProviders>{children}</AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
