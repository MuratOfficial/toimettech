"use client";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef } from "react";

export function AnimateInfiniteHorizontal() {
  const block = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".box",
        {
          x: -1400,
        },
        {
          x: 1200,
          duration: 20,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        ".box1",
        {
          x: 1400,
        },
        {
          x: -1200,
          duration: 15,
          repeat: -1,
          ease: "none",
        }
      );
    }, block);

    return () => ctx.revert();
  });

  const t = useTranslations("InfiniteWords");

  const words = [t("word1"), t("word2"), t("word3"), t("word4")];
  const words1 = [t("word5"), t("word6"), t("word7"), t("word8")];

  return (
    <div
      ref={block}
      className="flex flex-col w-full lg:visible sm:collapse xs:collapse pb-12"
    >
      <div className="flex-row flex gap-x-20 py-2 bg-violet-700 ">
        {words.map((el, idx) => (
          <p className="box font-semibold text-violet-200 " key={idx}>
            {el}
          </p>
        ))}
      </div>
      <div className="flex-row flex gap-x-20 py-2 bg-violet-700 ">
        {words1.map((el, idx) => (
          <p className="box1 font-semibold text-violet-200 " key={idx}>
            {el}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AnimateInfiniteHorizontal;
