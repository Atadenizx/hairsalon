import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  flexDirection: string;
};

export default function NavList({ flexDirection }: Props) {
  const t = useTranslations("Header.NavList");

  return (
    <ul className={`gap-4 flex flex-${flexDirection}`}>
      <li>
        <Link href="#home"> {t("home")}</Link>
      </li>
      <li>
        <Link href="#services">{t("services")}</Link>
      </li>
      <li>
        <Link href="#stylists">{t("about")}</Link>
      </li>
      <li>
        <Link href="#lookbook"> {t("lookbook")}</Link>
      </li>
      <li className="lg:hidden">
        <Link href="#reservation"> {t("reservation")}</Link>
      </li>
    </ul>
  );
}
