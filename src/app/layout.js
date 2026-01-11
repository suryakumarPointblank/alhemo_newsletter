import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
