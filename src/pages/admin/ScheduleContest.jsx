import React, { useState } from 'react';
import { Search, RotateCw, Calendar, Edit, Trash2 } from 'lucide-react';
import Table from '../../components/common/Table';

const ScheduleContest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const contests = [
    { id: 'CNT004', title: 'Weekend Sci-Tech Sprint', category: 'Science & Tech', fee: '₹30', prizePool: '₹3,000', startsAt: '22 Aug 2026, 06:00 PM', maxEntries: 150 },
    { id: 'CNT005', title: 'Ancient Kingdoms Quiz', category: 'History & Culture', fee: 'Free', prizePool: '₹500', startsAt: '23 Aug 2026, 04:00 PM', maxEntries: 200 },
    { id: 'CNT006', title: 'Trigonometry Challenge', category: 'Mathematics', fee: '₹50', prizePool: '₹5,000', startsAt: '24 Aug 2026, 08:00 PM', maxEntries: 100 },
    { id: 'CNT007', title: 'Mega GK Showdown', category: 'General Knowledge', fee: '₹100', prizePool: '₹10,000', startsAt: '29 Aug 2026, 07:00 PM', maxEntries: 300 },
  ];

  const columns = [
    { key: 'id', label: 'Contest ID', cellClassName: 'font-mono text-[#fb7185]' },
    { key: 'title', label: 'Contest Title', cellClassName: 'font-semibold' },
    { key: 'category', label: 'Category', cellClassName: 'text-gray-300' },
    { key: 'fee', label: 'Entry Fee', cellClassName: 'text-gray-400 font-medium' },
    { key: 'prizePool', label: 'Prize Pool', cellClassName: 'text-amber-500 font-bold' },
    { key: 'startsAt', label: 'Starts At', cellClassName: 'text-white' },
    { key: 'maxEntries', label: 'Max Entries', headerClassName: 'text-center', cellClassName: 'text-center' },
    {
      key: 'actions',
      label: 'Actions',
      headerClassName: 'text-center',
      cellClassName: 'text-center',
      render: () => (
        <div className="flex items-center justify-center gap-1.5">
          <button className="p-1 text-gray-400 hover:text-white rounded transition-colors cursor-pointer">
            <Edit size={14} />
          </button>
          <button className="p-1 text-red-500/70 hover:text-red-500 rounded transition-colors cursor-pointer">
            <Trash2 size={14} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Schedule Contests</h1>
          <p className="text-xs text-gray-400 mt-1">Manage and edit scheduled quizzes before they go live.</p>
        </div>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search scheduled contests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer">
              <RotateCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <Table columns={columns} data={contests} />
      </div>
    </div>
  );
};

export default ScheduleContest;
