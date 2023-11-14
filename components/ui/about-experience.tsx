import React from "react";
import { AnimateScrollDownHorizontalLeft } from "../animation/animate-scroll-down";

import { useTranslations } from "next-intl";
import useProject from "@/hooks/useProject";
import { cn } from "@/lib/utils";
import ProjectsCollage from "./projects-collage";
import { Element } from "react-scroll";
import Image from "next/image";

interface FilterProps {
  name: string;
  category: string;
  active: boolean;
}

function AboutExperience() {
  const t = useTranslations("Filter");
  const w = useTranslations("Work");
  const active = useProject().active;
  const filters: FilterProps[] = [
    {
      name: t("filterAll"),
      category: "All",
      active: true ? active === "All" : false,
    },
    {
      name: t("filter1"),
      category: "Web Development",
      active: true ? active === "Web Development" : false,
    },
    {
      name: t("filter2"),
      category: "CMS",
      active: true ? active === "CMS" : false,
    },
    {
      name: t("filter3"),
      category: "Promo",
      active: true ? active === "Promo" : false,
    },
  ];

  const categoryFilter = useProject();

  const handleFilters = (category: string) => {
    categoryFilter.filterItems(category);
  };

  return (
    <div className="w-full flex flex-col xs:p-8 lg:p-16 h-full relative ">
      <Image
        alt="cone"
        className="absolute lg:left-20 lg:top-12 -z-10 xs:top-[440px] hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="/4.png"
      />
      <AnimateScrollDownHorizontalLeft>
        <Element name="projects">
          <p className="text-right lg:text-7xl xs:text-5xl font-semibold py-10 uppercase drop-shadow-xl">
            {w("headerWork")}
          </p>
        </Element>
      </AnimateScrollDownHorizontalLeft>

      <p className="pb-10 uppercase text-2xl font-semibold text-right">
        {w("descriptionWork")}
      </p>
      <Element name="downPoint">
        {" "}
        <AnimateScrollDownHorizontalLeft>
          <div className="text-neutral-800 gap-x-16 gap-y-4 pt-8 items-center justify-center flex lg:flex-row xs:flex-col font-sans text-lg font-semibold mb-8">
            {filters.map((item, idx) => (
              <span key={idx} className="text-center uppercase">
                <p
                  onClick={() => handleFilters(item.category)}
                  className={cn(
                    "hover:text-white px-16 py-3 rounded-lg hover:bg-violet-500 text-lg cursor-pointer mr-3 relative",
                    item.active && "bg-violet-700 text-white"
                  )}
                >
                  {item.name}
                </p>
              </span>
            ))}
          </div>
        </AnimateScrollDownHorizontalLeft>
      </Element>

      <ProjectsCollage />
    </div>
  );
}

export default AboutExperience;
