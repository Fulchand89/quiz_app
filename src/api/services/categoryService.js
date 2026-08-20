import { mockCategories } from '../mockData';

export const categoryService = {
  getPublicCategories: async () => {
    const activeCats = mockCategories.filter(cat => cat.isActive);
    return {
      success: true,
      message: "Categories fetched successfully",
      data: activeCats
    };
  },
  getCategories: async () => {
    return {
      success: true,
      message: "Categories fetched successfully",
      data: mockCategories
    };
  },
  createCategory: async (data) => {
    const nextId = mockCategories.length > 0 ? Math.max(...mockCategories.map(c => c.id)) + 1 : 1;
    const newCat = {
      id: nextId,
      name: data.name,
      slug: data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      icon: data.icon || '📚',
      image: data.image || '/cat-general.png',
      colorClass: data.colorClass || 'text-red-500 bg-red-500/10 border-red-500/20',
      borderGlowClass: data.colorClass || 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]',
      description: data.description || '',
      isActive: data.isActive !== undefined ? data.isActive : true
    };
    mockCategories.push(newCat);
    return {
      success: true,
      message: "Category created successfully",
      data: newCat
    };
  },
  updateCategory: async (id, data) => {
    const numericId = parseInt(id, 10);
    const catIdx = mockCategories.findIndex(c => c.id === numericId);
    if (catIdx === -1) {
      throw { response: { status: 404, data: { message: "Category not found" } } };
    }
    const existing = mockCategories[catIdx];
    const updatedCat = {
      ...existing,
      ...data,
      id: numericId // keep id same
    };
    mockCategories[catIdx] = updatedCat;
    return {
      success: true,
      message: "Category updated successfully",
      data: updatedCat
    };
  },
  deleteCategory: async (id) => {
    const numericId = parseInt(id, 10);
    const catIdx = mockCategories.findIndex(c => c.id === numericId);
    if (catIdx !== -1) {
      mockCategories.splice(catIdx, 1);
    }
    return {
      success: true,
      message: "Category deleted successfully"
    };
  },
};
