"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();

  return (
    <footer className="w-full bg-white text-black py-8 dark:bg-black dark:text-white">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="text-center p-4">
          <h3 className="text-2xl font-semibold">{t("title")}</h3>
          <p className="mt-2 text-sm">{t("description")}</p>
        </div>
        <Separator className="w-full bg-gray-700 dark:text-black" />
        <div className="flex space-x-4 dark:text-black">
          <Button
            variant="link"
            className="dark:text-white text-black"
            onClick={() => router.push("#about")}
          >
            {t("aboutUs")}
          </Button>
          <Button
            variant="link"
            className="dark:text-white text-black"
            onClick={() => router.push("#services")}
          >
            {t("services")}
          </Button>
          <Button
            variant="link"
            className="dark:text-white text-black"
            onClick={() => router.push("#contact")}
          >
            {t("contact")}
          </Button>
        </div>
        <p className="text-xs text-gray-400">
          &copy; 2024 Elegance Hair Studio
        </p>
      </div>
    </footer>
  );
}
