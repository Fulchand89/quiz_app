import React, { useState } from 'react';
import { Search, RotateCw, Plus } from 'lucide-react';
import Table from '../../components/common/Table';

const TOPICS = [
  { id: 'TOP001', name: 'Thermodynamics', subject: 'Physics', category: 'Science & Technology', questionsCount: 30, status: 'Active' },
  { id: 'TOP002', name: 'Periodic Table', subject: 'Chemistry', category: 'Science & Technology', questionsCount: 25, status: 'Active' },
  { id: 'TOP003', name: 'Mughal Empire', subject: 'Indian History', category: 'History & Culture', questionsCount: 40, status: 'Active' },
  { id: 'TOP004', name: 'European Capitals', subject: 'World Geography', category: 'General Knowledge', questionsCount: 35, status: 'Active' },
  { id: 'TOP005', name: 'Quadratic Equations', subject: 'Algebra', category: 'Mathematics & Logic', questionsCount: 20, status: 'Active' },
];

const COLUMNS = [
  { key: 'id', label: 'Topic ID', cellClassName: 'font-mono text-[#E94B4B]' },
  { key: 'name', label: 'Topic Name', cellClassName: 'font-semibold' },
  { key: 'subject', label: 'Subject', cellClassName: 'text-gray-300' },
  { key: 'category', label: 'Category', cellClassName: 'text-gray-400 text-sm' },
  { key: 'questionsCount', label: 'Questions', headerClassName: 'text-center', cellClassName: 'text-center text-white font-medium' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
        val === 'Active' ? 'bg-green-500/15 text-green-500' : 'bg-gray-500/15 text-gray-400'
      }`}>
        {val}
      </span>
    )
  }
];

const ManageTopics = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Manage Topics</h1>
          <p className="text-xs text-gray-400 mt-1">Configure individual quiz topics mapping to subjects.</p>
        </div>
       <button className="flex items-center gap-2 px-4 py-2 bg-[linear-gradient(178.27deg,#E94B4B_1.6%,#911616_126.9%)] hover:opacity-90 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
  <Plus size={16} /> Add Topic
</button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics..."
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

        <Table columns={COLUMNS} data={TOPICS} />
      </div>
    </div>
  );
};

export default ManageTopics;
