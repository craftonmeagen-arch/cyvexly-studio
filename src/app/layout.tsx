import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const metadata: Metadata = {
  title: "Cyvexly Studio — Websites built to make your business unmistakable",
  description:
    "Cyvexly Studio is an independent, remote web design and development studio. Describe your project and get a clear proposal, custom design, and a launch-ready website.",
  robots: {
    index: isIndexable,
    follow: isIndexable,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-arctic-mist text-midnight-slate">
        {children}
      </body>
    </html>
  );
}
