"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";

function StickyNavbar() {
  const i = useTranslations("Navbar");
  const h = useTranslations("Hero");

  const handleSetActive = (to: string) => {
    console.log(to);
  };
  const routes = [
    {
      name: i("name1"),
      href: "hero",
    },
    {
      name: i("name2"),
      href: "projects",
    },
    {
      name: i("name3"),
      href: "prices",
    },
    {
      name: i("name4"),
      href: "phases",
    },
    {
      name: i("name5"),
      href: "contact",
    },
  ];

  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement!.scrollTop;
      if (scrolled >= 300) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  return (
    <div
      className={cn(
        "flex flex-row overflow-hidden rounded-xl collapse backdrop-blur-sm xs:h-12 lg:h-20 bg-black  bg-opacity-20 -translate-y-40 z-50 lg:w-full xs:w-[320px] xs:px-4 sm:px-6 lg:px-16 relative gap-x-4 items-center sticky top-1",
        pos === "moved" &&
          "visible transition delay-150 duration-500 translate-y-0"
      )}
    >
      <Link
        href="/#"
        className="logo flex flex-row xs:top-2 xs:left-4 lg:left-4 text-violet-700 font-semibold drop-shadow-2xl hover:text-yellow-300 justify-center items-center text-center lg:m-4 xs:m-0 sm:m-0 lg:text-2xl xs:text-md sm:text-md cursor-pointer transition ease-linear delay-150 duration-500"
      >
        &lt;toimetTech..
        <span className=" animate-pulseMain text-yellow-500 pb-2">|</span>&gt;
      </Link>
      <nav className="flex lg:visible xs:collapse sm:collapse lg:w-full xs:w-0 sm:w-0">
        <ul className="flex flex-row xs:gap-x-2 xs:py-2 lg:gap-x-12 text-violet-700 transition delay-150 duration-400">
          {routes.map((el, index) => (
            <ScrollLink
              key={index}
              // activeClass="active"
              to={el.href}
              spy={true}
              smooth={true}
              offset={-100}
              delay={150}
              duration={1000}
              onSetActive={handleSetActive}
              className="flex flex-col cursor-pointer border-2 border-transparent rounded-md py-2 lg:px-4 xs:px-1 sm:px-1 hover:border-violet-800 hover:text-violet-800 transition delay-150 items-center duration-400"
            >
              <p className="lg:text-lg xs:text-sm sm:text-sm text-center font-semibold leading-5">
                {el.name}
              </p>
            </ScrollLink>
          ))}
        </ul>
      </nav>
      <button className="text-neutral-100 font-semibold w-full xs:text-sm sm:text-sm lg:text-lg bg-violet-700 lg:py-2 xs:py-1 sm:py-1 px-2 rounded-md bg-gradient-to-r hover:from-violet-500 hover:to-yellow-500 hover:shadow-lg transition duration-500 delay-150">
        <Link href={`https://wa.link/${h("chat")}`}>{h("button1")}</Link>
      </button>
    </div>
  );
}

export default StickyNavbar;
