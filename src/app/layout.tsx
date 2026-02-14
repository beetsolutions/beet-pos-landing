import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import ToasterContext from "./api/contex/ToasetContex";
import CookieConsent from "@/components/CookieConsent";
import ChunkErrorHandler from "@/components/ChunkErrorHandler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://beetpos.com'),
  title: {
    default: 'BEET POS - Modern Point of Sale System for Restaurants & Retail',
    template: '%s | BEET POS'
  },
  description: 'Transform your business with BEET POS - the modern, cloud-based point of sale system for restaurants, bars, cafes, and retail stores. Easy to use, powerful features, transparent pricing.',
  keywords: ['POS system', 'point of sale', 'restaurant POS', 'retail POS', 'bar POS', 'cafe POS', 'cloud POS', 'BEET POS'],
  authors: [{ name: 'BEET POS' }],
  creator: 'BEET POS',
  publisher: 'BEET POS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beetpos.com',
    siteName: 'BEET POS',
    title: 'BEET POS - Modern Point of Sale System',
    description: 'Transform your business with BEET POS - the modern, cloud-based point of sale system for restaurants, bars, cafes, and retail stores.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BEET POS'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEET POS - Modern Point of Sale System',
    description: 'Transform your business with BEET POS - the modern, cloud-based point of sale system.',
    images: ['/images/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>
      <body className="font-poppins" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <ChunkErrorHandler />
          <ToasterContext />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
