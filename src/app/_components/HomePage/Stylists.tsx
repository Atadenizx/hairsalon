import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Stylists() {
  const t = useTranslations("HomePage.stylists");
  return (
    <div>
      <div className="text-center p-4 space-y-4">
        <h1 className="text-2xl font-bold">{t("headline")}</h1>
        <p className="text-sm lg:text-base dark:text-gray-200">
          {t("description")}
        </p>
      </div>
      <ul className="flex flex-col p-4 md:flex-row md:justify-evenly">
        <li className="flex w-full h-full p-4 md:flex-col md:items-center md:gap-4 md:w-fit ">
          <div className="md:w-fit bg-black">
            <Image
              src="/HomePage/stylist-1.jpg"
              width={128}
              alt="hair stylist"
              height={128}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col pl-2 md:w-fit md:text-center gap-4 justify-center">
            <h2 className="text-lg">{t("list.list1.name")}</h2>
            <p className="break-words dark:text-gray-200 md:text-center w-[128px]">
              {t("list.list1.role")}
            </p>
          </div>
        </li>
        <li className="flex w-full h-full p-4 md:flex-col md:items-center md:gap-4 md:w-fit ">
          <div className="md:w-fit bg-black">
            <Image
              src="/HomePage/stylist-1.jpg"
              width={128}
              alt="hair stylist"
              height={128}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col pl-2 dark:text-gray-200 md:w-fit md:text-center gap-4 justify-center">
            <h2 className="text-lg">{t("list.list2.name")}</h2>
            <p className="break-words md:text-center w-[128px]">
              {t("list.list2.role")}
            </p>
          </div>
        </li>
        <li className="flex w-full h-full p-4 md:flex-col md:items-center md:gap-4 md:w-fit ">
          <div className="md:w-fit bg-black">
            <Image
              src="/HomePage/stylist-1.jpg"
              width={128}
              alt="hair stylist"
              height={128}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col pl-2 dark:text-gray-200 md:w-fit md:text-center gap-4 justify-center">
            <h2 className="text-lg">{t("list.list3.name")}</h2>
            <p className="break-words md:text-center w-[128px]">
              {t("list.list3.role")}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
