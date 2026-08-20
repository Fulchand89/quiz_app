import React, { useState, useEffect } from 'react';
import { Search, RotateCw, Plus, Edit, Trash2, X } from 'lucide-react';
import Table from '../../components/common/Table';
import { categoryService } from '../../api/services/categoryService';
import toast from 'react-hot-toast';

const ManageQuizCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' | 'edit'
  const [currentCategory, setCurrentCategory] = useState(null);
  
  // Form states
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('📚');
  const [colorClass, setColorClass] = useState('hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]');
  const [isActive, setIsActive] = useState(true);

  const ICON_OPTIONS = [
    { value: '📚', label: '📚 General / Knowledge' },
    { value: '🔬', label: '🔬 Science' },
    { value: '📰', label: '📰 Current Affairs / News' },
    { value: '⚽', label: '⚽ Sports' },
    { value: '🎬', label: '🎬 Entertainment' },
    { value: '💻', label: '💻 Technology' },
    { value: '📜', label: '📜 History' },
    { value: '🧮', label: '🧮 Mathematics' },
    { value: '🌍', label: '🌍 Geography' },
    { value: '🎨', label: '🎨 Arts & Culture' },
    { value: '🌱', label: '🌱 Environment' },
    { value: '💼', label: '💼 Business' },
    { value: '⚕️', label: '⚕️ Health / Medical' },
    { value: '👨‍⚖️', label: '👨‍⚖️ Law / Politics' },
    { value: '🤖', label: '🤖 AI / Robotics' },
    { value: '✨', label: '✨ Other' },
  ];

  const COLOR_OPTIONS = [
    { value: 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]', label: 'Red' },
    { value: 'hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]', label: 'Teal' },
    { value: 'hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)]', label: 'Purple' },
    { value: 'hover:border-orange-400/50 hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]', label: 'Orange' },
    { value: 'hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.25)]', label: 'Pink' },
    { value: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]', label: 'Blue' },
    { value: 'hover:border-amber-600/50 hover:shadow-[0_0_20px_rgba(217,119,6,0.25)]', label: 'Amber' },
    { value: 'hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]', label: 'Green' },
    { value: 'hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]', label: 'Cyan' },
    { value: 'hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]', label: 'Yellow' },
  ];

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await categoryService.getCategories();
      if (res?.success) {
        setCategories(res.data);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      toast.error(err.response?.data?.message || 'Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenAddModal = () => {
    setModalType('add');
    setCurrentCategory(null);
    setName('');
    setSlug('');
    setDescription('');
    setIcon('📚');
    setColorClass('hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]');
    setIsActive(true);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (cat) => {
    setModalType('edit');
    setCurrentCategory(cat);
    setName(cat.name);
    setSlug(cat.slug);
    setDescription(cat.description || '');
    setIcon(cat.icon || '📚');
    setColorClass(cat.colorClass || 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]');
    setIsActive(cat.isActive);
    setIsModalOpen(true);
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    // Auto-generate slug from name in add mode
    if (modalType === 'add') {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, slug, description, icon, colorClass, isActive };
    try {
      if (modalType === 'add') {
        const res = await categoryService.createCategory(payload);
        if (res?.success) {
          toast.success('Category created successfully');
          fetchCategories();
          setIsModalOpen(false);
        }
      } else {
        const res = await categoryService.updateCategory(currentCategory.id, payload);
        if (res?.success) {
          toast.success('Category updated successfully');
          fetchCategories();
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error('Error saving category:', err);
      toast.error(err.response?.data?.message || 'Error saving category');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const res = await categoryService.deleteCategory(id);
        if (res?.success) {
          toast.success('Category deleted successfully');
          fetchCategories();
        }
      } catch (err) {
        console.error('Error deleting category:', err);
        toast.error('Failed to delete category');
      }
    }
  };

  const handleToggleStatus = async (cat) => {
    const payload = {
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      icon: cat.icon,
      colorClass: cat.colorClass,
      isActive: !cat.isActive
    };
    try {
      const res = await categoryService.updateCategory(cat.id, payload);
      if (res?.success) {
        toast.success(`Category ${!cat.isActive ? 'activated' : 'deactivated'}`);
        fetchCategories();
      }
    } catch (err) {
      console.error('Error toggling status:', err);
      toast.error('Failed to toggle status');
    }
  };

  const filteredCategories = categories.filter((cat) => {
    return cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           cat.slug.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const columns = [
    { key: 'id', label: 'Category ID', cellClassName: 'font-mono text-[#E94B4B]' },
    { key: 'name', label: 'Category Name', cellClassName: 'font-semibold' },
    { key: 'slug', label: 'Slug', cellClassName: 'font-mono text-sm' },
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
          <h1 className="text-xl font-bold">Manage Quiz Categories</h1>
          <p className="text-xs text-gray-400 mt-1">Configure, add and edit top-level quiz categories.</p>
        </div>
      <button
  onClick={handleOpenAddModal}
  className="flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer hover:opacity-90"
  style={{ background: 'linear-gradient(178.27deg, #E94B4B 1.6%, #911616 126.9%)' }}
>
  <Plus size={16} />
  Add Category
</button>
      </div>

      <div className="bg-[#0f1117] text-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
        <div className="p-5 flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search categories by name or slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchCategories}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg text-sm transition-all cursor-pointer"
            >
              <RotateCw size={16} /> Refresh
            </button>
          </div>
        </div>

        <Table columns={columns} data={filteredCategories} loading={loading} />
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f1117] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-xl animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">
                {modalType === 'add' ? 'Add Category' : 'Edit Category'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Category Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sports"
                  value={name}
                  onChange={handleNameChange}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Slug (Auto-generated)</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. sports"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">Description (Optional)</label>
                <textarea
                  placeholder="Enter details about this category..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Card Icon (Emoji)</label>
                  <select
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  >
                    {ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5">Card Hover Color</label>
                  <select
                    value={colorClass}
                    onChange={(e) => setColorClass(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-600 rounded-lg text-sm bg-[#0f1117] text-white focus:outline-none focus:border-[#E94B4B]"
                  >
                    {COLOR_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preview */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#090b15] border border-gray-700">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs font-semibold text-white">{name || 'Category Name'}</p>
                  <p className="text-[10px] text-gray-400">Hover color: {COLOR_OPTIONS.find(c => c.value === colorClass)?.label || 'Red'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isActiveCat"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="w-4 h-4 rounded text-[#E94B4B] focus:ring-0 focus:ring-offset-0 bg-[#0f1117] border-gray-600 cursor-pointer"
                />
                <label htmlFor="isActiveCat" className="text-xs font-semibold text-gray-300 cursor-pointer">
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
                  {modalType === 'add' ? 'Create' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageQuizCategories;
