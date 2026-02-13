import { Geist, Geist_Mono } from "next/font/google";
import { Play, Roboto } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../providers";
import Header from "@/components/base/header/Header";
import FormSection from "@/components/base/formSection/FormSection";
import Footer from "@/components/base/footer/Footer";

const play = Play({
  variable: "--font-play",
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Мой сайт",
  description: "Юридическая помощь",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${play.variable} ${roboto.variable}`}>
      <body className={` antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <FormSection />
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
