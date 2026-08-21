import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/know-champ/Navbar';
import Footer from '../../components/know-champ/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';
import ContestCard from '../../components/know-champ/ContestCard';
import { KNOW_CHAMP_CATEGORIES, KNOW_CHAMP_CONTESTS } from '../../constants/knowChampData';
import { categoryService } from '../../api/services/categoryService';
import { contestService } from '../../api/services/contestService';
import { Search, Filter } from 'lucide-react';

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

const Contest = () => {
  const location = useLocation();
  const contestsSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState(KNOW_CHAMP_CATEGORIES);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [contests, setContests] = useState(KNOW_CHAMP_CONTESTS);
  const [contestsLoading, setContestsLoading] = useState(true);

  React.useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await categoryService.getPublicCategories();
        if (res?.success && Array.isArray(res.data)) {
          setCategories(mergeCategories(KNOW_CHAMP_CATEGORIES, res.data));
        }
      } catch (err) {
        console.error('Error loading public categories:', err);
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
        console.error('Error loading public contests:', err);
      } finally {
        setContestsLoading(false);
      }
    };

    loadCategories();
    loadContests();
  }, []);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryQuery = queryParams.get('category');
    if (categoryQuery && categories.length > 0) {
      const foundCat = categories.find(
        (c) => c.name.toLowerCase() === categoryQuery.toLowerCase()
      );
      if (foundCat) {
        setSelectedCategory(foundCat.name);
        setTimeout(() => {
          contestsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.search, categories]);

  const getCategoryTheme = (catName) => {
    const staticCat = KNOW_CHAMP_CATEGORIES.find(c => c.name.toLowerCase() === catName.toLowerCase()) || {};
    return {
      icon: staticCat.icon || '📚',
      image: staticCat.image || '/cat-general.png',
      colorClass: staticCat.colorClass || 'text-red-500 bg-red-500/10 border-red-500/20',
      borderGlowClass: staticCat.borderGlowClass || 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]',
    };
  };

  const filteredContests = contests.filter((contest) => {
    const catName = contest.category?.name || contest.category || 'General Knowledge';
    const matchesCategory = selectedCategory === 'All' || catName.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      catName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#090b15] text-white flex flex-col font-sans select-none overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      {/* Title Header */}
      <div className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 bg-gradient-to-b from-[#120813] to-[#090b15] border-b border-gray-900 flex flex-col items-center text-center px-4">
        <div className="absolute inset-0 bg-red-950/10 blur-xl pointer-events-none rounded-full"></div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 relative z-10 text-white">
          Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Contests</span>
        </h1>
        <p className="text-[#FFFFFF] max-w-xl mx-auto text-xs sm:text-sm md:text-base relative z-10">
          Browse through all active quizzes, choose your favorite category, and download our app to play and win!
        </p>
      </div>

      <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
        {/* Search and Filters Bar */}
        <div ref={contestsSectionRef} className="flex flex-col gap-3 sm:gap-4 justify-between items-center mb-6 sm:mb-10 bg-[#0e1121] border border-gray-800/80 p-3 sm:p-4 rounded-2xl w-full">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search contests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14182e] border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-gray-500 text-white focus:outline-none focus:border-red-500 transition duration-300"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar pb-1">
            {categoriesLoading && categories.length === 0 ? (
              <>
                <div className="h-7 sm:h-[34px] w-20 sm:w-24 bg-[#14182e] border border-gray-800/40 rounded-xl animate-pulse flex-shrink-0"></div>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="h-7 sm:h-[34px] w-24 sm:w-28 bg-[#14182e] border border-gray-800/40 rounded-xl animate-pulse flex-shrink-0"></div>
                ))}
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 border whitespace-nowrap flex-shrink-0 ${selectedCategory === 'All'
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'bg-[#14182e] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
                    }`}
                >
                  All Contests
                </button>
                {categories.map((cat, idx) => {
                  const catTheme = getCategoryTheme(cat.name);
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 border flex items-center gap-1 sm:gap-1.5 whitespace-nowrap flex-shrink-0 ${selectedCategory === cat.name
                          ? 'bg-red-500 border-red-500 text-white'
                          : 'bg-[#14182e] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
                        }`}
                    >
                      <span>{catTheme.icon}</span>
                      {cat.name}
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Contests Grid */}
        {contestsLoading && contests.length === 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <ContestCard key={index} isLoading={true} />
            ))}
          </div>
        ) : filteredContests.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredContests.map((contest, index) => {
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
                  maxPlayers={contest.maxParticipants || contest.maxPlayers}
                  icon={catTheme.icon}
                  colorClass={catTheme.colorClass}
                  image={image}
                  date={date}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20 bg-[#0e1121] rounded-2xl border border-gray-800/80">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">No Contests Found</h3>
            <p className="text-xs sm:text-sm text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contest;
