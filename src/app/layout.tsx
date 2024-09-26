import "./globals.css";
import { getTranslations } from "next-intl/server";
import { Playfair_Display, Source_Sans_3 } from "@next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose the appropriate weights you want
  variable: "--font-source-sans-3",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("HomePage", locale);

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}
