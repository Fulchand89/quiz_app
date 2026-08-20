import React, { useState, useEffect } from 'react';
import { Search, RotateCw, Plus, Edit, Trash2, X } from 'lucide-react';
import Table from '../../components/common/Table';
import { contestService } from '../../api/services/contestService';
import { categoryService } from '../../api/services/categoryService';
import toast from 'react-hot-toast';

const ScheduleContest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contests, setContests] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' | 'edit'
  const [currentContest, setCurrentContest] = useState(null);

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [prizePool, setPrizePool] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [minParticipants, setMinParticipants] = useState('');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [isActive, setIsActive] = useState(true);

  const fetchContestsAndCategories = async () => {
    setLoading(true);
    try {
      const [contestRes, categoryRes] = await Promise.all([
        contestService.getContests(),
        categoryService.getCategories()
      ]);
      if (contestRes?.success) setContests(contestRes.data);
      if (categoryRes?.success) setCategories(categoryRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      toast.error('Failed to load contests or categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContestsAndCategories();
  }, []);

  const formatDateTimeForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(date.getTime() - tzoffset)).toISOString().slice(0, -1);
    return localISOTime.substring(0, 16); // yyyy-MM-ddThh:mm
  };

  const handleOpenAddModal = () => {
    setModalType('add');
    setCurrentContest(null);
    setTitle('');
    setDescription('');
    setCategoryId(categories[0]?.id || '');
    setStartTime('');
    setEndTime('');
    setEntryFee('0');
    setPrizePool('0');
    setMaxParticipants('100');
    setMinParticipants('2');
    setDurationMinutes('15');
    setIsActive(true);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (cnt) => {
    setModalType('edit');
    setCurrentContest(cnt);
    setTitle(cnt.title);
    setDescription(cnt.description || '');
    setCategoryId(cnt.categoryId || '');
    setStartTime(formatDateTimeForInput(cnt.startTime));
    setEndTime(formatDateTimeForInput(cnt.endTime));
    setEntryFee(parseFloat(cnt.entryFee).toString());
    setPrizePool(parseFloat(cnt.prizePool).toString());
    setMaxParticipants(cnt.maxParticipants?.toString() || '100');
    setMinParticipants(cnt.minParticipants?.toString() || '2');
    setDurationMinutes(cnt.durationMinutes?.toString() || '15');
    setIsActive(cnt.isActive);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      categoryId: categoryId ? parseInt(categoryId, 10) : null,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      entryFee: parseFloat(entryFee),
      prizePool: parseFloat(prizePool),
      maxParticipants: parseInt(maxParticipants, 10),
      minParticipants: parseInt(minParticipants, 10),
      durationMinutes: parseInt(durationMinutes, 10),
      isActive
    };

    try {
      if (modalType === 'add') {
        const res = await contestService.createContest(payload);
        if (res?.success) {
          toast.success('Contest scheduled successfully');
          fetchContestsAndCategories();
          setIsModalOpen(false);
        }
      } else {
        const res = await contestService.updateContest(currentContest.id, payload);
        if (res?.success) {
          toast.success('Contest updated successfully');
          fetchContestsAndCategories();
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error('Error saving contest:', err);
      toast.error(err.response?.data?.message || 'Error saving contest');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contest?')) {
      try {
        const res = await contestService.deleteContest(id);
        if (res?.success) {
          toast.success('Contest deleted successfully');
          fetchContestsAndCategories();
        }
      } catch (err) {
        console.error('Error deleting contest:', err);
        toast.error('Failed to delete contest');
      }
    }
  };

  const handleToggleStatus = async (cnt) => {
    const payload = {
      title: cnt.title,
      categoryId: cnt.categoryId,
      startTime: cnt.startTime,
      endTime: cnt.endTime,
      entryFee: parseFloat(cnt.entryFee),
      prizePool: parseFloat(cnt.prizePool),
      durationMinutes: cnt.durationMinutes,
      isActive: !cnt.isActive
    };
    try {
      const res = await contestService.updateContest(cnt.id, payload);
      if (res?.success) {
        toast.success(`Contest ${!cnt.isActive ? 'activated' : 'deactivated'}`);
        fetchContestsAndCategories();
      }
    } catch (err) {
      console.error('Error toggling status:', err);
      toast.error('Failed to toggle status');
    }
  };

  const filteredContests = contests.filter((cnt) => {
    const catName = cnt.category?.name || '';
    return cnt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           catName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const columns = [
    { key: 'id', label: 'Contest ID', cellClassName: 'font-mono text-[#E94B4B]' },
    { key: 'title', label: 'Contest Title', cellClassName: 'font-semibold' },
    {
      key: 'categoryId',
      label: 'Category',
      cellClassName: 'text-gray-300',
      render: (_, row) => row.category?.name || 'Unassigned'
    },
    {
      key: 'entryFee',
      label: 'Entry Fee',
      cellClassName: 'text-gray-400 font-medium',
      render: (val) => `₹${parseFloat(val)}`
    },
    {
      key: 'prizePool',
      label: 'Prize Pool',
      cellClassName: 'text-amber-500 font-bold',
      render: (val) => `₹${parseFloat(val).toLocaleString()}`
    },
    {
      key: 'startTime',
      label: 'Starts At',
      cellClassName: 'text-white',
      render: (val) => new Date(val).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    },
    {
      key: 'isActive',
      label: 'Status',
      render: (val, row) => (
        <button
          onClick={() => handleToggleStatus(row)}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
            val ? 'bg-green-500/15 text-green-500 hover:bg-green-500/25' : 'bg-gray-500/15 text-gray-400 hover:bg-gray-500/25'
          }`}
        >
          {val ? 'Active' : 'Inactive'}
        </button>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      headerClassName: 'text-center',
      cellClassName: 'text-center',
      render: (_, row) => (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleOpenEditModal(row)}
            className="p-1 text-gray-400 hover:text-white rounded transition-colors cursor-pointer"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1 text-red-500/70 hover:text-red-500 rounded transition-colors cursor-pointer"
          >
            <Trash2 size={16} />
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
        <button
          onClick={handleOpenAddModal}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
          style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
        >
          <Plus size={16} /> Schedule Contest
        </button>
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
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchContestsAndCategories}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer"
            >
              <RotateCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <Table columns={columns} data={filteredContests} loading={loading} />
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0f1117] border border-white/10 rounded-2xl w-full max-w-lg my-8 overflow-hidden shadow-xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">
                {modalType === 'add' ? 'Schedule New Contest' : 'Edit Contest Details'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Contest Title</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Weekly Grand Science Trivia"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Description (Optional)</label>
                  <textarea
                    placeholder="Enter details about this contest..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="2"
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Category</label>
                  <select
                    required
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Duration (Minutes)</label>
                  <input
                    required
                    type="number"
                    min="1"
                    placeholder="e.g. 15"
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Starts At</label>
                  <input
                    required
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Ends At</label>
                  <input
                    required
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Entry Fee (₹)</label>
                  <input
                    required
                    type="number"
                    min="0"
                    placeholder="e.g. 20"
                    value={entryFee}
                    onChange={(e) => setEntryFee(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Prize Pool (₹)</label>
                  <input
                    required
                    type="number"
                    min="0"
                    placeholder="e.g. 5000"
                    value={prizePool}
                    onChange={(e) => setPrizePool(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Max Participants</label>
                  <input
                    required
                    type="number"
                    min="1"
                    placeholder="e.g. 100"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Min Participants</label>
                  <input
                    required
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    value={minParticipants}
                    onChange={(e) => setMinParticipants(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="isActiveContest"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="w-4 h-4 rounded text-[#E94B4B] focus:ring-0 focus:ring-offset-0 bg-[#0f1117] border-gray-600 cursor-pointer"
                />
                <label htmlFor="isActiveContest" className="text-xs font-semibold text-gray-300 cursor-pointer">
                  Mark as Active
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-600 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
                  style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
                >
                  {modalType === 'add' ? 'Schedule' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleContest;
