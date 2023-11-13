"use client";
import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useTranslations } from "next-intl";

function AnimatedText() {
  const t = useTranslations("Hero");
  const block = useRef(null);
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);
  const block4 = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
    let ctx = gsap.context(() => {
      gsap.to(block.current, {
        duration: 2,
        text: t("textblock1"),
        ease: "none",
      }),
        gsap.to(block1.current, {
          duration: 1,
          delay: 2,
          text: t("textblock2"),
          ease: "none",
        });
      gsap.to(block2.current, {
        duration: 1.5,
        delay: 3,
        text: t("textblock3"),
        ease: "none",
      });
      gsap.to(block3.current, {
        duration: 1,
        delay: 4.5,
        text: t("textblock4"),
        ease: "none",
      });
      gsap.to(block4.current, {
        duration: 3,
        delay: 5.5,
        text: t("textblock5"),
        ease: "none",
      });
    }, []);
    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col">
      <span
        ref={block}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
      <span
        ref={block1}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
      <span
        ref={block2}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
      <span
        ref={block3}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
      <span
        ref={block4}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
    </div>
  );
}

export default AnimatedText;
