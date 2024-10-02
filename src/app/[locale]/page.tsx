import { useTranslations } from "next-intl";
import Image from "next/image";
import Promotion from "../_components/HomePage/Promotion";
import { Button } from "@/components/ui/button";
import ServicesList from "../_components/HomePage/Services";
import Stylists from "../_components/HomePage/Stylists";
import LookbookGrid from "../_components/HomePage/LookbookGrid";
import Reservation from "@/app/_components/HomePage/Reservation";
import Footer from "../_components/HomePage/Footer";
import { unstable_setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <div className="dark:bg-black dark:text-white min-h-screen overflow-y-auto">
      <main className="relative">
        <section id="home" className="w-full relative h-[33vh] lg:h-[66vh]">
          <div className="absolute inset-0">
            <Image
              src="/HomePage/landing-1.jpg"
              alt="Hairdresser"
              fill
              objectFit="cover"
              priority
            />
          </div>
        </section>
        <section className="hidden lg:flex lg:flex-col lg:items-center text-center bg-black text-white p-4 gap-4 dark:text-white">
          <h2>{t("promotion.headline")}</h2>
          <p>{t("promotion.description")}</p>
          <Button
            variant="outline"
            className="w-fit bg-black text-white dark:bg-white dark:text-black"
          >
            Reservation
          </Button>
        </section>
        <div
          className="z-10 absolute left-6 lg:hidden"
          style={{ top: "calc(33vh - 40px)" }}
        >
          <Promotion />
        </div>
        <section
          id="services"
          className="pt-14 sm:pt-4 p-4 lg:mt-0 border-y border-white bg-white text-black dark:text-white dark:bg-black"
        >
          <ServicesList />
        </section>
        <section id="stylists" className="dark:bg-black border-b border-white">
          <Stylists />
        </section>
        <section
          id="lookbook"
          className="w-full flex flex-col justify-center items-center gap-4 p-4 overflow-x-hidden bg-white text-black dark:bg-black dark:text-white border-b border-white"
        >
          <h1 className="text-2xl font-bold text-center">Lookbook</h1>
          <div className="w-fit">
            <LookbookGrid />
          </div>
        </section>
        <section id="reservation" className="border-b border-white">
          <Reservation />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
