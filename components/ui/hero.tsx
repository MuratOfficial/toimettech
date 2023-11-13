import React from "react";
import AnimatedText from "../animation/animated-text";
import { Element, Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowBigDown } from "lucide-react";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col flex-wrap h-screen w-full overflow-x-hidden items-center xs:p-4 sm:p-4 lg:p-16">
      <Image
        alt="cone"
        className="absolute lg:right-20 xs:top-[440px] hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="Cone.svg"
      />
      <Image
        alt="cube"
        className="absolute animate-spinSlow lg:left-20 lg:top-0 xs:top-10 hover:opacity-60 dropshadow-lg hover:rotate-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="/plus.png"
      />
      <Image
        alt="cylinder"
        className="absolute lg:top-[220px] hover:opacity-60 xs:collapse lg:visible dropshadow-lg hover:-rotate-12 transition duration-1000 delay-300"
        height={200}
        width={200}
        src="Cylinder.svg"
      />
      <div className="p-16 flex flex-col absolute top-2 gap-y-8 rounded-lg uppercase bg-black bg-opacity-20 backdrop-blur-sm  font-bold  text-left lg:w-[1200px] xs:w-full sm:w-full h-screen">
        <Element name="hero">
          <p className=" drop-shadow-xl break-words lg:text-7xl xs:text-4xl text-violet-700 tracking-wider text-right">
            {t("text1")}
          </p>
        </Element>

        <div className="flex flex-row text-white text-2xl tracking-wider z-40 lg:h-44 xs:h-full sm:h-full">
          <AnimatedText />
        </div>
        <div className="flex flex-row justify-between">
          <button className="text-neutral-100 font-semibold text-xl bg-violet-700 py-2 px-4 rounded-md bg-gradient-to-r hover:from-violet-500 hover:to-yellow-500 hover:shadow-lg transition duration-500 delay-150">
            {t("button1")}
          </button>

          <button className="text-neutral-100 font-normal text-lg bg-violet-700 py-2 pl-[10px] hover:translate-y-4 h-12 w-12 rounded-full border-transparent border-2 hover:text-violet-700 hover:border-violet-700 hover:bg-transparent transition duration-1000 delay-150">
            <ScrollLink
              to="downPoint"
              spy={true}
              smooth={true}
              offset={-100}
              delay={150}
              duration={1000}
              className=""
            >
              <ArrowBigDown />
            </ScrollLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
