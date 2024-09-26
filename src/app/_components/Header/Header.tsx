import LangSwitcher from "@/app/_components/Header/LangSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavList from "./NavList";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function Header() {
  const t = useTranslations("Header.Logo");

  {
    return (
      <div className="flex p-4 w-full items-center dark:text-white dark:bg-black">
        <h1 className="font-black lg:w-full text-2xl">{t("title")}</h1>
        <div className="flex justify-end w-full gap-4 items-center">
          <div className="hidden lg:flex">
            <NavList flexDirection="row" />
          </div>
          <Button className="rounded-full dark:bg-white">
            <Link href="#reservation">{t("reservation")}</Link>
          </Button>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="w-[170px] dark:text-white">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-between h-full py-4 dark:text-white">
                  <NavList flexDirection="col" />
                  <div className="space-y-4">
                    <LangSwitcher />
                    <ThemeSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex gap-4">
            <LangSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
