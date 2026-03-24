import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "AI Logo Generator - Deep Vortex AI | Create Professional Logos from Text",
  description: "Create stunning AI-generated logos from text descriptions. Professional quality, unique designs, instant results. Part of the Deep Vortex AI creative ecosystem.",
  keywords: "AI logo generator, text to logo, AI logo design, logo creation, Deep Vortex AI, Ideogram, AI tools, generate logos from text, AI logo maker",
  authors: [{ name: "Deep Vortex AI" }],
  creator: "Deep Vortex AI",
  publisher: "Deep Vortex AI",
  robots: "index, follow, max-image-preview:large",
  verification: {
    google: "76BAsq1e-Ol7tA8HmVLi9LgMDXpjyBIQvdAx6bZXF7Q",
  },
  metadataBase: new URL("https://logo.deepvortexai.com"),
  alternates: {
    canonical: "https://logo.deepvortexai.com",
  },
  openGraph: {
    type: "website",
    url: "https://logo.deepvortexai.com",
    title: "AI Logo Generator - Deep Vortex AI",
    description: "Create stunning AI-generated logos from text. Professional quality, unique designs, instant results.",
    siteName: "Deep Vortex AI",
    locale: "en_US",
    images: [{ url: "https://logo.deepvortexai.com/deepgoldremoveetiny.png", width: 512, height: 512, alt: "Deep Vortex AI Logo Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deepvortexart",
    creator: "@deepvortexart",
    title: "AI Logo Generator - Deep Vortex AI",
    description: "Create stunning AI-generated logos from text. Professional quality, instant results.",
    images: ["https://logo.deepvortexai.com/deepgoldremoveetiny.png"],
  },
  icons: {
    icon: [
      { url: "https://logo.deepvortexai.com/favicon.ico?v=4", sizes: "any" },
      { url: "https://logo.deepvortexai.com/favicon.svg?v=4", type: "image/svg+xml" },
    ],
    apple: "https://logo.deepvortexai.com/apple-touch-icon.png?v=4",
  },
  other: {
    "theme-color": "#D4AF37",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Deep Vortex AI",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "application-name": "Deep Vortex AI Logo Generator",
    "ai-content-declaration": "AI-powered creative tools",
    "perplexity-verification": "deepvortexai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="llms" href="/llms.txt" type="text/plain" />
        <meta name="revisit-after" content="3 days" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://replicate.delivery" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Deep Vortex AI Logo Generator",
              "description": "Create stunning AI-generated logos from text descriptions with professional quality.",
              "url": "https://logo.deepvortexai.com",
              "image": "https://logo.deepvortexai.com/deepgoldremoveetiny.png",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "4.99",
                "highPrice": "99.99",
                "offerCount": "5"
              },
              "creator": {
                "@type": "Organization",
                "name": "Deep Vortex AI",
                "url": "https://deepvortexai.com",
                "sameAs": [
                  "https://www.tiktok.com/@deepvortexai",
                  "https://x.com/deepvortexart",
                  "https://deepvortexai.quora.com/"
                ]
              },
              "featureList": [
                "Text to Logo Generation",
                "Multiple Aspect Ratios",
                "AI-Powered with Ideogram V2",
                "Instant Download",
                "Favorites Gallery"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
