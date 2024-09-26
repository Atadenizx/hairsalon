"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Palette, Scissors } from "lucide-react";

export default function ServicesList() {
  const t = useTranslations("HomePage.services");

  return (
    <div className="flex flex-col gap-4 lg:gap-8 lg:mb-8 items-center text-center">
      <h1 className="text-2xl font-bold">{t("headline")}</h1>
      <p className="dark:text-gray-200">{t("description")}</p>

      <ul className="space-y-4 lg:flex-row lg:flex lg:gap-4 lg:items-baseline lg:justify-between">
        <li className="flex dark:text-gray-200 lg:flex-col items-center gap-4">
          <Scissors className=" lg:block" />
          <h2 className="text-lg"> {t("list.list1")}</h2>
        </li>
        <li className="flex dark:text-gray-200 lg:flex-col items-center gap-4">
          <Palette className=" lg:block" />
          <h2 className="text-lg"> {t("list.list2")}</h2>
        </li>
        <li className="flex text-right dark:text-gray-200 lg:flex-col items-center gap-4">
          <Scissors className=" lg:block" />
          <h2 className="text-lg"> {t("list.list3")}</h2>
        </li>
        <li className="flex dark:text-gray-200 lg:flex-col items-center gap-4">
          <Scissors className=" lg:block" />
          <h2 className="text-lg"> {t("list.list4")}</h2>
        </li>
      </ul>
    </div>
  );
}
