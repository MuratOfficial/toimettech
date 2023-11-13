"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import NextLink from "next-intl/link";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

function Navbar() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const i = useTranslations("Navbar");
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

  return (
    <div className="flex xs:relative flex-row sm:flex-col xs:flex-col xs:p-2 z-50 lg:p-2 lg:h-20 bg-transparent relative justify-center items-center">
      <Link
        href="/#"
        className="logo absolute flex flex-row xs:top-2 left-4 text-violet-700 font-semibold drop-shadow-2xl hover:text-yellow-500 justify-center items-center text-center m-4 text-2xl cursor-pointer transition ease-linear delay-150 duration-500"
      >
        &lt;toimetTech..
        <span className=" animate-pulseMain text-yellow-500 pb-2">|</span>&gt;
      </Link>
      <nav className="flex pt-2 lg:relative xs:absolute xs:collapse lg:visible xs:top-0">
        <ul className="flex lg:flex-row sm:flex-col xs:flex-col gap-x-8 text-black transition delay-150 duration-400">
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
              className="flex flex-col cursor-pointer border-2 rounded-md py-1 px-2 border-transparent hover:border-violet-700 hover:text-violet-700 transition delay-150 items-center duration-400"
            >
              <p className="text-md font-semibold text-center leading-5">
                {el.name}
              </p>
            </ScrollLink>
          ))}
        </ul>
      </nav>
      <div className="absolute xs:top-2 right-4 text-neutral-800  justify-center items-center text-center m-4 text-md cursor-pointer">
        <NextLink
          href="/"
          locale="kk"
          className="mr-4 hover:text-violet-700 focus:font-bold"
        >
          kz
        </NextLink>
        <NextLink
          href="/"
          locale="en"
          className="mr-4 hover:text-violet-700 focus:font-bold"
        >
          en
        </NextLink>
        <NextLink
          href="/"
          locale="ru"
          className="hover:text-violet-700 focus:font-bold"
        >
          ru
        </NextLink>
      </div>
    </div>
  );
}

export default Navbar;
