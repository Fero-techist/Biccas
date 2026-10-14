import React from "react";
import SendCard from "./SendCard";
import IncomeCard from "./IncomeCard";
import PaymentCard from "./PaymentCard";
import ImagePerson from "../../assets/avatar.svg";

const HeroArtwork = () => {
  return (
    <div
      className="
        relative mx-auto
        mt-14
        h-[280px] w-full max-w-[320px]
        sm:h-[320px] sm:max-w-[360px]
        md:h-[340px] md:max-w-[400px]
        lg:mt-0 lg:h-[360px] lg:max-w-[430px]
        xl:h-[390px] xl:max-w-[470px]
      "
    >
      <div
        className="
          absolute inset-x-0 top-0
          h-[245px]
          overflow-hidden rounded-xl
          bg-[#50bd99]
          sm:h-[275px]
          md:h-[295px]
          lg:h-[315px]
          xl:h-[340px]
        "
      >
        <img
          src={ImagePerson}
          alt="Hero Artwork"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating cards */}
      <SendCard />
      <IncomeCard />
      <PaymentCard />

      {/* Decorative icons */}
      <div
        className="
          absolute left-[-10px] top-[70px]
          flex h-7 w-7
          -rotate-[12deg]
          items-center justify-center
          rounded-md bg-[#4037a8]
          text-sm text-white shadow-md
          sm:left-[-15px]
          md:left-[-20px]
          lg:left-[-25px]
        "
      >
        ✓
      </div>

      <div
        className="
          absolute right-[-5px] top-[10px]
          flex h-8 w-8
          rotate-[12deg]
          items-center justify-center
          rounded-md bg-[#ffca52]
          text-sm text-white shadow-md
          sm:right-[-8px]
          md:right-[-12px]
        "
      >
        $
      </div>

      <div
        className="
          absolute bottom-[-3px] right-[5px]
          flex h-7 w-7
          rotate-[8deg]
          items-center justify-center
          rounded-md bg-[#ff9d8b]
          text-sm text-white shadow-md
          sm:right-[10px]
          md:right-[15px]
        "
      >
        ▢
      </div>
    </div>
  );
};

export default HeroArtwork;
