import React, { useState } from 'react';
import { Search, RotateCw, Plus, Edit, Award } from 'lucide-react';
import Table from '../../components/common/Table';

const ConfigurePrizePool = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const pools = [
    { id: 'POOL001', name: 'Winner Takes All', distribution: 'Rank 1: 100%', minParticipants: 2, platformFee: '10%' },
    { id: 'POOL002', name: 'Top 3 Split (50-30-20)', distribution: 'Rank 1: 50%, Rank 2: 30%, Rank 3: 20%', minParticipants: 5, platformFee: '10%' },
    { id: 'POOL003', name: 'Top 10% Winners', distribution: 'Proportional distribution to top 10% scorers', minParticipants: 50, platformFee: '12%' },
    { id: 'POOL004', name: 'Double Or Nothing', distribution: 'Top 50% double their entry fee', minParticipants: 10, platformFee: '15%' },
    { id: 'POOL005', name: 'Graduated Scale (Top 5)', distribution: '1st: 40%, 2nd: 25%, 3rd: 15%, 4th: 12%, 5th: 8%', minParticipants: 10, platformFee: '12%' },
  ];

  const columns = [
    { key: 'id', label: 'Pool ID', cellClassName: 'font-mono text-[#E94B4B]' },
    { key: 'name', label: 'Template Name', cellClassName: 'font-semibold' },
    { key: 'distribution', label: 'Prize Share Distribution Description', cellClassName: 'text-gray-300 max-w-xs truncate' },
    { key: 'minParticipants', label: 'Min Users Required', headerClassName: 'text-center', cellClassName: 'text-center' },
    { key: 'platformFee', label: 'Admin Service Fee Deducted', cellClassName: 'text-amber-500 font-bold' },
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
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Configure Prize Pools</h1>
          <p className="text-xs text-gray-400 mt-1">Manage winner distribution templates and platforms payout splits.</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
          style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
        >
          <Plus size={16} /> Create Prize Template
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search templates..."
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

        <Table columns={columns} data={pools} />
      </div>
    </div>
  );
};

export default ConfigurePrizePool;
