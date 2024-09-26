import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            src={"/HomePage/landing-3.png"}
            width="248"
            height="128"
            alt="woman portrait"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
