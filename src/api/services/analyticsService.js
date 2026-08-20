import { mockCategories, mockContests } from '../mockData';

export const analyticsService = {
  /**
   * Fetch analytics & reports data for selected timeframe
   * @param {Object} params - { timeframe: '7d' | '30d' | '90d' | '1y' }
   */
  getAnalyticsReports: async (params = {}) => {
    // Dynamically calculate metrics based on in-memory DB arrays
    const totalCategoriesCount = mockCategories.length;
    const totalPrizePoolSum = mockContests.reduce((sum, contest) => sum + (parseFloat(contest.prizePool) || 0), 0);

    const overview = {
      totalRevenue: 245000,
      totalOrders: 4500, // Total questions count
      completedOrders: 320,
      totalCustomers: 12800, // Total users count
      totalDrivers: totalCategoriesCount, // Total categories count
      totalRewardPoints: totalPrizePoolSum, // Total prize pool
      averageRating: '85%'
    };

    const revenueTrend = [
      { value: 15 },
      { value: 30 },
      { value: 22 },
      { value: 45 },
      { value: 38 },
      { value: 32 },
      { value: 50 }
    ];

    return {
      success: true,
      message: "Analytics reports fetched successfully",
      data: {
        overview,
        revenueTrend
      }
    };
  },
};
