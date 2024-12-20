import type { Metadata } from "next";
import "./globals.css";
import { Charm, Newsreader, Tangerine } from "next/font/google";
import Header from "./components/common/Header";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font--tangerine",
});

const charm = Charm({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font--charm",
});

const newsReader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font--newsreader",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tangerine.variable} ${charm.variable} ${newsReader.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
