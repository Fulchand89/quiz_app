import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ name, icon, image, colorClass, borderGlowClass }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-between bg-[#0e1121] border border-gray-800 rounded-2xl p-3 sm:p-4 cursor-pointer aspect-square ${borderGlowClass}`}
      whileHover={{ scale: 1.05, borderColor: 'rgba(239,68,68,0.4)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {/* Icon */}
      <div className="flex-1 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain select-none"
            draggable="false"
          />
        ) : (
          <span className="text-2xl sm:text-3xl select-none">{icon}</span>
        )}
      </div>

      {/* Category name */}
      <span className="text-[10px] sm:text-xs font-bold text-white text-center leading-tight mt-1 sm:mt-2">
        {name}
      </span>
    </motion.div>
  );
};

export default CategoryCard;
