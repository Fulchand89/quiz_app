import React from "react";
import {
  ShieldCheck,
  Gift,
  BookOpen,
  Lock,
  Trophy,
  Zap,
  Star,
  Users,
  Wallet,
  BarChart2,
  Headphones,
  Smartphone,
} from "lucide-react";

const IconMap = {
  ShieldCheck,
  Gift,
  BookOpen,
  Lock,
  Trophy,
  Zap,
  Star,
  Users,
  Wallet,
  BarChart2,
  Headphones,
  Smartphone,
};

const WhyChooseUs = ({ isLoading, features: customFeatures }) => {
  const staticFeatures = [
    {
      icon: (
        <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#E94B4B]" />
      ),
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

  // Use dynamic features when available, otherwise use static features
  const features =
    customFeatures && customFeatures.length > 0
      ? customFeatures
      : staticFeatures;

  const getIcon = (feature) => {
    // If API/static feature already provides an icon
    if (feature.icon) {
      return feature.icon;
    }

    // Dynamic icon from iconName
    const IconComponent = IconMap[feature.iconName] || ShieldCheck;

    const colorClass =
      feature.colorClass || "text-[#E94B4B]";

    return (
      <IconComponent
        className={`w-6 h-6 sm:w-7 sm:h-7 ${colorClass}`}
      />
    );
  };

  return (
    <section className="py-8 bg-[#010914] border-t border-[#1B2230]">
      <div className="w-[calc(100%-32px)] max-w-[1425px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white relative inline-block">
            Why Choose Know Champ?

            <span className="absolute bottom-[-8px] left-0 w-14 h-[3px] bg-[#E94B4B] rounded-full" />
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {isLoading ? (
            /* Skeleton Loading */
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 sm:gap-4 animate-pulse"
              >
                {/* Icon + Title Skeleton */}
                <div className="flex items-center gap-3">

                  {/* Icon Skeleton */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800/60 shrink-0" />

                  {/* Title Skeleton */}
                  <div className="h-4 bg-gray-800/60 rounded-md w-1/2" />
                </div>

                {/* Description Skeleton */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="h-3 bg-gray-800/60 rounded-md w-full" />
                  <div className="h-3 bg-gray-800/60 rounded-md w-5/6" />
                  <div className="h-3 bg-gray-800/60 rounded-md w-2/3" />
                </div>
              </div>
            ))
          ) : (
            /* Dynamic Features */
            features.map((feature, idx) => (
              <div
                key={feature.id || idx}
                className="flex flex-col gap-3 sm:gap-4 relative"
              >

                {/* Icon + Title + Badges */}
                <div className="flex items-center gap-3">

                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                    {getIcon(feature)}
                  </div>

                  {/* Title + Badges */}
                  <div className="flex items-center gap-2 flex-wrap">

                    {/* Feature Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {feature.title}
                    </h3>

                    {/* Contest Badge */}
                    {feature.contest?.title && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {feature.contest.title}
                      </span>
                    )}

                    {/* Custom Badge */}
                    {feature.badgeText && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E94B4B]/20 text-[#E94B4B] border border-[#E94B4B]/30">
                        {feature.badgeText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {feature.description}
                </p>

              </div>
            ))
          )}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;