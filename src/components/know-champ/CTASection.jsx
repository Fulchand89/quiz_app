import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full bg-[#010914] px-0 py-8">
      {/* CTA Container */}
      <div
        className="
          relative
          mx-auto
          w-[calc(100%-32px)]
          max-w-[1425px]
          overflow-hidden
          rounded-[15px]
          bg-gradient-to-r
          from-[#261012]
          via-[#1C1018]
          to-[#130D13]
        "
      >
        <div className="relative flex flex-col lg:flex-row lg:h-[391px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex w-full flex-col justify-center px-5 py-8 sm:px-10 sm:py-10 lg:ml-[65px] lg:w-[648px] lg:flex-none lg:px-0 lg:py-0">

            {/* Content Wrapper */}
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[52px]">

              {/* Heading + Description */}
              <div>
                {/* Heading */}
                <h2
                  className="
                    w-full
                    font-['Montserrat']
                    text-[26px]
                    font-semibold
                    leading-[110%]
                    tracking-[0]
                    text-[#EF5752]
                    sm:text-[34px]
                    lg:h-[102px]
                    lg:w-[648px]
                    lg:text-[42px]
                    lg:leading-[100%]
                  "
                >
                  Ready to Become the Next
                  <br />
                  Champion
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-3
                    sm:mt-5
                    w-full
                    font-['Montserrat']
                    text-[13px]
                    font-medium
                    leading-[150%]
                    tracking-[0]
                    text-[#D8D8DC]
                    sm:text-[16px]
                    lg:h-[48px]
                    lg:w-[648px]
                    lg:text-[20px]
                    lg:leading-[100%]
                  "
                >
                  Compete in live quiz contests, sharpen your knowledge,
                  <br className="hidden lg:block" />
                  and win real cash rewards everyday.
                </p>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-[20px]">

                {/* Join Today Contests */}
                <Link
                  to="/contests"
                  className="
                    flex
                    h-[48px]
                    sm:h-[54px]
                    w-full
                    max-w-[280px]
                    sm:max-w-none
                    items-center
                    justify-center
                    gap-[10px]
                    rounded-[6.35px]
                    bg-gradient-to-r
                    from-[#E94B4B]
                    to-[#B52B2B]
                    px-6
                    font-['Montserrat']
                    text-[14px]
                    sm:text-[16px]
                    font-semibold
                    leading-none
                    tracking-[0]
                    whitespace-nowrap
                    text-white
                    transition-all
                    duration-300
                    hover:shadow-[0_0_20px_rgba(233,75,75,0.35)]
                    sm:w-[254px]
                  "
                >
                  Join Today Contests
                </Link>

                {/* Explore Contests */}
                <Link
                  to="/contests"
                  className="
                    flex
                    h-[48px]
                    sm:h-[54px]
                    w-full
                    max-w-[280px]
                    sm:max-w-none
                    items-center
                    justify-center
                    gap-[10px]
                    rounded-[6.35px]
                    border-[1.06px]
                    border-[#E94B4B]
                    bg-transparent
                    px-6
                    font-['Montserrat']
                    text-[14px]
                    sm:text-[16px]
                    font-semibold
                    leading-none
                    tracking-[0]
                    whitespace-nowrap
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#E94B4B]/10
                    hover:border-[#EF5752]
                    sm:w-[222px]
                  "
                >
                  Explore Contests
                </Link>

              </div>
            </div>
          </div>

          {/* ================= RIGHT TROPHY IMAGE ================= */}
          <div
            className="
              relative
              flex
              w-full
              items-end
              justify-center
              min-h-[220px]
              sm:min-h-[280px]
              lg:ml-auto
              lg:mr-[100px]
              lg:min-h-[391px]
              lg:w-auto
            "
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[90px]" />

            {/* Trophy Image */}
            <img
              src="/Home-images.png"
              alt="Know Champ Trophy"
              className="
                relative
                z-10
                h-auto
                w-[170px]
                sm:w-[220px]
                md:w-[260px]
                object-contain
                lg:h-[379px]
                lg:w-[299px]
              "
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
