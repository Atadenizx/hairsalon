"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function LookbookGrid() {
  const [pic, setPic] = useState(1);

  return (
    <div className="flex gap-4 items-center">
      <div className="drop-shadow-lg">
        <Image
          src={`/HomePage/lookbook-${pic}.jpg`}
          alt="women picture"
          width={248}
          height={128}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="opacity-50" onClick={() => setPic(3)}>
          <Image
            src="/HomePage/lookbook-3.jpg"
            alt="women picture"
            width={88}
            height={44}
            quality={50}
            className="rounded-2xl"
          />
        </div>
        <div className="opacity-50" onClick={() => setPic(1)}>
          <Image
            src="/HomePage/lookbook-1.jpg"
            alt="women picture"
            width={88}
            height={44}
            quality={50}
            className="rounded-2xl"
          />
        </div>
        <div className="opacity-50" onClick={() => setPic(2)}>
          <Image
            src="/HomePage/lookbook-2.jpg"
            alt="women picture"
            width={88}
            height={44}
            quality={50}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
