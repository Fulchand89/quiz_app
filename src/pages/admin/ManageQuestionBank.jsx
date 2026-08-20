import React, { useState } from 'react';
import { Search, Filter, RotateCw, Plus, Edit, Trash2 } from 'lucide-react';
import Table from '../../components/common/Table';

const ManageQuestionBank = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const questions = [
    { id: 'QST001', question: 'What is the SI unit of power?', topic: 'Thermodynamics', subject: 'Physics', difficulty: 'Easy', correctOption: 'Watt' },
    { id: 'QST002', question: 'Which element has the atomic number 1?', topic: 'Periodic Table', subject: 'Chemistry', difficulty: 'Easy', correctOption: 'Hydrogen' },
    { id: 'QST003', question: 'Who built the Taj Mahal?', topic: 'Mughal Empire', subject: 'Indian History', difficulty: 'Medium', correctOption: 'Shah Jahan' },
    { id: 'QST004', question: 'What is the capital of France?', topic: 'European Capitals', subject: 'World Geography', difficulty: 'Easy', correctOption: 'Paris' },
    { id: 'QST005', question: 'Solve x^2 - 5x + 6 = 0.', topic: 'Quadratic Equations', subject: 'Algebra', difficulty: 'Hard', correctOption: 'x = 2, 3' },
  ];

  const columns = [
    { key: 'id', label: 'QID', cellClassName: 'font-mono text-[#E94B4B]' },
    { key: 'question', label: 'Question text', cellClassName: 'font-medium max-w-[280px] truncate' },
    { key: 'subject', label: 'Subject', cellClassName: 'text-gray-300' },
    { key: 'topic', label: 'Topic', cellClassName: 'text-gray-400 text-sm' },
    {
      key: 'difficulty',
      label: 'Difficulty',
      render: (val) => (
        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
          val === 'Easy' ? 'bg-green-500/15 text-green-400' :
          val === 'Medium' ? 'bg-yellow-500/15 text-yellow-400' : 'bg-red-500/15 text-red-400'
        }`}>
          {val}
        </span>
      )
    },
    { key: 'correctOption', label: 'Correct Answer', cellClassName: 'text-amber-500 font-semibold' },
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
          <h1 className="text-xl font-bold">Question Bank</h1>
          <p className="text-xs text-gray-400 mt-1">Review, filter, edit or add individual quiz questions.</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
          style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
        >
          <Plus size={16} /> Add Question
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions by text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer">
              <RotateCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <Table columns={columns} data={questions} />
      </div>
    </div>
  );
};

export default ManageQuestionBank;
