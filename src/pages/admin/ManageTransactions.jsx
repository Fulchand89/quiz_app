import React, { useState } from 'react';
import { Search, Filter, RotateCw, Download } from 'lucide-react';
import Table from '../../components/common/Table';

const ManageTransactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const transactions = [
    { id: 'TXN100245', user: 'Aarav Mehta', type: 'Entry Fee', amount: '₹50', method: 'UPI - Google Pay', status: 'Successful', date: '23 Jun 2026, 10:30 AM' },
    { id: 'TXN100244', user: 'Isha Sharma', type: 'Coins Pack', amount: '₹100', method: 'Credit Card', status: 'Successful', date: '23 Jun 2026, 09:15 AM' },
    { id: 'TXN100243', user: 'Kabir Singh', type: 'Withdrawal', amount: '₹500', method: 'Bank Transfer', status: 'Pending', date: '22 Jun 2026, 08:45 PM' },
    { id: 'TXN100242', user: 'Riya Patel', type: 'Entry Fee', amount: '₹10', method: 'Wallet Coins', status: 'Successful', date: '22 Jun 2026, 04:20 PM' },
    { id: 'TXN100241', user: 'Vivaan Joshi', type: 'Entry Fee', amount: '₹100', method: 'UPI - Paytm', status: 'Failed', date: '22 Jun 2026, 02:10 PM' },
  ];

  const columns = [
    { key: 'id', label: 'TXN ID', cellClassName: 'font-mono text-[#E94B4B]' },
    { key: 'user', label: 'User', cellClassName: 'font-semibold' },
    {
      key: 'type',
      label: 'Transaction Type',
      render: (val) => (
        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
          val === 'Entry Fee' ? 'bg-blue-500/15 text-blue-400' :
          val === 'Coins Pack' ? 'bg-amber-500/15 text-amber-400' : 'bg-purple-500/15 text-purple-400'
        }`}>
          {val}
        </span>
      )
    },
    { key: 'amount', label: 'Amount', cellClassName: 'text-white font-medium' },
    { key: 'method', label: 'Payment Method', cellClassName: 'text-gray-300 text-sm' },
    { key: 'date', label: 'Date & Time', cellClassName: 'text-gray-400 text-sm' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
          val === 'Successful' ? 'bg-green-500/15 text-green-500' :
          val === 'Pending' ? 'bg-yellow-500/15 text-yellow-500' : 'bg-red-500/15 text-red-500'
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
          <h1 className="text-xl font-bold">Manage Transactions</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time ledger of deposit transactions, entry fee receipts, and platform records.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer">
          <Download size={16} /> Export Excel
        </button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Txn ID or User..."
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

        <Table columns={columns} data={transactions} />
      </div>
    </div>
  );
};

export default ManageTransactions;
