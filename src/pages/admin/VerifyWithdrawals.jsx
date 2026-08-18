import React, { useState } from 'react';
import { Search, RotateCw, Check, X } from 'lucide-react';
import Table from '../../components/common/Table';

const VerifyWithdrawals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const withdrawals = [
    { id: 'WTH001', user: 'Aarav Mehta', amount: '₹1,500', target: 'UPI: aarav@okaxis', requestDate: '23 Jun 2026, 11:20 AM', status: 'Pending' },
    { id: 'WTH002', user: 'Kabir Singh', amount: '₹5,000', target: 'Bank: HDFC A/C ...9843', requestDate: '23 Jun 2026, 09:10 AM', status: 'Pending' },
    { id: 'WTH003', user: 'Isha Sharma', amount: '₹800', target: 'UPI: isha@okicici', requestDate: '22 Jun 2026, 04:45 PM', status: 'Approved' },
    { id: 'WTH004', user: 'Neha Gupta', amount: '₹2,500', target: 'UPI: neha@paytm', requestDate: '21 Jun 2026, 10:15 AM', status: 'Rejected' },
  ];

  const columns = [
    { key: 'id', label: 'Withdrawal ID', cellClassName: 'font-mono text-[#fb7185]' },
    { key: 'user', label: 'User Name', cellClassName: 'font-semibold' },
    { key: 'amount', label: 'Requested Amount', cellClassName: 'text-white font-bold' },
    { key: 'target', label: 'Destination Account/UPI', cellClassName: 'text-gray-300 font-mono text-sm' },
    { key: 'requestDate', label: 'Request Date', cellClassName: 'text-gray-400 text-sm' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
          val === 'Approved' ? 'bg-green-500/15 text-green-500' :
          val === 'Pending' ? 'bg-yellow-500/15 text-yellow-500' : 'bg-red-500/15 text-red-500'
        }`}>
          {val}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Verification Actions',
      headerClassName: 'text-center',
      cellClassName: 'text-center',
      render: (val, row) => (
        row.status === 'Pending' ? (
          <div className="flex items-center justify-center gap-2">
            <button className="flex items-center gap-1 px-2.5 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-semibold cursor-pointer">
              <Check size={12} /> Approve
            </button>
            <button className="flex items-center gap-1 px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold cursor-pointer">
              <X size={12} /> Reject
            </button>
          </div>
        ) : (
          <span className="text-xs text-gray-500">Verified</span>
        )
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0f1117] text-white p-5 rounded-2xl shadow-sm border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Verify Withdrawals</h1>
          <p className="text-xs text-gray-400 mt-1">Review, approve, or decline cash withdrawal requests submitted by users.</p>
        </div>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Withdrawal ID or User..."
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

        <Table columns={columns} data={withdrawals} />
      </div>
    </div>
  );
};

export default VerifyWithdrawals;
