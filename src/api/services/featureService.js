import { mockFeatures, mockContests } from '../mockData';

const resolveContest = (contestId) => {
  if (!contestId) return null;
  const numericId = parseInt(contestId, 10);
  const contest = mockContests.find(c => c.id === numericId);
  return contest ? { id: contest.id, title: contest.title } : null;
};

export const featureService = {
  getPublicFeatures: async (contestId) => {
    let list = mockFeatures.filter(f => f.isActive);
    if (contestId) {
      const numericContestId = parseInt(contestId, 10);
      list = list.filter(f => f.contestId === numericContestId);
    }
    // Map contest object for UI display
    const mapped = list.map(f => ({
      ...f,
      contest: resolveContest(f.contestId)
    }));
    return {
      success: true,
      message: "Features fetched successfully",
      data: mapped
    };
  },
  getFeatures: async (contestId) => {
    let list = mockFeatures;
    if (contestId) {
      const numericContestId = parseInt(contestId, 10);
      list = list.filter(f => f.contestId === numericContestId);
    }
    // Map contest object for UI display
    const mapped = list.map(f => ({
      ...f,
      contest: resolveContest(f.contestId)
    }));
    return {
      success: true,
      message: "Features fetched successfully",
      data: mapped
    };
  },
  createFeature: async (data) => {
    const nextId = mockFeatures.length > 0 ? Math.max(...mockFeatures.map(f => f.id)) + 1 : 1;
    const newFeature = {
      id: nextId,
      title: data.title,
      description: data.description || '',
      iconName: data.iconName || 'ShieldCheck',
      contestId: data.contestId ? parseInt(data.contestId, 10) : null,
      displayOrder: parseInt(data.displayOrder, 10) || (mockFeatures.length + 1),
      badgeText: data.badgeText || '',
      colorClass: data.colorClass || 'text-[#E94B4B]',
      isActive: data.isActive !== undefined ? data.isActive : true
    };
    mockFeatures.push(newFeature);
    
    return {
      success: true,
      message: "Feature created successfully",
      data: {
        ...newFeature,
        contest: resolveContest(newFeature.contestId)
      }
    };
  },
  updateFeature: async (id, data) => {
    const numericId = parseInt(id, 10);
    const idx = mockFeatures.findIndex(f => f.id === numericId);
    if (idx === -1) {
      throw { response: { status: 404, data: { message: "Feature not found" } } };
    }
    const existing = mockFeatures[idx];
    const updatedFeature = {
      ...existing,
      ...data,
      id: numericId, // keep id same
      contestId: data.contestId !== undefined ? (data.contestId ? parseInt(data.contestId, 10) : null) : existing.contestId
    };
    mockFeatures[idx] = updatedFeature;

    return {
      success: true,
      message: "Feature updated successfully",
      data: {
        ...updatedFeature,
        contest: resolveContest(updatedFeature.contestId)
      }
    };
  },
  deleteFeature: async (id) => {
    const numericId = parseInt(id, 10);
    const idx = mockFeatures.findIndex(f => f.id === numericId);
    if (idx !== -1) {
      mockFeatures.splice(idx, 1);
    }
    return {
      success: true,
      message: "Feature deleted successfully"
    };
  },
};
