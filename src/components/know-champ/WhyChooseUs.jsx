import React from "react";
import { ShieldCheck, Gift, BookOpen, Lock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#E94B4B]" />,
      title: "Fair & Transparent",
      description:
        "Our platform is 100% fair. We follow the perfect rules of the game for accurate results. Our platform is completely trustworthy for players.",
    },
    {
      icon: <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-[#E94B4B]" />,
      title: "Exciting Rewards",
      description:
        "Win real cash prizes, badges, and unlock exclusive rewards based on your skills.",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#E94B4B]" />,
      title: "Learn & Grow",
      description:
        "Improve your general knowledge and subject expertise with daily quiz challenges.",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-[#E94B4B]" />,
      title: "Secure & Trusted",
      description:
        "Your data, wallet funds, and transactions are completely secure and private.",
    },
  ];

  return (
    <section className="py-8 bg-[#010914] border-t border-[#1B2230]">
      <div className="w-[calc(100%-32px)] max-w-[1425px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white relative inline-block">
            Why Choose Know Champ?
            <span className="absolute bottom-[-8px] left-0 w-14 h-[3px] bg-[#E94B4B] rounded-full" />
          </h2>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-3 sm:gap-4">

              {/* Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
