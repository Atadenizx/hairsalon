import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Promotion() {
  const t = useTranslations("HomePage.promotion");

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[150px] border-black border dark:border-white shadow-lg sm:w-[250px] bg-white text-black dark:bg-black dark:text-white px-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("headline")}</AccordionTrigger>
        <AccordionContent className="p-4 flex flex-col gap-4">
          <p className="text-xs sm:text-sm lg:text-base">{t("description")}</p>
          <Link
            href="#reservation"
            className="bg-black text-white dark:bg-white dark:text-black text-center p-2 rounded-full"
          >
            <h2>{t("button")}</h2>
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
