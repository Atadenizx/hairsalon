import "./globals.css";
import { getTranslations } from "next-intl/server";
import { Playfair_Display, Source_Sans_3 } from "@next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3",
});

export default async function RootLayout({
  children,
  params: { locale }, // Make sure to receive the locale here
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Set the request locale
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
