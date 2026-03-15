import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bright Fox Dayhome | Licensed Day Home in Nolan Hill, Calgary",
    template: "%s | Bright Fox Dayhome",
  },
  description:
    "Alberta Approved Family Day Home in Nolan Hill, NW Calgary. Infant care, toddler care, and sibling enrolment. Open 6:30 AM. From $326.25/mo with subsidy.",
  keywords: [
    "dayhome Nolan Hill",
    "daycare Calgary NW",
    "infant daycare Calgary",
    "family day home Calgary",
    "childcare Nolan Hill",
    "Alberta approved dayhome",
  ],
  openGraph: {
    title: "Bright Fox Dayhome | Licensed Day Home in Nolan Hill, Calgary",
    description:
      "Alberta Approved Family Day Home in Nolan Hill, NW Calgary. Infant care, toddler care, and sibling enrolment available.",
    url: "https://brightfoxdayhome.ca",
    siteName: "Bright Fox Dayhome",
    locale: "en_CA",
    type: "website",
    images: ["/images/social.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://brightfoxdayhome.ca"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="antialiased">
        {gtmId && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
