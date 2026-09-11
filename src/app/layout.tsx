import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteAtmosphere } from "@/components/site-atmosphere";
import { isValidGaMeasurementId } from "@/lib/analytics";
import { organizationJsonLd } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
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
const configuredGaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const gaMeasurementId = isValidGaMeasurementId(configuredGaMeasurementId)
  ? configuredGaMeasurementId
  : undefined;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const title = "Cyvexly Studio — Websites built to make your business unmistakable";
const description =
  "Cyvexly Studio is an independent, remote web design and development studio. Describe your project and get a proposal, custom design, and launch-ready website.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // Only rendered once the Owner supplies a real Google Search Console
  // verification value (GOOGLE_SITE_VERIFICATION) — no placeholder tag.
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0f66e0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="site-root min-h-full flex flex-col bg-arctic-mist text-midnight-slate">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteAtmosphere />
        {children}
        {gaMeasurementId && <GoogleAnalytics measurementId={gaMeasurementId} />}
      </body>
    </html>
  );
}
