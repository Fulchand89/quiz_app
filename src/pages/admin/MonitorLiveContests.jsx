import React, { useState } from 'react';
import { Search, RotateCw, Play, Users } from 'lucide-react';
import Table from '../../components/common/Table';

const LIVE_CONTESTS = [
  { id: 'CNT001', title: 'Grand GK Challenge #122', category: 'General Knowledge', entryFee: '₹50', prizePool: '₹5,000', participants: '95/100', timeRemaining: '4 mins 20 secs' },
  { id: 'CNT002', title: 'Physics Basics Sprint', category: 'Science & Tech', entryFee: 'Free', prizePool: '₹1,000', participants: '45/100', timeRemaining: '8 mins 15 secs' },
  { id: 'CNT003', title: 'Speed Mathematics', category: 'Mathematics', entryFee: '₹20', prizePool: '₹2,000', participants: '82/100', timeRemaining: '1 min 50 secs' },
];

const COLUMNS = [
  { key: 'id', label: 'Contest ID', cellClassName: 'font-mono text-[#E94B4B]' },
  { key: 'title', label: 'Contest Name', cellClassName: 'font-semibold' },
  { key: 'category', label: 'Category', cellClassName: 'text-gray-300' },
  { key: 'entryFee', label: 'Entry Fee', cellClassName: 'text-gray-400 font-medium' },
  { key: 'prizePool', label: 'Prize Pool', cellClassName: 'text-amber-500 font-bold' },
  {
    key: 'participants',
    label: 'Live Participants',
    render: (val) => (
      <div className="flex items-center gap-1.5 font-medium text-white">
        <Users size={14} className="text-[#E94B4B]" />
        <span>{val}</span>
      </div>
    )
  },
  { key: 'timeRemaining', label: 'Time Remaining', cellClassName: 'text-[#E94B4B] font-medium animate-pulse' },
  {
    key: 'status',
    label: 'Live Status',
    render: () => (
      <span className="flex items-center gap-1.5 text-xs text-green-500 font-bold">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shrink-0" />
        <span>Active</span>
      </span>
    )
  }
];

const MonitorLiveContests = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Monitor Live Contests</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time supervision of active contests, live scoreboards, and active rooms.</p>
        </div>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search active contests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer">
              <RotateCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <Table columns={COLUMNS} data={LIVE_CONTESTS} />
      </div>
    </div>
  );
};

export default MonitorLiveContests;
