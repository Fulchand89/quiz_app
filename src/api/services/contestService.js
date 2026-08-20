import { mockContests, mockCategories } from '../mockData';

const resolveCategory = (categoryId) => {
  const numericCategoryId = parseInt(categoryId, 10);
  const cat = mockCategories.find(c => c.id === numericCategoryId);
  return cat ? { id: cat.id, name: cat.name } : { id: numericCategoryId, name: 'General Knowledge' };
};

const formatFriendlyDate = (isoString) => {
  if (!isoString) return '';
  try {
    const d = new Date(isoString);
    const day = d.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();
    let hours = d.getHours();
    const ampm = hours >= 12 ? 'Pm' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  } catch {
    return '';
  }
};

export const contestService = {
  getPublicContests: async () => {
    const activeContests = mockContests.filter(c => c.isActive);
    return {
      success: true,
      message: "Contests fetched successfully",
      data: activeContests
    };
  },
  getContests: async () => {
    return {
      success: true,
      message: "Contests fetched successfully",
      data: mockContests
    };
  },
  createContest: async (data) => {
    const nextId = mockContests.length > 0 ? Math.max(...mockContests.map(c => c.id)) + 1 : 1;
    const cat = resolveCategory(data.categoryId);
    const newContest = {
      id: nextId,
      categoryId: data.categoryId ? parseInt(data.categoryId, 10) : null,
      category: cat,
      title: data.title,
      description: data.description || '',
      prizePool: parseFloat(data.prizePool) || 0,
      entryFee: parseFloat(data.entryFee) || 0,
      joined: 0,
      maxParticipants: parseInt(data.maxParticipants, 10) || 100,
      minParticipants: parseInt(data.minParticipants, 10) || 2,
      durationMinutes: parseInt(data.durationMinutes, 10) || 15,
      image: data.image || (data.categoryId ? `/cat-${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}.png` : '/cat-general.png'),
      startTime: data.startTime || new Date().toISOString(),
      endTime: data.endTime || new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      isActive: data.isActive !== undefined ? data.isActive : true,
      status: 'Upcoming',
      date: formatFriendlyDate(data.startTime)
    };
    mockContests.push(newContest);
    return {
      success: true,
      message: "Contest created successfully",
      data: newContest
    };
  },
  updateContest: async (id, data) => {
    const numericId = parseInt(id, 10);
    const contestIdx = mockContests.findIndex(c => c.id === numericId);
    if (contestIdx === -1) {
      throw { response: { status: 404, data: { message: "Contest not found" } } };
    }
    const existing = mockContests[contestIdx];
    
    // Resolve category if changing categoryId
    let cat = existing.category;
    if (data.categoryId !== undefined) {
      cat = resolveCategory(data.categoryId);
    }

    const updatedContest = {
      ...existing,
      ...data,
      id: numericId, // keep id same
      category: cat,
      date: data.startTime ? formatFriendlyDate(data.startTime) : existing.date
    };
    mockContests[contestIdx] = updatedContest;
    return {
      success: true,
      message: "Contest updated successfully",
      data: updatedContest
    };
  },
  deleteContest: async (id) => {
    const numericId = parseInt(id, 10);
    const contestIdx = mockContests.findIndex(c => c.id === numericId);
    if (contestIdx !== -1) {
      mockContests.splice(contestIdx, 1);
    }
    return {
      success: true,
      message: "Contest deleted successfully"
    };
  },
};
