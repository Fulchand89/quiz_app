import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { featureService } from '../../api/services/featureService';
import { categoryService } from '../../api/services/categoryService';
import { contestService } from '../../api/services/contestService';

const mergeCategories = (staticCats, dynamicCats) => {
  const merged = staticCats.map(sc => {
    const matchingDynamic = dynamicCats.find(dc => dc.name.toLowerCase() === sc.name.toLowerCase());
    if (matchingDynamic) {
      return { ...sc, ...matchingDynamic };
    }
    return sc;
  });
  dynamicCats.forEach(dc => {
    if (!staticCats.some(sc => sc.name.toLowerCase() === dc.name.toLowerCase())) {
      merged.push(dc);
    }
  });
  return merged;
};

const mergeContests = (staticContests, dynamicContests) => {
  const merged = staticContests.map(sc => {
    const matchingDynamic = dynamicContests.find(dc => dc.title.toLowerCase() === sc.title.toLowerCase());
    if (matchingDynamic) {
      return { ...sc, ...matchingDynamic };
    }
    return sc;
  });
  dynamicContests.forEach(dc => {
    if (!staticContests.some(sc => sc.title.toLowerCase() === dc.title.toLowerCase())) {
      merged.push(dc);
    }
  });
  return merged;
};

const Home = () => {
  const navigate = useNavigate();
  const [features, setFeatures] = React.useState([]);
  const [featuresLoading, setFeaturesLoading] = React.useState(true);
  const [categories, setCategories] = React.useState(KNOW_CHAMP_CATEGORIES);
  const [categoriesLoading, setCategoriesLoading] = React.useState(true);
  const [contests, setContests] = React.useState(KNOW_CHAMP_CONTESTS);
  const [contestsLoading, setContestsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await featureService.getPublicFeatures();
        if (res?.success && Array.isArray(res.data)) {
          setFeatures(res.data);
        }
      } catch (err) {
        console.error('Error fetching public features:', err);
      } finally {
        setFeaturesLoading(false);
      }
    };

    const loadCategories = async () => {
      try {
        const res = await categoryService.getPublicCategories();
        if (res?.success && Array.isArray(res.data)) {
          setCategories(mergeCategories(KNOW_CHAMP_CATEGORIES, res.data));
        }
      } catch (err) {
        console.error('Error fetching public categories:', err);
      } finally {
        setCategoriesLoading(false);
      }
    };

    const loadContests = async () => {
      try {
        const res = await contestService.getPublicContests();
        if (res?.success && Array.isArray(res.data)) {
          setContests(mergeContests(KNOW_CHAMP_CONTESTS, res.data));
        }
      } catch (err) {
        console.error('Error fetching public contests:', err);
      } finally {
        setContestsLoading(false);
      }
    };

    loadFeatures();
    loadCategories();
    loadContests();
  }, []);

  const getCategoryTheme = (catName, catData = {}) => {
    // Use API-provided fields first (from database), then fallback to static name mapping
    const staticCat = KNOW_CHAMP_CATEGORIES.find(c => c.name.toLowerCase() === catName.toLowerCase()) || {};
    return {
      icon: catData.icon || staticCat.icon || '📚',
      image: staticCat.image || '/cat-general.png',
      colorClass: staticCat.colorClass || 'text-red-500 bg-red-500/10 border-red-500/20',
      borderGlowClass: catData.colorClass || staticCat.borderGlowClass || 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]',
    };
  };
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
            {contestsLoading && contests.length === 0
              ? Array.from({ length: 5 }).map((_, index) => (
                  <ContestCard key={index} isLoading={true} />
                ))
              : contests.map((contest, index) => {
                  const categoryName = contest.category?.name || contest.category || 'General Knowledge';
                  const catTheme = getCategoryTheme(categoryName);
                  const prize = contest.prizePool !== undefined ? parseFloat(contest.prizePool) : (contest.prize || 0);
                  const entry = contest.entryFee !== undefined ? parseFloat(contest.entryFee) : (contest.entry || 0);
                  const joined = contest.joined !== undefined ? contest.joined : 0;
                  const image = contest.image || catTheme.image;
                  const date = contest.startTime
                    ? new Date(contest.startTime).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) + ', 10:00 Am'
                    : (contest.date || '');
                  return (
                    <ContestCard
                      key={index}
                      category={categoryName}
                      title={contest.title}
                      prize={prize}
                      entry={entry}
                      joined={joined}
                      image={image}
                      date={date}
                    />
                  );
                })}
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
            {categoriesLoading && categories.length === 0
              ? Array.from({ length: 7 }).map((_, index) => (
                  <CategoryCard key={index} isLoading={true} />
                ))
              : categories.map((category, index) => {
                  const catTheme = getCategoryTheme(category.name, category);
                  return (
                    <CategoryCard
                      key={index}
                      name={category.name}
                      icon={catTheme.icon}
                      image={catTheme.image}
                      colorClass={catTheme.colorClass}
                      borderGlowClass={catTheme.borderGlowClass}
                      onClick={() => navigate(`/contests?category=${encodeURIComponent(category.name.toLowerCase())}`)}
                    />
                  );
                })}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Know Champ? */}
      <WhyChooseUs isLoading={featuresLoading} features={features} />

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
