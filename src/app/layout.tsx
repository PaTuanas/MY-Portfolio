import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikSpray = Rubik_Spray_Paint({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-spray",
});

export const metadata: Metadata = {
  title: "Mimi's portfolio",
  description: "The cutest girl in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rubikSpray.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
