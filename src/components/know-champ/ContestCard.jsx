import React from 'react';
import { Calendar, Users } from 'lucide-react';

const ContestCard = ({ category, title, prize, entry, joined, image, date }) => {
  const headerBgColor = (() => {
    const cat = (category || '').toLowerCase();
    const img = (image || '').toLowerCase();

    if (cat.includes('science')) return 'bg-[#052420]';
    if (cat.includes('technology')) return 'bg-[#292e1a]';
    if (cat.includes('sports')) return 'bg-[#0b162f]';
    if (cat.includes('current') || img.includes('current')) return 'bg-[#2b1d0a]';
    if (cat.includes('entertainment') || img.includes('entertainment')) return 'bg-[#2c0e22]';
    if (cat.includes('history') || img.includes('history')) return 'bg-[#281b0a]';
    return 'bg-[#0b122c]';
  })();

  return (
    <div className="rounded-2xl bg-[#0d0f1f] border border-gray-800/60 flex flex-col hover:border-gray-700/80 transition-all duration-300 h-full overflow-hidden">

      {/* Top row — Category name + image */}
      <div className={`px-4 sm:px-5 flex items-center justify-between gap-3 h-[80px] sm:h-[90px] min-h-[80px] sm:min-h-[90px] max-h-[80px] sm:max-h-[90px] ${headerBgColor}`}>
        <h3 className="text-[14px] sm:text-[16px] font-bold text-white leading-tight truncate max-w-[calc(100%-68px)] sm:max-w-[calc(100%-72px)]">
          {category}
        </h3>
        <img
          src={image}
          alt={category}
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 select-none"
          draggable="false"
        />
      </div>

      {/* Bottom Content Section */}
      <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-4 sm:pb-5 flex flex-col gap-2.5 sm:gap-3 flex-1">

        {/* Contest title */}
        <h2 className="text-[16px] sm:text-[18px] font-extrabold text-white leading-tight h-[44px] sm:h-[48px] line-clamp-2 overflow-hidden">
          {title}
        </h2>

        {/* Prize Pool + Entry Fee */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 mb-0.5">Price Pool</p>
            <p className="text-[16px] sm:text-[18px] font-extrabold text-red-500">
              ₹{prize.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] sm:text-[11px] font-medium text-gray-400 mb-0.5">Entry Fee</p>
            <p className="text-[16px] sm:text-[18px] font-extrabold text-white">
              ₹{entry}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800/80" />

        {/* Date + Players */}
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-medium truncate">{date}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-medium">{joined.toLocaleString()}</span>
          </div>
        </div>

        {/* Download App button */}
        <button className="w-full py-2.5 sm:py-3 bg-[#4f6ef7] hover:bg-[#3d5ef0] text-white font-bold rounded-xl text-xs sm:text-sm transition duration-300 mt-auto">
          Download App
        </button>

      </div>
    </div>
  );
};

export default ContestCard;
