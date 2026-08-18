import React, { useState } from 'react';
import { Trophy, HelpCircle, Coins, Clock, Info } from 'lucide-react';

const CreateContest = () => {
  const [successMsg, setSuccessMsg] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10">
        <h1 className="text-xl font-bold">Create Contest</h1>
        <p className="text-xs text-gray-400 mt-1">Configure and launch a new live or scheduled quiz contest.</p>
      </div>

      <div className="bg-[#0f1117] text-white p-6 rounded-2xl border border-white/10 max-w-4xl space-y-6">
        <h2 className="text-lg font-bold flex items-center gap-2"><Trophy className="text-[#fb7185]" /> Contest Specifications</h2>
        
        <form onSubmit={(e) => { e.preventDefault(); setSuccessMsg(true); }} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Contest Title</label>
              <input
                required
                type="text"
                placeholder="e.g. Weekly Grand GK Challenge"
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Category & Subject</label>
              <select required className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]">
                <option value="">Select Target Subject</option>
                <option>General Knowledge - World Geography</option>
                <option>Science & Tech - Physics</option>
                <option>Mathematics - Algebra</option>
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
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
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
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Max Participants</label>
              <input
                required
                type="number"
                placeholder="e.g. 100"
                className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Contest Starts At</label>
              <div className="relative">
                <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  required
                  type="datetime-local"
                  className="block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5">Number of Questions</label>
              <select required className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]">
                <option>10 Questions (Standard)</option>
                <option>20 Questions (Grand)</option>
                <option>30 Questions (Ultra)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button type="button" className="px-4 py-2 border border-gray-600 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
              Save Draft
            </button>
            <button type="submit" className="px-4 py-2 bg-[#fb7185] hover:bg-[#a86634] text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
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
