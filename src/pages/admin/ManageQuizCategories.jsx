import React, { useState } from 'react';
import { Search, RotateCw, Plus, FolderOpen } from 'lucide-react';
import Table from '../../components/common/Table';

const ManageQuizCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { id: 'CAT001', name: 'General Knowledge', code: 'GK', subjectsCount: 5, topicsCount: 22, questionsCount: 450, status: 'Active' },
    { id: 'CAT002', name: 'Science & Technology', code: 'SCI_TECH', subjectsCount: 4, topicsCount: 18, questionsCount: 380, status: 'Active' },
    { id: 'CAT003', name: 'Mathematics & Logic', code: 'MATH_LOGIC', subjectsCount: 3, topicsCount: 15, questionsCount: 290, status: 'Active' },
    { id: 'CAT004', name: 'History & Culture', code: 'HIST_CULT', subjectsCount: 2, topicsCount: 10, questionsCount: 180, status: 'Active' },
    { id: 'CAT005', name: 'Sports & Entertainment', code: 'SPORTS_ENT', subjectsCount: 4, topicsCount: 16, questionsCount: 320, status: 'Inactive' },
  ];

  const columns = [
    { key: 'id', label: 'Category ID', cellClassName: 'font-mono text-[#fb7185]' },
    { key: 'name', label: 'Category Name', cellClassName: 'font-semibold' },
    { key: 'code', label: 'Code', cellClassName: 'font-mono text-sm' },
    { key: 'subjectsCount', label: 'Subjects', headerClassName: 'text-center', cellClassName: 'text-center' },
    { key: 'topicsCount', label: 'Topics', headerClassName: 'text-center', cellClassName: 'text-center' },
    { key: 'questionsCount', label: 'Total Questions', headerClassName: 'text-center', cellClassName: 'text-center text-white font-medium' },
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

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Manage Quiz Categories</h1>
          <p className="text-xs text-gray-400 mt-1">Configure, add and edit top-level quiz categories.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#fb7185] hover:bg-[#a86634] text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
          <Plus size={16} /> Add Category
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search categories by name or code..."
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

        <Table columns={columns} data={categories} />
      </div>
    </div>
  );
};

export default ManageQuizCategories;
