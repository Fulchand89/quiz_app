import React, { useState } from 'react';
import { Search, RotateCw, Plus, Edit, ShieldAlert } from 'lucide-react';
import Table from '../../components/common/Table';

const TIERS = [
  { id: 'FEE001', tierName: 'Free Practice', entryFee: '₹0', entryCoins: '0 Coins', platformCut: '0%', status: 'Active' },
  { id: 'FEE002', tierName: 'Bronze Tier', entryFee: '₹10', entryCoins: '10 Coins', platformCut: '10%', status: 'Active' },
  { id: 'FEE003', tierName: 'Silver Tier', entryFee: '₹25', entryCoins: '25 Coins', platformCut: '10%', status: 'Active' },
  { id: 'FEE004', tierName: 'Gold Tier', entryFee: '₹50', entryCoins: '50 Coins', platformCut: '12%', status: 'Active' },
  { id: 'FEE005', tierName: 'Diamond Tier', entryFee: '₹100', entryCoins: '100 Coins', platformCut: '15%', status: 'Active' },
  { id: 'FEE006', tierName: 'Grand Masters', entryFee: '₹500', entryCoins: '500 Coins', platformCut: '20%', status: 'Active' },
];

const COLUMNS = [
  { key: 'id', label: 'Tier ID', cellClassName: 'font-mono text-[#E94B4B]' },
  { key: 'tierName', label: 'Tier Name', cellClassName: 'font-semibold' },
  { key: 'entryFee', label: 'Entry Fee Amount', cellClassName: 'text-white font-medium' },
  { key: 'entryCoins', label: 'Coin Conversion Equivalent', cellClassName: 'text-amber-500 font-medium' },
  { key: 'platformCut', label: 'Platform Commission Cut', cellClassName: 'text-gray-300' },
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
  },
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

const ConfigureEntryFee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Configure Entry Fee</h1>
          <p className="text-xs text-gray-400 mt-1">Configure entry fee tiers, coin equivalents, and platform commission cuts.</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
          style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
        >
          <Plus size={16} /> Create Fee Tier
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tiers..."
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

        <Table columns={COLUMNS} data={TIERS} />
      </div>
    </div>
  );
};

export default ConfigureEntryFee;
