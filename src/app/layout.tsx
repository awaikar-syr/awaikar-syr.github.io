import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";  
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'; // Import next/script

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ankit Waikar's Portfolio",
  description: "Business Analyst | Data Analyst | Product Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager script */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-N2S4RYH6KJ"
          strategy="afterInteractive" // Ensures it loads after the page is interactive
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N2S4RYH6KJ');
          `}
        </Script>
      </head>
      <body 
        className={twMerge(
          inter.variable, 
          calistoga.variable, 
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
          {children}
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
