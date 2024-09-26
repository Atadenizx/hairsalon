"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header.LangSwitcher");

  function handleLocaleChange(newLocale: string): void {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="dark:text-white dark:border-white border border-black"
          variant="outline"
        >
          {t("Drpdwnmnutrgger")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-black">
        <DropdownMenuLabel>{t("Drpdwnmnulbl")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={locale === "en"}
          onClick={() => handleLocaleChange("en")}
        >
          {t("Drpdwnmnuchckbxitem1")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === "cs"}
          onClick={() => handleLocaleChange("cs")}
        >
          {t("Drpdwnmnuchckbxitem2")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
