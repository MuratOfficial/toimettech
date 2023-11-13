import Image from "next/image";
import React from "react";

interface CardItemProps {
  days: string;
  price: string;
  heading: string;
  buttonName: string;
  description: string;
}

interface CardOutlineProps {
  data: CardItemProps;
}

function CardOutline({ data }: CardOutlineProps) {
  return (
    <div className="h-[480px] w-full    rounded-2xl bg-white lg:p-16 xs:p-8 sm:p-8  flex flex-col justify-between">
      <div className="flex flex-row justify-between ">
        <p className="font-semibold drop-shadow-lg text-3xl uppercase">
          {data.heading}
        </p>
        <p className="font-semibold text-xl text-violet-900">{data.price}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>{data.description}</p>
      </div>
      <div className="flex lg:flex-row xs:flex-col sm:flex-col justify-between">
        <button className="text-neutral-100 font-normal text-lg bg-violet-700 py-2 px-4 rounded-md bg-gradient-to-r hover:from-violet-500 hover:to-yellow-500 hover:shadow-lg transition duration-500 delay-150">
          {data.buttonName}
        </button>

        <p className="font-semibold text-center underline-offset-4 underline">
          {data.days}
        </p>
      </div>
    </div>
  );
}

export default CardOutline;
