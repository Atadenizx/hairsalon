import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../_components/Header/Header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Header />
          </header>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
