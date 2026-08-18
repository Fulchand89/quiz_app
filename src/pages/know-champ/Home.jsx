import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ScrollToTop from '../../components/common/ScrollToTop';
import Navbar from '../../components/know-champ/Navbar';
import Hero from '../../components/know-champ/Hero';
import ContestCard from '../../components/know-champ/ContestCard';
import CategoryCard from '../../components/know-champ/CategoryCard';
import WhyChooseUs from '../../components/know-champ/WhyChooseUs';
import WinnerCard from '../../components/know-champ/WinnerCard';
import TestimonialCard from '../../components/know-champ/TestimonialCard';
import CTASection from '../../components/know-champ/CTASection';
import FAQ from '../../components/know-champ/FAQ';
import Footer from '../../components/know-champ/Footer';

import {
  KNOW_CHAMP_CATEGORIES,
  KNOW_CHAMP_CONTESTS,
  KNOW_CHAMP_WINNERS,
  KNOW_CHAMP_TESTIMONIALS,
} from '../../constants/knowChampData';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#090b15] text-white flex flex-col font-sans select-none overflow-x-hidden">
      <ScrollToTop />
      {/* 1. Header/Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Featured Contests */}
      <section className="py-6 sm:py-8 bg-[#090b15] border-t border-gray-900/50">
        <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-gray-800/40">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight relative inline-block">
              Featured Contests
              <span className="absolute bottom-[-13px] left-0 w-16 sm:w-20 h-1 bg-red-600 rounded-full"></span>
            </h2>
            <Link 
              to="/contests" 
              className="text-xs sm:text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              View All
            </Link>
          </div>

          {/* Grid list of Contest Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {KNOW_CHAMP_CONTESTS.map((contest, index) => (
              <ContestCard
                key={index}
                category={contest.category}
                title={contest.title}
                prize={contest.prize}
                entry={contest.entry}
                joined={contest.joined}
                image={contest.image}
                date={contest.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="py-6 sm:py-8 bg-[#090b15] border-t border-gray-900/50">
        <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-gray-800/40">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight relative inline-block">
              Categories
              <span className="absolute bottom-[-13px] left-0 w-12 sm:w-16 h-1 bg-red-600 rounded-full"></span>
            </h2>
            <Link 
              to="/contests" 
              className="text-xs sm:text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              View All
            </Link>
          </div>

          {/* Grid list of Category Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-6 justify-center">
            {KNOW_CHAMP_CATEGORIES.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                icon={category.icon}
                image={category.image}
                colorClass={category.colorClass}
                borderGlowClass={category.borderGlowClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Know Champ? */}
      <WhyChooseUs />

      {/* 6. Recent Winners */}
      <section className="py-6 sm:py-8 bg-[#090b15]">
        <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-gray-800/40">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight relative inline-block">
              Recent Winners
              <span className="absolute bottom-[-13px] left-0 w-16 sm:w-20 h-1 bg-red-600 rounded-full"></span>
            </h2>
            <Link 
              to="/leaderboard" 
              className="text-xs sm:text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              View All
            </Link>
          </div>

          {/* Winner Cards Infinite marquee */}
          <div className="w-full overflow-hidden py-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {[...KNOW_CHAMP_WINNERS, ...KNOW_CHAMP_WINNERS].map((winner, index) => (
                <div 
                  key={index} 
                  className="w-[160px] sm:w-[190px] md:w-[240px] flex-shrink-0 flex flex-col"
                >
                  <WinnerCard
                    name={winner.name}
                    amount={winner.amount}
                    contest={winner.contest}
                    rank={winner.rank}
                    image={winner.image}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. What Users Say (Testimonials) */}
      <section className="py-6 sm:py-8 bg-[#090b15] border-t border-gray-900/50">
        <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-gray-800/40">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight relative inline-block">
              What Users Say
              <span className="absolute bottom-[-13px] left-0 w-16 sm:w-20 h-1 bg-red-600 rounded-full"></span>
            </h2>
          </div>

          {/* Infinite marquee container */}
          <div className="w-full overflow-hidden py-4">
            <motion.div
              className="flex gap-6 animate-marquee"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {[...KNOW_CHAMP_TESTIMONIALS, ...KNOW_CHAMP_TESTIMONIALS].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 flex flex-col"
                >
                  <TestimonialCard
                    rating={testimonial.rating}
                    text={testimonial.text}
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <CTASection />

      {/* 9. FAQ Accordion */}
      <FAQ />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Home;
