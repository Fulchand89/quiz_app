import React, { useState } from 'react';
import Navbar from '../../components/know-champ/Navbar';
import Footer from '../../components/know-champ/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';
import ContestCard from '../../components/know-champ/ContestCard';
import { KNOW_CHAMP_CONTESTS, KNOW_CHAMP_CATEGORIES } from '../../constants/knowChampData';
import { Search, Filter } from 'lucide-react';

const Contest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContests = KNOW_CHAMP_CONTESTS.filter((contest) => {
    const matchesCategory = selectedCategory === 'All' || contest.category === selectedCategory;
    const matchesSearch = contest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          contest.category.toLowerCase().includes(searchQuery.toLowerCase());
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
        <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base relative z-10">
          Browse through all active quizzes, choose your favorite category, and download our app to play and win!
        </p>
      </div>

      <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1425px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
        {/* Search and Filters Bar */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-between items-center mb-6 sm:mb-10 bg-[#0e1121] border border-gray-800/80 p-3 sm:p-4 rounded-2xl w-full">
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
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 border whitespace-nowrap flex-shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-red-500 border-red-500 text-white'
                  : 'bg-[#14182e] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
              }`}
            >
              All Contests
            </button>
            {KNOW_CHAMP_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 border flex items-center gap-1 sm:gap-1.5 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat.name
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'bg-[#14182e] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Contests Grid */}
        {filteredContests.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredContests.map((contest, index) => (
              <ContestCard
                key={index}
                category={contest.category}
                title={contest.title}
                prize={contest.prize}
                entry={contest.entry}
                joined={contest.joined}
                maxPlayers={contest.maxPlayers}
                icon={contest.icon}
                colorClass={contest.colorClass}
                image={contest.image}
                date={contest.date}
              />
            ))}
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
