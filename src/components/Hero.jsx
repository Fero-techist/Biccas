import Button from "./ui/Button";
import CurvedVector from "./ui/Curved-vector";
import HeroArtwork from "./ui/HeroArtWork";

const Hero = () => {
  return (
    <main className="relative overflow-hidden px-4 pt-6 sm:px-6 sm:pt-8 lg:px-16">
      {/* Top-left background glow */}
      <div
        className="
          pointer-events-none absolute
          -left-[180px] -top-[180px]
          h-[420px] w-[420px]
          rounded-full
          bg-[#d8f2eb]
          opacity-80
          blur-[90px]
          sm:-left-[150px] sm:-top-[160px]
          sm:h-[500px] sm:w-[500px]
        "
      />

      {/* Bottom-right background glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-[280px] -right-[220px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#d8f2eb]
          opacity-70
          blur-[100px]
          sm:-bottom-[300px]
          sm:-right-[200px]
          sm:h-[600px] sm:w-[600px]
        "
      />

      {/* Hero content */}
      <div
        className="
          relative z-10 mx-auto
          grid w-full max-w-7xl
          grid-cols-1
          items-center
          gap-14
          px-2
          pt-10
          sm:px-4 sm:pt-14
          md:px-6
          lg:grid-cols-2
          lg:gap-12
          lg:px-8
          lg:pt-20
          xl:gap-16
        "
      >
        {/* LEFT — Hero text */}
        <section className="relative w-full max-w-xl">
          <h1
            className="
              text-[42px]
              font-bold
              leading-[0.98]
              tracking-[-2px]
              text-[#151515]
              sm:text-[52px]
              md:text-[58px]
              lg:text-[60px]
              xl:text-[64px]
            "
          >
            We're here to
            <br />
            Increase your
            <br />
            Productivity
          </h1>

          {/* Curved decoration */}
          <div className="mt-2">
            <CurvedVector />
          </div>

          <p
            className="
              mt-12
              max-w-md
              text-[13px]
              leading-6
              text-gray-600
              sm:mt-14
              md:text-[14px]
              lg:mt-16
            "
          >
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>

          {/* CTA */}
          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-4
              sm:gap-5
            "
          >
            <Button className="whitespace-nowrap">Try free trial</Button>

            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                whitespace-nowrap
                text-[12px]
                text-gray-700
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-400
                  text-[9px]
                "
              >
                ▶
              </span>
              View Demo
            </button>
          </div>
        </section>

        {/* RIGHT — Artwork */}
        <div className="flex w-full justify-center lg:justify-end">
          <HeroArtwork />
        </div>
      </div>
    </main>
  );
};

export default Hero;
