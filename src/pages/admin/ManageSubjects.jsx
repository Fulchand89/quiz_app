import React, { useState } from 'react';
import { Search, RotateCw, Plus } from 'lucide-react';
import Table from '../../components/common/Table';

const SUBJECTS = [
  { id: 'SUB001', name: 'Physics', category: 'Science & Technology', topicsCount: 6, questionsCount: 120, status: 'Active' },
  { id: 'SUB002', name: 'Chemistry', category: 'Science & Technology', topicsCount: 5, questionsCount: 100, status: 'Active' },
  { id: 'SUB003', name: 'Indian History', category: 'History & Culture', topicsCount: 4, questionsCount: 90, status: 'Active' },
  { id: 'SUB004', name: 'World Geography', category: 'General Knowledge', topicsCount: 6, questionsCount: 110, status: 'Active' },
  { id: 'SUB005', name: 'Algebra', category: 'Mathematics & Logic', topicsCount: 4, questionsCount: 80, status: 'Active' },
];

const COLUMNS = [
  { key: 'id', label: 'Subject ID', cellClassName: 'font-mono text-[#E94B4B]' },
  { key: 'name', label: 'Subject Name', cellClassName: 'font-semibold' },
  { key: 'category', label: 'Parent Category', cellClassName: 'text-gray-300' },
  { key: 'topicsCount', label: 'Topics', headerClassName: 'text-center', cellClassName: 'text-center' },
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

const ManageSubjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Manage Subjects</h1>
          <p className="text-xs text-gray-400 mt-1">Configure subjects mapping to top level quiz categories.</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
          style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
        >
          <Plus size={16} /> Add Subject
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search subjects..."
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

        <Table columns={COLUMNS} data={SUBJECTS} />
      </div>
    </div>
  );
};

export default ManageSubjects;
