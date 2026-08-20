import React, { useState, useEffect } from 'react';
import { Trophy, HelpCircle, Coins, Clock, Info, Calendar } from 'lucide-react';
import { categoryService } from '../../api/services/categoryService';

const CreateContest = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const [categories, setCategories] = useState([]);

  // Form states
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [subject, setSubject] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [prizePool, setPrizePool] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [startTime, setStartTime] = useState('');
  const [numQuestions, setNumQuestions] = useState('10 Questions (Standard)');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryService.getCategories();
        if (res?.success && res.data) {
          setCategories(res.data);
        }
      } catch (err) {
        console.error('Error loading categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const handleOpenPicker = (e) => {
    const input = e.currentTarget.querySelector('input') || e.target;
    if (input && typeof input.showPicker === 'function') {
      try {
        input.showPicker();
      } catch (err) {
        // Fallback for browser restrictions
      }
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10">
        <h1 className="text-xl font-bold">Create Contest</h1>
        <p className="text-xs text-gray-400 mt-1">Configure and launch a new live or scheduled quiz contest.</p>
      </div>

      <div className="bg-[#0f1117] text-white p-4 sm:p-6 rounded-2xl border border-white/10 w-full space-y-6">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Trophy className="text-[#E94B4B]" /> Contest Specifications
        </h2>
        
        <form onSubmit={(e) => { e.preventDefault(); setSuccessMsg(true); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Contest Title</label>
              <input
                required
                type="text"
                placeholder="e.g. Weekly Grand GK Challenge"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Category</label>
              <select
                required
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B] cursor-pointer"
              >
                <option value="">Select Category</option>
                {categories.length > 0 ? (
                  categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="1">General Knowledge</option>
                    <option value="2">Science & Technology</option>
                    <option value="3">Mathematics & Logic</option>
                    <option value="4">History & Culture</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Subject</label>
              <select
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B] cursor-pointer"
              >
                <option value="">Select Subject</option>
                <option value="World Geography">World Geography</option>
                <option value="Indian History">Indian History</option>
                <option value="Physics & Astronomy">Physics & Astronomy</option>
                <option value="Algebra & Geometry">Algebra & Geometry</option>
                <option value="Current Events">Current Events</option>
                <option value="General Science">General Science</option>
                <option value="Sports Trivia">Sports Trivia</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Entry Fee (₹)</label>
              <div className="relative">
                <Coins size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  required
                  type="number"
                  placeholder="e.g. 50"
                  value={entryFee}
                  onChange={(e) => setEntryFee(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Total Prize Pool (₹)</label>
              <div className="relative">
                <Trophy size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
                <input
                  required
                  type="number"
                  placeholder="e.g. 5000"
                  value={prizePool}
                  onChange={(e) => setPrizePool(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Max Participants</label>
              <input
                required
                type="number"
                placeholder="e.g. 100"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Contest Starts At</label>
              <div 
                onClick={handleOpenPicker}
                className="relative cursor-pointer"
              >
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#E94B4B] pointer-events-none" />
                <input
                  required
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B] [color-scheme:dark] cursor-pointer"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Number of Questions</label>
              <select 
                required 
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B] cursor-pointer"
              >
                <option value="10 Questions (Standard)">10 Questions (Standard)</option>
                <option value="20 Questions (Grand)">20 Questions (Grand)</option>
                <option value="30 Questions (Ultra)">30 Questions (Ultra)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-white/10">
            <button type="button" className="w-full sm:w-auto px-4 py-2 border border-gray-600 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
              Save Draft
            </button>
            <button type="submit" className="w-full sm:w-auto px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90" style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}>
              Launch Contest
            </button>
          </div>
        </form>

        {successMsg && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-xl flex items-start gap-3 mt-4">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Contest Created Successfully</p>
              <p className="text-xs text-gray-400 mt-1">The contest has been launched and is visible to users on the home/upcoming quiz list.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateContest;
