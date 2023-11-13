import React from "react";
import Link from "next/link";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";
import { useTranslations } from "next-intl";
import { Mail, PhoneCall } from "lucide-react";

function Contacts() {
  const t = useTranslations("Contact");
  const links = [
    { name: "Linkedin", href: "https://www.linkedin.com/in/toimetm/" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/official_murattoimet/",
    },
    { name: "Whatsapp", href: "https://wa.me/77472156675" },
  ];
  return (
    <div className="w-full h-full col-span-2 flex flex-col">
      <div className=" w-full flex flex-col text-neutral-800 gap-y-8 justify-center items-center text-left">
        <AnimateScrollDownHorizontalLeft>
          <p className="lg:text-4xl xs:text-2xl sm:text-2xl font-bold lg:leading-normal drop-shadow-lg">
            {t("text1")}
          </p>
        </AnimateScrollDownHorizontalLeft>
        <AnimateScrollDown>
          <p className="text-xl">{t("text2")}</p>
        </AnimateScrollDown>
      </div>
      <div className="w-full py-4 gap-y-8 flex flex-col ">
        <AnimateScrollDown>
          <div className="text-neutral-800 flex lg:flex-row xs:flex-col sm:flex-col gap-y-4 gap-x-8 text-xl ">
            {links.map((item, index) => (
              <Link key={index} href={item.href} className="w-fit">
                <p className="hover:text-violet-700 hover:border-violet-700 px-3 py-1 rounded-lg border-2 border-neutral-800 transition-colors font-semibold duration-500 delay-150 w-fit">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </AnimateScrollDown>
        <AnimateScrollDownHorizontalLeft>
          <div className=" w-full font-semibold text-neutral-700  justify-centerr lg:text-xl xs:text-md sm:text-md">
            <span className="flex flex-row gap-x-4">
              <PhoneCall /> +77472156675{" "}
            </span>
            <Link
              href="mailto:toimetm@gmail.com"
              className="flex flex-row gap-x-4"
            >
              <Mail /> toimetm@gmail.com
            </Link>
            {t("endText")}
          </div>
        </AnimateScrollDownHorizontalLeft>
      </div>
    </div>
  );
}

export default Contacts;
