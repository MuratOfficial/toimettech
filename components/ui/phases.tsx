import React, { useState } from "react";

import {
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";
import { Element } from "react-scroll";
import { useTranslations } from "next-intl";
import {
  Boxes,
  PencilRuler,
  PhoneCall,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";

function Phases() {
  const t = useTranslations("Phases");
  return (
    <section className="h-max w-full  justify-center items-center pb-36 lg:p-16 xs:p-8 overflow-x-hidden relative">
      <Image
        alt="cone"
        className="absolute lg:right-20 sm:top-[1100px] xs:collapse hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="/3.png"
      />

      <Element name="phases">
        <AnimateScrollDownHorizontalLeft>
          <p className="text-right drop-shadow-xl uppercase text-neutral-800 lg:text-7xl xs:text-5xl py-4 font-semibold">
            {t("header")}
          </p>
        </AnimateScrollDownHorizontalLeft>
        <AnimateScrollDownHorizontalLeft>
          <p className="text-right uppercase text-neutral-800 lg:text-2xl xs:text-xl py-4 font-semibold">
            {t("description")}
          </p>
        </AnimateScrollDownHorizontalLeft>
      </Element>

      <div className="flex flex-row py-16 w-full h-full justify-center lg:gap-x-8 xs:gap-x-4 sm:gap-x-4">
        <div className=" flex flex-col items-end">
          <p className="h-[180px] flex flex-row gap-x-4 items-center uppercase lg:text-2xl xs:text-xl sm:xl font-semibold text-violet-500">
            <PhoneCall size={48} /> {t("phase1")}
          </p>
          <div className="h-[180px] lg:w-[520px] xs:w-[200px] bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-xl text-center lg:text-md sm:text-sm xs:text-xs lg:p-6 xs:p-2 text-violet-700">
            {t("text2")}
          </div>
          <p className="h-[180px] flex flex-row gap-x-4 items-center uppercase lg:text-2xl xs:text-xl sm:xl font-semibold text-violet-500">
            <Boxes size={48} />
            {t("phase3")}
          </p>
          <div className="h-[180px] lg:w-[520px] xs:w-[200px] bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-xl text-center lg:text-md sm:text-sm xs:text-xs lg:p-6 xs:p-2 text-violet-700">
            {t("text4")}
          </div>
          <p className="h-[180px] flex flex-row gap-x-4 items-center uppercase lg:text-2xl xs:text-xl sm:xl font-semibold text-violet-500">
            <Rocket size={48} />
            {t("phase5")}
          </p>
        </div>
        <div className="w-4 h-[730px] mt-[80px] rounded-lg  bg-violet-500  items-center flex flex-col relative">
          <div className="rounded-full  w-5 h-5 bg-violet-900 border-2 border-violet-500 absolute top-0" />
          <div className="rounded-full  w-5 h-5 bg-violet-900 border-2 border-violet-500 absolute top-[180px]" />
          <div className="rounded-full  w-5 h-5 bg-violet-900 border-2 border-violet-500 absolute top-[360px]" />
          <div className="rounded-full  w-5 h-5 bg-violet-900 border-2 border-violet-500 absolute top-[540px]" />
          <div className="rounded-full  w-5 h-5 bg-violet-900 border-2 border-violet-500 absolute top-[720px]" />
        </div>
        <div className=" flex flex-col items-start">
          <div className="h-[180px] lg:w-[520px] xs:w-[200px] bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-xl text-center lg:text-md sm:text-sm xs:text-xs lg:p-6 xs:p-2 text-violet-700">
            {t("text1")}
          </div>
          <p className="h-[180px] flex flex-row gap-x-4 items-center uppercase lg:text-2xl xs:text-xl sm:xl font-semibold text-violet-500">
            <PencilRuler size={48} />
            {t("phase2")}
          </p>
          <div className="h-[180px] lg:w-[520px] xs:w-[200px] bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-xl text-center lg:text-md sm:text-sm xs:text-xs lg:p-6 xs:p-2 text-violet-700">
            {t("text3")}
          </div>
          <p className="h-[180px] flex flex-row gap-x-4 items-center uppercase lg:text-2xl xs:text-xl sm:xl font-semibold text-violet-500">
            <Terminal size={48} /> {t("phase4")}
          </p>
          <div className="h-[180px] lg:w-[520px] xs:w-[200px] bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-xl text-center lg:text-md sm:text-sm xs:text-xs lg:p-6 xs:p-2 text-violet-700">
            {t("text5")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phases;
