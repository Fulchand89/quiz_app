import React, { useState } from 'react';
import { Search, Filter, RotateCw, UserPlus } from 'lucide-react';
import Table from '../../components/common/Table';

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const users = [
    { id: 'USR001', name: 'Aarav Mehta', email: 'aarav@gmail.com', joined: '12 Aug 2026', quizzesPlayed: 145, coinsEarned: 1200, status: 'Active' },
    { id: 'USR002', name: 'Isha Sharma', email: 'isha@yahoo.com', joined: '14 Aug 2026', quizzesPlayed: 92, coinsEarned: 850, status: 'Active' },
    { id: 'USR003', name: 'Kabir Singh', email: 'kabir@outlook.com', joined: '15 Aug 2026', quizzesPlayed: 210, coinsEarned: 2450, status: 'Active' },
    { id: 'USR004', name: 'Riya Patel', email: 'riya@gmail.com', joined: '16 Aug 2026', quizzesPlayed: 5, coinsEarned: 50, status: 'Inactive' },
    { id: 'USR005', name: 'Vivaan Joshi', email: 'vivaan@gmail.com', joined: '17 Aug 2026', quizzesPlayed: 12, coinsEarned: 180, status: 'Blocked' },
  ];

  const columns = [
    { key: 'id', label: 'User ID', cellClassName: 'font-mono text-[#fb7185]' },
    { key: 'name', label: 'Name', cellClassName: 'font-semibold' },
    { key: 'email', label: 'Email' },
    { key: 'joined', label: 'Date Joined' },
    { key: 'quizzesPlayed', label: 'Quizzes Played', headerClassName: 'text-center', cellClassName: 'text-center' },
    { key: 'coinsEarned', label: 'Coins Earned', headerClassName: 'text-center', cellClassName: 'text-center text-amber-500 font-bold' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
          val === 'Active' ? 'bg-green-500/15 text-green-500' :
          val === 'Blocked' ? 'bg-red-500/15 text-red-500' : 'bg-gray-500/15 text-gray-400'
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
          <h1 className="text-xl font-bold">Manage Users</h1>
          <p className="text-xs text-gray-400 mt-1">View, search, filter and manage registered platform users.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#fb7185] hover:bg-[#a86634] text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
          <UserPlus size={16} /> Add New User
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#fb7185]"
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

        <Table columns={columns} data={users} />
      </div>
    </div>
  );
};

export default ManageUsers;
