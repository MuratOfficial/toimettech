import "./globals.css";

import { Inter } from "next/font/google";
// Supports weights 400-800
import "@fontsource-variable/podkova";
import "@fontsource-variable/montserrat";
import Navbar from "@/components/ui/navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Favicon from "@/public/favicon.ico";
import Script from "next/script";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "kk" }, { locale: "ru" }];
}

export const metadata: Metadata = {
  title: "toimetTech - Создаем самые красивые сайты дешево!",
  description:
    "Создаем сайты, разрабатываем сайты. Цена от 30000 тг. В Казахстане, Шымкент, Алматы, Астана, Караганда.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="-vrwyp1HYUlrmkMe7vpqkO5K2qSbOJSeVi6dkNFEVDc"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11411015331" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-11411015331');
            gtag('event', 'conversion', {'send_to': 'AW-11411015331/LZwJCK7ou_YYEKONmcEq'});
            
  gtag('event', 'conversion', {'send_to': 'AW-11411015331/zyiFCJvPx_YYEKONmcEq'});
`}
        </Script>
      </head>
      <body className="overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
