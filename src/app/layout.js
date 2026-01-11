import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alhemo Newsletter - Nemo the Explorer",
  description:
    "Join Nemo on an exciting expedition through Alhemo's interactive newsletter experience. Explore Basecamp Genesis, Into the Wild, Footprints Secured, and more!",
  openGraph: {
    title: "Alhemo Newsletter - Nemo the Explorer",
    description:
      "Join Nemo on an exciting expedition through Alhemo's interactive newsletter experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhemo Newsletter - Nemo the Explorer",
    description:
      "Join Nemo on an exciting expedition through Alhemo's interactive newsletter experience.",
  },
};

const GA_MEASUREMENT_ID = "G-6LL389BWW7";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
