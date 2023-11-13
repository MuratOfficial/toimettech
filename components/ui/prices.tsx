"use client";
import React from "react";
import CardOutline from "./card-outline";
import { AnimateScrollDown } from "../animation/animate-scroll-down";
import AnimateInfiniteHorizontal from "../animation/animate-infinite-horizontal";
import { useTranslations } from "next-intl";
import { Element } from "react-scroll";
import Image from "next/image";

function Prices() {
  const t = useTranslations("Expertise");
  const expertise = [
    {
      days: t("days1"),
      price: t("price1"),
      heading: t("heading1"),
      buttonName: t("button1"),
      description: t("description1"),
    },
    {
      days: t("days2"),
      price: t("price2"),
      heading: t("heading2"),
      buttonName: t("button2"),
      description: t("description2"),
    },
    {
      days: t("days3"),
      price: t("price3"),
      heading: t("heading3"),
      buttonName: t("button3"),
      description: t("description3"),
    },
    {
      days: t("days4"),
      price: t("price4"),
      heading: t("heading4"),
      buttonName: t("button4"),
      description: t("description4"),
    },
  ];

  return (
    <section className="h-full flex flex-col lg:pb-8 xs:pb-0 sm:pb-0 lg:p-16 w-full xs:p-2 lg:gap-y-16 xs:gap-y-8 sm:gap-y-8 relative overflow-x-hidden backdrop-blur-sm  bg-violet-200  rounded-2xl">
      {/*Header */}
      <Element name="prices">
        <AnimateScrollDown>
          <p className="text-left drop-shadow-xl uppercase text-neutral-800 lg:text-7xl xs:text-5xl py-4 font-semibold">
            {t("header")}
          </p>
        </AnimateScrollDown>
      </Element>
      <Image
        alt="cone"
        className="absolute lg:right-20 lg:top-[90px] lg:z-10 xs:-z-10 sm:-z-10 xs:bottom-10 xs:right-[120px] hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="/5.png"
      />

      {/*Cards */}
      <div className="grid lg:grid-cols-2 gap-8 justify-center h-max md:auto-cols-min">
        {expertise.map((item, index) => (
          <div className="" key={index}>
            <AnimateScrollDown>
              <CardOutline data={item} />
            </AnimateScrollDown>
          </div>
        ))}
      </div>

      {/*Infinite animated svgs */}
      <AnimateInfiniteHorizontal />
    </section>
  );
}

export default Prices;
