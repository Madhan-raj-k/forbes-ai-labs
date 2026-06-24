import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codeify | AI & Web Development Agency",
  description:
    "Codeify crafts cutting-edge AI solutions and premium web experiences, delivering intelligent digital products for startups and businesses.",
  keywords: [
    "AI development",
    "web development",
    "student agency",
    "Next.js",
    "machine learning",
    "UI/UX design",
  ],
  openGraph: {
    title: "Codeify",
    description: "AI & Web Development Agency",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}