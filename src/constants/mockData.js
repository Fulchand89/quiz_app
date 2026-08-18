// Mock customers
export const CUSTOMERS = [
  { id: 'CUS0001', name: 'Rohit Sharma', email: 'rohit.sharma@email.com', phone: '+91 98765 43210', joinedOn: '12 May 2025', totalOrders: 18, totalSpent: '₹1,25,400', status: 'Active' },
  { id: 'CUS0002', name: 'Priya Patel', email: 'priya.patel@email.com', phone: '+91 91234 56789', joinedOn: '15 May 2025', totalOrders: 12, totalSpent: '₹85,600', status: 'Active' },
  { id: 'CUS0003', name: 'Amit Verma', email: 'amit.verma@email.com', phone: '+91 99887 76655', joinedOn: '20 May 2025', totalOrders: 9, totalSpent: '₹65,300', status: 'Active' },
  { id: 'CUS0004', name: 'Neha Gupta', email: 'neha.gupta@email.com', phone: '+91 88776 65544', joinedOn: '22 May 2025', totalOrders: 15, totalSpent: '₹1,10,200', status: 'Active' },
  { id: 'CUS0005', name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 77665 44332', joinedOn: '25 May 2025', totalOrders: 7, totalSpent: '₹48,900', status: 'Active' },
  { id: 'CUS0006', name: 'Manoj Kumar', email: 'manoj.kumar@email.com', phone: '+91 66554 33221', joinedOn: '28 May 2025', totalOrders: 5, totalSpent: '₹32,100', status: 'Inactive' },
  { id: 'CUS0007', name: 'Anjali Mehta', email: 'anjali.mehta@email.com', phone: '+91 55443 22110', joinedOn: '31 May 2025', totalOrders: 0, totalSpent: '₹0', status: 'Blocked' },
]

// Mock drivers
export const DRIVERS = [
  { id: 'DRV0001', name: 'Arjun Singh', phone: '+91 98765 43210', license: 'DL-H 2019 1234567', vehicle: 'DL5AH1234', joinedOn: '10 May 2025', status: 'Active', rating: 4.8 },
  { id: 'DRV0002', name: 'Ramesh Yadav', phone: '+91 91234 56789', license: 'UP32 2019 7654321', vehicle: 'UP32CT7788', joinedOn: '12 May 2025', status: 'Active', rating: 4.6 },
  { id: 'DRV0003', name: 'Gurpreet Singh', phone: '+91 99887 66554', license: 'PB10 2020 1122334', vehicle: 'PB10MG2233', joinedOn: '15 May 2025', status: 'Active', rating: 4.7 },
  { id: 'DRV0004', name: 'Sanjay Kumar', phone: '+91 88776 05443', license: 'RJ14 2020 3344556', vehicle: 'RJ14SCA455', joinedOn: '18 May 2025', status: 'Active', rating: 4.5 },
  { id: 'DRV0005', name: 'Imran Khan', phone: '+91 77665 44332', license: 'MH01 2019 9877540', vehicle: 'MH08DK4477', joinedOn: '20 May 2025', status: 'On Trip', rating: 4.9 },
  { id: 'DRV0006', name: 'Vikas Sharma', phone: '+91 66664 33221', license: 'HR26 2019 6546778', vehicle: 'HR26R98899', joinedOn: '22 May 2025', status: 'Active', rating: 4.4 },
  { id: 'DRV0007', name: 'Mahesh Patil', phone: '+91 55443 22190', license: 'KA03 2020 9988771', vehicle: 'KA03MG1122', joinedOn: '24 May 2025', status: 'Inactive', rating: 4.2 },
  { id: 'DRV0008', name: 'Suresh Babu', phone: '+91 44332 10009', license: 'TN09 2019 1233445', vehicle: 'TN09MG1344', joinedOn: '25 May 2025', status: 'Blocked', rating: 3.8 },
]

// Mock orders
export const ORDERS = [
  { id: '#ORD0001', customer: 'Rohit Sharma', route: 'Delhi → Mumbai', status: 'In Progress', amount: '₹18,500', date: '23 Jun 2025' },
  { id: '#ORD0002', customer: 'Priya Patel', route: 'Bangalore → Hyderabad', status: 'Pending', amount: '₹12,000', date: '23 Jun 2025' },
  { id: '#ORD0003', customer: 'Amit Verma', route: 'Chennai → Coimbatore', status: 'Completed', amount: '₹9,800', date: '22 Jun 2025' },
  { id: '#ORD0004', customer: 'Neha Gupta', route: 'Pune → Nagpur', status: 'In Progress', amount: '₹15,200', date: '22 Jun 2025' },
  { id: '#ORD0005', customer: 'Vikram Singh', route: 'Kolkata → Patna', status: 'Pending', amount: '₹11,000', date: '22 Jun 2025' },
  { id: '#ORD0006', customer: 'Sanjay Mehta', route: 'Ahmedabad → Surat', status: 'Completed', amount: '₹14,500', date: '21 Jun 2025' },
  { id: '#ORD0007', customer: 'Anjali Mehta', route: 'Lucknow → Kanpur', status: 'In Progress', amount: '₹8,700', date: '21 Jun 2025' },
  { id: '#ORD0008', customer: 'Manoj Kumar', route: 'Jaipur → Udaipur', status: 'Cancelled', amount: '₹7,600', date: '20 Jun 2025' },
]

// Mock order progress
export const ORDER_PROGRESS = [
  { id: '#ORD0001', customer: 'Rohit Sharma', route: 'Delhi → Mumbai', status: 'In Transit', detail: 'On the way', lastUpdate: '23 Jun 2025 02:40 PM', eta: '24 Jun 2025 06:00 PM' },
  { id: '#ORD0002', customer: 'Priya Patel', route: 'Bangalore → Hyderabad', status: 'Picked Up', detail: 'Departed', lastUpdate: '23 Jun 2025 11:15 AM', eta: '24 Jun 2025 08:00 PM' },
  { id: '#ORD0003', customer: 'Amit Verma', route: 'Chennai → Coimbatore', status: 'Out for Delivery', detail: 'Delivery in progress', lastUpdate: '23 Jun 2025 04:10 PM', eta: '23 Jun 2025 07:00 PM' },
  { id: '#ORD0004', customer: 'Neha Gupta', route: 'Pune → Nagpur', status: 'In Transit', detail: 'On the way', lastUpdate: '23 Jun 2025 01:20 PM', eta: '24 Jun 2025 07:30 PM' },
  { id: '#ORD0005', customer: 'Vikram Singh', route: 'Kolkata → Patna', status: 'Picked Up', detail: 'Departed', lastUpdate: '22 Jun 2025 10:45 AM', eta: '23 Jun 2025 06:30 PM' },
  { id: '#ORD0006', customer: 'Sanjay Mehta', route: 'Ahmedabad → Surat', status: 'Delivered', detail: 'Delivered Successfully', lastUpdate: '21 Jun 2025 06:20 PM', eta: '21 Jun 2025 06:20 PM' },
  { id: '#ORD0007', customer: 'Anjali Mehta', route: 'Lucknow → Kanpur', status: 'Out for Delivery', detail: 'Delivery in progress', lastUpdate: '23 Jun 2025 05:30 PM', eta: '23 Jun 2025 08:00 PM' },
  { id: '#ORD0008', customer: 'Manoj Kumar', route: 'Jaipur → Udaipur', status: 'Cancelled', detail: 'Cancelled by admin', lastUpdate: '20 Jun 2025 09:10 AM', eta: '—' },
]

// Mock transactions
export const TRANSACTIONS = [
  { id: 'TXN100245', orderId: '#ORD0001', customer: 'Rohit Sharma', amount: '₹18,500', method: 'UPI - G-Pay', status: 'Successful', dateTime: '23 Jun 2025, 10:30 AM' },
  { id: 'TXN100244', orderId: '#ORD0002', customer: 'Priya Patel', amount: '₹12,000', method: 'Credit Card - VISA', status: 'Successful', dateTime: '23 Jun 2025, 09:15 AM' },
  { id: 'TXN100243', orderId: '#ORD0003', customer: 'Amit Verma', amount: '₹9,800', method: 'UPI - PhonePe', status: 'Pending', dateTime: '22 Jun 2025, 08:45 PM' },
  { id: 'TXN100242', orderId: '#ORD0004', customer: 'Neha Gupta', amount: '₹15,200', method: 'Net Banking', status: 'Successful', dateTime: '22 Jun 2025, 04:20 PM' },
  { id: 'TXN100241', orderId: '#ORD0005', customer: 'Vikram Singh', amount: '₹11,000', method: 'UPI - Paytm', status: 'Successful', dateTime: '22 Jun 2025, 02:10 PM' },
  { id: 'TXN100240', orderId: '#ORD0006', customer: 'Sanjay Mehta', amount: '₹14,500', method: 'Credit Card', status: 'Successful', dateTime: '21 Jun 2025, 07:30 PM' },
  { id: 'TXN100239', orderId: '#ORD0007', customer: 'Anjali Mehta', amount: '₹8,700', method: 'UPI - G-Pay', status: 'Failed', dateTime: '21 Jun 2025, 06:05 PM' },
  { id: 'TXN100238', orderId: '#ORD0008', customer: 'Manoj Kumar', amount: '₹7,600', method: 'Wallet', status: 'Refunded', dateTime: '20 Jun 2025, 11:20 AM' },
]

// Mock settlements
export const SETTLEMENTS = [
  { id: 'DSLT0001', driver: 'Amit Kumar', driverId: 'DRV0001', totalEarnings: '₹18,750', deductions: '-₹2,000', payout: '₹16,750', status: 'Paid', date: '23 Jun 2025 11:30 AM' },
  { id: 'DSLT0002', driver: 'Ramesh Yadav', driverId: 'DRV0002', totalEarnings: '₹12,400', deductions: '-₹1,200', payout: '₹11,200', status: 'Pending', date: '23 Jun 2025' },
  { id: 'DSLT0003', driver: 'Vikram Singh', driverId: 'DRV0003', totalEarnings: '₹15,600', deductions: '-₹1,560', payout: '₹14,040', status: 'Paid', date: '22 Jun 2025 04:20 PM' },
  { id: 'DSLT0004', driver: 'Pooja Sharma', driverId: 'DRV0004', totalEarnings: '₹9,850', deductions: '-₹985', payout: '₹8,865', status: 'Paid', date: '22 Jun 2025 04:10 PM' },
  { id: 'DSLT0005', driver: 'Sanjay Mehta', driverId: 'DRV0005', totalEarnings: '₹14,300', deductions: '-₹1,430', payout: '₹12,870', status: 'Failed', date: '21 Jun 2025' },
  { id: 'DSLT0006', driver: 'Arjun Patel', driverId: 'DRV0006', totalEarnings: '₹11,250', deductions: '-₹1,125', payout: '₹10,125', status: 'Pending', date: '21 Jun 2025' },
  { id: 'DSLT0007', driver: 'Neha Gupta', driverId: 'DRV0007', totalEarnings: '₹13,900', deductions: '-₹1,390', payout: '₹12,510', status: 'Paid', date: '20 Jun 2025 02:30 PM' },
  { id: 'DSLT0008', driver: 'Manoj Kumar', driverId: 'DRV0008', totalEarnings: '₹10,750', deductions: '-₹1,075', payout: '₹9,675', status: 'Refunded', date: '20 Jun 2025 10:45 AM' },
]

// Mock receipts
export const RECEIPTS = [
  { id: 'RCPT0001', orderId: '#ORD0001', type: 'Payment', customer: 'Rohit Sharma', amount: '₹18,500', method: 'UPI - G-Pay', status: 'Sent', date: '23 Jun 2025 10:32 AM' },
  { id: 'RCPT0002', orderId: '#ORD0002', type: 'Payment', customer: 'Priya Patel', amount: '₹12,000', method: 'Credit Card - VISA', status: 'Sent', date: '23 Jun 2025 09:16 AM' },
  { id: 'RCPT0003', orderId: '#ORD0003', type: 'Settlement', customer: 'Amit Verma', amount: '₹9,800', method: 'UPI - PhonePe', status: 'Sent', date: '22 Jun 2025 08:50 AM' },
  { id: 'RCPT0004', orderId: '#ORD0004', type: 'Payment', customer: 'Neha Gupta', amount: '₹15,200', method: 'Net Banking', status: 'Pending', date: '22 Jun 2025 04:22 PM' },
  { id: 'RCPT0005', orderId: '#ORD0005', type: 'Settlement', customer: 'Vikram Singh', amount: '₹11,000', method: 'Paytm', status: 'Sent', date: '22 Jun 2025 02:12 PM' },
  { id: 'RCPT0006', orderId: '#ORD0006', type: 'Settlement', customer: 'Sanjay Mehta', amount: '₹14,500', method: 'Credit Card', status: 'Sent', date: '21 Jun 2025 07:33 PM' },
  { id: 'RCPT0007', orderId: '#ORD0007', type: 'Payment', customer: 'Anjali Mehta', amount: '₹8,700', method: 'UPI - G-Pay', status: 'Failed', date: '21 Jun 2025 06:06 PM' },
  { id: 'RCPT0008', orderId: '#ORD0008', type: 'Settlement', customer: 'Manoj Kumar', amount: '₹7,600', method: 'Wallet', status: 'Sent', date: '20 Jun 2025 11:22 AM' },
]

// Mock points allocation
export const POINTS_ALLOCATION = [
  { userId: 'CUS0001', userName: 'Rohit Sharma', userType: 'Customer', phone: '+91 98765 43210', points: '+500', reason: 'Order Completed', dateTime: '23 Jun 2025 10:30 AM', allocatedBy: 'Admin' },
  { userId: 'DRV0001', userName: 'Arjun Singh', userType: 'Driver', phone: '+91 91234 56789', points: '+750', reason: 'Delivery Completed', dateTime: '23 Jun 2025 09:15 AM', allocatedBy: 'Admin' },
  { userId: 'CUS0002', userName: 'Priya Patel', userType: 'Customer', phone: '+91 99887 66554', points: '+300', reason: 'Referral Bonus', dateTime: '22 Jun 2025 08:45 PM', allocatedBy: 'System' },
  { userId: 'DRV0002', userName: 'Ramesh Yadav', userType: 'Driver', phone: '+91 88776 55443', points: '+500', reason: 'On Time Delivery', dateTime: '22 Jun 2025 04:20 PM', allocatedBy: 'Admin' },
  { userId: 'CUS0003', userName: 'Amit Verma', userType: 'Customer', phone: '+91 77665 44332', points: '+200', reason: 'Review & Rating', dateTime: '22 Jun 2025 02:10 PM', allocatedBy: 'System' },
  { userId: 'DRV0003', userName: 'Vikram Singh', userType: 'Driver', phone: '+91 66554 33221', points: '+600', reason: 'High Performance', dateTime: '21 Jun 2025 07:30 PM', allocatedBy: 'Admin' },
  { userId: 'CUS0004', userName: 'Neha Gupta', userType: 'Customer', phone: '+91 55443 22110', points: '+150', reason: 'Social Share', dateTime: '21 Jun 2025 06:05 PM', allocatedBy: 'System' },
  { userId: 'CUS0005', userName: 'Anjali Mehta', userType: 'Customer', phone: '+91 66445 77889', points: '+250', reason: 'First Order Bonus', dateTime: '20 Jun 2025 11:20 AM', allocatedBy: 'Admin' },
]

// Mock gift redemptions
export const GIFT_REDEMPTIONS = [
  { id: 'GRD0001', customer: 'Rohit Sharma', customerId: 'CUS0001', reward: 'Amazon Gift Card ₹500', pointsUsed: 2500, requestDate: '23 Jun 2025 10:52 AM', status: 'Pending' },
  { id: 'GRD0002', customer: 'Priya Patel', customerId: 'CUS0002', reward: 'Flipkart Gift Card ₹1000', pointsUsed: 4500, requestDate: '23 Jun 2025 09:15 AM', status: 'Approved' },
  { id: 'GRD0003', customer: 'Amit Verma', customerId: 'CUS0003', reward: 'Zomato Voucher ₹500', pointsUsed: 2500, requestDate: '22 Jun 2025 08:50 AM', status: 'Approved' },
  { id: 'GRD0004', customer: 'Neha Gupta', customerId: 'CUS0004', reward: 'Amazon Gift Card ₹1000', pointsUsed: 4500, requestDate: '22 Jun 2025 04:22 PM', status: 'Pending' },
  { id: 'GRD0005', customer: 'Vikram Singh', customerId: 'CUS0005', reward: 'Flipkart Gift Card ₹500', pointsUsed: 2500, requestDate: '22 Jun 2025 02:12 PM', status: 'Approved' },
  { id: 'GRD0006', customer: 'Sanjay Mehta', customerId: 'CUS0006', reward: 'Myntra Voucher ₹750', pointsUsed: 3750, requestDate: '21 Jun 2025 07:33 PM', status: 'Rejected' },
  { id: 'GRD0007', customer: 'Anjali Mehta', customerId: 'CUS0007', reward: 'Amazon Gift Card ₹500', pointsUsed: 2500, requestDate: '21 Jun 2025 06:06 PM', status: 'Pending' },
  { id: 'GRD0008', customer: 'Manoj Kumar', customerId: 'CUS0008', reward: 'Paytm Wallet ₹500', pointsUsed: 2500, requestDate: '20 Jun 2025 11:22 AM', status: 'Approved' },
]

// Mock customer ratings
export const CUSTOMER_RATINGS = [
  { orderId: '#ORD0001', customer: 'Rohit Sharma', serviceType: 'Full Truck Load', driver: 'Arjun Singh', rating: 5, review: 'Excellent service! On time delivery and great support.', date: '23 Jun 2025' },
  { orderId: '#ORD0002', customer: 'Priya Patel', serviceType: 'City Delivery', driver: 'Vikram Singh', rating: 4, review: 'Good experience. Driver was polite and helpful.', date: '23 Jun 2025' },
  { orderId: '#ORD0003', customer: 'Amit Verma', serviceType: 'Heavy Cargo', driver: 'Ramesh Yadav', rating: 5, review: 'Very professional team. Will use again!', date: '22 Jun 2025' },
  { orderId: '#ORD0004', customer: 'Neha Gupta', serviceType: 'Long Distance', driver: 'Arjun Singh', rating: 3, review: 'Delivery was delayed. Tracking updates were late.', date: '22 Jun 2025' },
  { orderId: '#ORD0005', customer: 'Vikram Singh', serviceType: 'Express Delivery', driver: 'Amit Kumar', rating: 4, review: 'Good service overall. Packaging was perfect.', date: '21 Jun 2025' },
  { orderId: '#ORD0006', customer: 'Sanjay Mehta', serviceType: 'Full Truck Load', driver: 'Vikram Singh', rating: 5, review: 'Smooth process from booking to delivery.', date: '21 Jun 2025' },
  { orderId: '#ORD0007', customer: 'Anjali Mehta', serviceType: 'City Delivery', driver: 'Ramesh Yadav', rating: 2, review: 'Not satisfied. Driver was unavailable at pickup time.', date: '20 Jun 2025' },
  { orderId: '#ORD0008', customer: 'Manoj Kumar', serviceType: 'Heavy Cargo', driver: 'Arjun Singh', rating: 4, review: 'Overall good, but improve communication.', date: '20 Jun 2025' },
]

// Chart data for dashboard
export const REVENUE_CHART_DATA = [
  { date: '01 Jun', revenue: 45000 },
  { date: '05 Jun', revenue: 52000 },
  { date: '10 Jun', revenue: 48000 },
  { date: '15 Jun', revenue: 61000 },
  { date: '20 Jun', revenue: 58000 },
  { date: '25 Jun', revenue: 72000 },
  { date: '30 Jun', revenue: 85000 },
]

export const ORDERS_TREND_DATA = [
  { date: '01 Jun', total: 45, completed: 30 },
  { date: '05 Jun', total: 52, completed: 38 },
  { date: '10 Jun', total: 48, completed: 35 },
  { date: '15 Jun', total: 65, completed: 50 },
  { date: '20 Jun', total: 60, completed: 45 },
  { date: '25 Jun', total: 75, completed: 58 },
  { date: '30 Jun', total: 90, completed: 72 },
]

export const REVIEWS_TREND_DATA = [
  { date: '01 Jun', reviews: 55 },
  { date: '06 Jun', reviews: 72 },
  { date: '11 Jun', reviews: 48 },
  { date: '16 Jun', reviews: 85 },
  { date: '21 Jun', reviews: 60 },
  { date: '23 Jun', reviews: 78 },
]

export const PAYMENT_METHOD_DATA = [
  { name: 'UPI', value: 765430, percentage: '61.3%', color: '#e6941e' },
  { name: 'Credit/Debit Card', value: 633100, percentage: '29.5%', color: '#6b7280' },
  { name: 'Net Banking', value: 532600, percentage: '16.7%', color: '#93c5fd' },
  { name: 'Wallet', value: 162300, percentage: '6.6%', color: '#d1d5db' },
  { name: 'Cash', value: 99900, percentage: '5.7%', color: '#fde68a' },
]

export const ORDERS_BY_STATUS_DATA = [
  { name: 'Completed', value: 1098, color: '#16a34a' },
  { name: 'In Transit', value: 56, color: '#2563eb' },
  { name: 'Pending', value: 46, color: '#d97706' },
  { name: 'Cancelled', value: 23, color: '#dc2626' },
]

export const RATING_DISTRIBUTION = [
  { star: 5, count: 736, percentage: 59.0 },
  { star: 4, count: 342, percentage: 27.4 },
  { star: 3, count: 98, percentage: 7.9 },
  { star: 2, count: 41, percentage: 3.3 },
  { star: 1, count: 31, percentage: 2.4 },
]

export const TOP_RATED_DRIVERS = [
  { rank: 1, name: 'Arjun Singh', rating: 4.7 },
  { rank: 2, name: 'Vikram Singh', rating: 4.6 },
  { rank: 3, name: 'Ramesh Yadav', rating: 4.5 },
]

// Top users by points (used by PointsSummaryDrawer)
export const TOP_USERS_BY_POINTS = [
  { rank: 1, userId: 'CUS0001', userName: 'Rohit Sharma',  userType: 'Customer', totalPoints: 12450 },
  { rank: 2, userId: 'DRV0001', userName: 'Arjun Singh',   userType: 'Driver',   totalPoints: 9870  },
  { rank: 3, userId: 'CUS0002', userName: 'Priya Patel',   userType: 'Customer', totalPoints: 8230  },
  { rank: 4, userId: 'DRV0002', userName: 'Ramesh Yadav',  userType: 'Driver',   totalPoints: 7150  },
  { rank: 5, userId: 'CUS0003', userName: 'Amit Verma',    userType: 'Customer', totalPoints: 6480  },
]

// Per-user points summary data keyed by userId (used by PointsSummaryDrawer)
export const USER_POINTS_SUMMARY = {
  CUS0001: { totalPoints: 1285450, earned: 875600, earnedPct: 68.1, redeemed: 421350, redeemedPct: 32.7, expired: 12500, expiredPct: 0.9 },
  DRV0001: { totalPoints: 945200,  earned: 642800, earnedPct: 68.0, redeemed: 285600, redeemedPct: 30.2, expired: 16800, expiredPct: 1.8 },
  CUS0002: { totalPoints: 823000,  earned: 560000, earnedPct: 68.0, redeemed: 253000, redeemedPct: 30.7, expired: 10000, expiredPct: 1.2 },
  DRV0002: { totalPoints: 715000,  earned: 490000, earnedPct: 68.5, redeemed: 215000, redeemedPct: 30.1, expired: 10000, expiredPct: 1.4 },
  CUS0003: { totalPoints: 648000,  earned: 441000, earnedPct: 68.1, redeemed: 198000, redeemedPct: 30.6, expired:  9000, expiredPct: 1.4 },
  DRV0003: { totalPoints: 580000,  earned: 394400, earnedPct: 68.0, redeemed: 180000, redeemedPct: 31.0, expired:  5600, expiredPct: 1.0 },
  CUS0004: { totalPoints: 512000,  earned: 348160, earnedPct: 68.0, redeemed: 158000, redeemedPct: 30.9, expired:  5840, expiredPct: 1.1 },
  CUS0005: { totalPoints: 380000,  earned: 258400, earnedPct: 68.0, redeemed: 116000, redeemedPct: 30.5, expired:  5600, expiredPct: 1.5 },
}

// Per-user recent redemption requests keyed by userId (used by PointsSummaryDrawer)
export const USER_REDEMPTIONS = {
  CUS0001: [
    { reward: 'Amazon Gift Card ₹500',    customerId: 'CUS0001', customerName: 'Rohit Sharma', requestDate: '23 Jun 2025', status: 'Pending'  },
    { reward: 'Flipkart Gift Card ₹1000', customerId: 'CUS0001', customerName: 'Rohit Sharma', requestDate: '20 Jun 2025', status: 'Approved' },
    { reward: 'Zomato Voucher ₹500',      customerId: 'CUS0001', customerName: 'Rohit Sharma', requestDate: '15 Jun 2025', status: 'Approved' },
  ],
  DRV0001: [
    { reward: 'Amazon Gift Card ₹500',  customerId: 'DRV0001', customerName: 'Arjun Singh', requestDate: '22 Jun 2025', status: 'Approved' },
    { reward: 'Myntra Voucher ₹750',    customerId: 'DRV0001', customerName: 'Arjun Singh', requestDate: '18 Jun 2025', status: 'Pending'  },
    { reward: 'Paytm Wallet ₹500',      customerId: 'DRV0001', customerName: 'Arjun Singh', requestDate: '12 Jun 2025', status: 'Approved' },
  ],
  CUS0002: [
    { reward: 'Flipkart Gift Card ₹1000', customerId: 'CUS0002', customerName: 'Priya Patel', requestDate: '23 Jun 2025', status: 'Pending'  },
    { reward: 'Amazon Gift Card ₹500',    customerId: 'CUS0002', customerName: 'Priya Patel', requestDate: '19 Jun 2025', status: 'Approved' },
    { reward: 'Zomato Voucher ₹500',      customerId: 'CUS0002', customerName: 'Priya Patel', requestDate: '14 Jun 2025', status: 'Rejected' },
  ],
  DRV0002: [
    { reward: 'Amazon Gift Card ₹500', customerId: 'DRV0002', customerName: 'Ramesh Yadav', requestDate: '21 Jun 2025', status: 'Approved' },
    { reward: 'Paytm Wallet ₹500',     customerId: 'DRV0002', customerName: 'Ramesh Yadav', requestDate: '17 Jun 2025', status: 'Pending'  },
    { reward: 'Myntra Voucher ₹750',   customerId: 'DRV0002', customerName: 'Ramesh Yadav', requestDate: '11 Jun 2025', status: 'Approved' },
  ],
  CUS0003: [
    { reward: 'Zomato Voucher ₹500',      customerId: 'CUS0003', customerName: 'Amit Verma', requestDate: '22 Jun 2025', status: 'Approved' },
    { reward: 'Flipkart Gift Card ₹500',  customerId: 'CUS0003', customerName: 'Amit Verma', requestDate: '16 Jun 2025', status: 'Pending'  },
    { reward: 'Amazon Gift Card ₹1000',   customerId: 'CUS0003', customerName: 'Amit Verma', requestDate: '10 Jun 2025', status: 'Rejected' },
  ],
  DRV0003: [
    { reward: 'Amazon Gift Card ₹500', customerId: 'DRV0003', customerName: 'Vikram Singh', requestDate: '20 Jun 2025', status: 'Approved' },
    { reward: 'Paytm Wallet ₹500',     customerId: 'DRV0003', customerName: 'Vikram Singh', requestDate: '15 Jun 2025', status: 'Approved' },
    { reward: 'Myntra Voucher ₹750',   customerId: 'DRV0003', customerName: 'Vikram Singh', requestDate: '09 Jun 2025', status: 'Pending'  },
  ],
  CUS0004: [
    { reward: 'Amazon Gift Card ₹1000',   customerId: 'CUS0004', customerName: 'Neha Gupta', requestDate: '22 Jun 2025', status: 'Pending'  },
    { reward: 'Flipkart Gift Card ₹500',  customerId: 'CUS0004', customerName: 'Neha Gupta', requestDate: '17 Jun 2025', status: 'Approved' },
    { reward: 'Zomato Voucher ₹500',      customerId: 'CUS0004', customerName: 'Neha Gupta', requestDate: '11 Jun 2025', status: 'Approved' },
  ],
  CUS0005: [
    { reward: 'Flipkart Gift Card ₹500', customerId: 'CUS0005', customerName: 'Anjali Mehta', requestDate: '21 Jun 2025', status: 'Approved' },
    { reward: 'Amazon Gift Card ₹500',   customerId: 'CUS0005', customerName: 'Anjali Mehta', requestDate: '16 Jun 2025', status: 'Pending'  },
    { reward: 'Paytm Wallet ₹500',       customerId: 'CUS0005', customerName: 'Anjali Mehta', requestDate: '10 Jun 2025', status: 'Rejected' },
  ],
}

// Per-order rating distribution overrides keyed by orderId (used by RatingOverviewDrawer)
// Each entry overrides the global RATING_DISTRIBUTION for that specific order's context
export const ORDER_RATING_SUMMARY = {
  '#ORD0001': { avgRating: 4.9, changePct: '+8.2', totalReviews: 1248, distribution: [{ star: 5, count: 736, percentage: 59.0 }, { star: 4, count: 342, percentage: 27.4 }, { star: 3, count: 98, percentage: 7.9 }, { star: 2, count: 41, percentage: 3.3 }, { star: 1, count: 31, percentage: 2.4 }] },
  '#ORD0002': { avgRating: 4.6, changePct: '+5.1', totalReviews: 984,  distribution: [{ star: 5, count: 580, percentage: 58.9 }, { star: 4, count: 280, percentage: 28.5 }, { star: 3, count: 74, percentage: 7.5  }, { star: 2, count: 32, percentage: 3.3 }, { star: 1, count: 18, percentage: 1.8 }] },
  '#ORD0003': { avgRating: 4.8, changePct: '+9.4', totalReviews: 1102, distribution: [{ star: 5, count: 680, percentage: 61.7 }, { star: 4, count: 290, percentage: 26.3 }, { star: 3, count: 82, percentage: 7.4  }, { star: 2, count: 30, percentage: 2.7 }, { star: 1, count: 20, percentage: 1.8 }] },
  '#ORD0004': { avgRating: 3.2, changePct: '-2.6', totalReviews: 620,  distribution: [{ star: 5, count: 180, percentage: 29.0 }, { star: 4, count: 190, percentage: 30.6 }, { star: 3, count: 140, percentage: 22.6 }, { star: 2, count: 70, percentage: 11.3}, { star: 1, count: 40, percentage: 6.5  }] },
  '#ORD0005': { avgRating: 4.4, changePct: '+3.7', totalReviews: 890,  distribution: [{ star: 5, count: 490, percentage: 55.1 }, { star: 4, count: 260, percentage: 29.2 }, { star: 3, count: 90, percentage: 10.1 }, { star: 2, count: 30, percentage: 3.4 }, { star: 1, count: 20, percentage: 2.2 }] },
  '#ORD0006': { avgRating: 4.9, changePct: '+11.2',totalReviews: 1340, distribution: [{ star: 5, count: 870, percentage: 64.9 }, { star: 4, count: 320, percentage: 23.9 }, { star: 3, count: 100, percentage: 7.5  }, { star: 2, count: 30, percentage: 2.2 }, { star: 1, count: 20, percentage: 1.5 }] },
  '#ORD0007': { avgRating: 2.1, changePct: '-14.3',totalReviews: 410,  distribution: [{ star: 5, count: 60,  percentage: 14.6 }, { star: 4, count: 80,  percentage: 19.5 }, { star: 3, count: 90,  percentage: 22.0 }, { star: 2, count: 110, percentage: 26.8}, { star: 1, count: 70, percentage: 17.1 }] },
  '#ORD0008': { avgRating: 4.1, changePct: '+2.3', totalReviews: 760,  distribution: [{ star: 5, count: 380, percentage: 50.0 }, { star: 4, count: 230, percentage: 30.3 }, { star: 3, count: 90, percentage: 11.8 }, { star: 2, count: 40, percentage: 5.3 }, { star: 1, count: 20, percentage: 2.6 }] },
}

// Per-order recent feedback highlights keyed by orderId (used by RatingOverviewDrawer)
export const ORDER_FEEDBACK_HIGHLIGHTS = {
  '#ORD0001': [
    { type: 'positive', customer: 'Rohit Sharma',  orderId: '#ORD0001', message: 'Great communication and very professional service.', date: '23 Jun 2025' },
    { type: 'positive', customer: 'Priya Patel',   orderId: '#ORD0002', message: 'Driver was polite and helped with loading.', date: '23 Jun 2025' },
    { type: 'positive', customer: 'Amit Verma',    orderId: '#ORD0003', message: 'On time delivery, no damage to goods at all.', date: '22 Jun 2025' },
  ],
  '#ORD0002': [
    { type: 'positive', customer: 'Priya Patel',   orderId: '#ORD0002', message: 'Driver was polite and helped with loading.', date: '23 Jun 2025' },
    { type: 'positive', customer: 'Vikram Singh',  orderId: '#ORD0005', message: 'Good service overall. Packaging was perfect.', date: '21 Jun 2025' },
    { type: 'negative', customer: 'Neha Gupta',    orderId: '#ORD0004', message: 'Tracking updates were missing for hours.', date: '22 Jun 2025' },
  ],
  '#ORD0003': [
    { type: 'positive', customer: 'Amit Verma',    orderId: '#ORD0003', message: 'Very professional team. Will use again!', date: '22 Jun 2025' },
    { type: 'positive', customer: 'Sanjay Mehta',  orderId: '#ORD0006', message: 'Smooth process from booking to delivery.', date: '21 Jun 2025' },
    { type: 'positive', customer: 'Rohit Sharma',  orderId: '#ORD0001', message: 'Excellent service! On time and great support.', date: '23 Jun 2025' },
  ],
  '#ORD0004': [
    { type: 'negative', customer: 'Neha Gupta',    orderId: '#ORD0004', message: 'Delivery was delayed. Tracking updates were late.', date: '22 Jun 2025' },
    { type: 'negative', customer: 'Anjali Mehta',  orderId: '#ORD0007', message: 'Driver was unavailable at the pickup point.', date: '20 Jun 2025' },
    { type: 'positive', customer: 'Manoj Kumar',   orderId: '#ORD0008', message: 'Overall good, communication could be better.', date: '20 Jun 2025' },
  ],
  '#ORD0005': [
    { type: 'positive', customer: 'Vikram Singh',  orderId: '#ORD0005', message: 'Good service overall. Packaging was perfect.', date: '21 Jun 2025' },
    { type: 'positive', customer: 'Rohit Sharma',  orderId: '#ORD0001', message: 'Great communication and very professional service.', date: '23 Jun 2025' },
    { type: 'negative', customer: 'Neha Gupta',    orderId: '#ORD0004', message: 'Delivery was delayed by over 3 hours.', date: '22 Jun 2025' },
  ],
  '#ORD0006': [
    { type: 'positive', customer: 'Sanjay Mehta',  orderId: '#ORD0006', message: 'Smooth process from booking to delivery.', date: '21 Jun 2025' },
    { type: 'positive', customer: 'Amit Verma',    orderId: '#ORD0003', message: 'Very professional team. Will use again!', date: '22 Jun 2025' },
    { type: 'positive', customer: 'Priya Patel',   orderId: '#ORD0002', message: 'Driver was polite and helped with loading.', date: '23 Jun 2025' },
  ],
  '#ORD0007': [
    { type: 'negative', customer: 'Anjali Mehta',  orderId: '#ORD0007', message: 'Delivery delayed by 3 hours and no updates received.', date: '20 Jun 2025' },
    { type: 'negative', customer: 'Neha Gupta',    orderId: '#ORD0004', message: 'Tracking updates were missing for hours.', date: '22 Jun 2025' },
    { type: 'positive', customer: 'Manoj Kumar',   orderId: '#ORD0008', message: 'Overall good experience despite minor delays.', date: '20 Jun 2025' },
  ],
  '#ORD0008': [
    { type: 'positive', customer: 'Manoj Kumar',   orderId: '#ORD0008', message: 'Overall good, but improve communication.', date: '20 Jun 2025' },
    { type: 'positive', customer: 'Vikram Singh',  orderId: '#ORD0005', message: 'Good service overall. Packaging was perfect.', date: '21 Jun 2025' },
    { type: 'negative', customer: 'Anjali Mehta',  orderId: '#ORD0007', message: 'Driver was unavailable at the pickup point.', date: '20 Jun 2025' },
  ],
}

// Per-settlement detailed breakdown keyed by settlement ID (used by SettlementDetailsDrawer)
export const SETTLEMENT_DETAILS = {
  DSLT0001: {
    phone: '+91 98765 43210',
    paidOn: '23 Jun 2025, 12:15 PM',
    paymentMethod: 'UPI',
    earnings: {
      freight:        16500,
      loadingUnloading: 1800,
      waitingCharges:    750,
      otherCharges:     1700,
    },
    deductions: {
      tds:             1000,
      platformFee:      800,
      otherDeductions:  200,
    },
  },
  DSLT0002: {
    phone: '+91 91234 56789',
    paidOn: '—',
    paymentMethod: 'Bank Transfer',
    earnings: {
      freight:        10200,
      loadingUnloading: 1200,
      waitingCharges:    500,
      otherCharges:      500,
    },
    deductions: {
      tds:              620,
      platformFee:      400,
      otherDeductions:  180,
    },
  },
  DSLT0003: {
    phone: '+91 99887 66554',
    paidOn: '22 Jun 2025, 05:10 PM',
    paymentMethod: 'Bank Transfer',
    earnings: {
      freight:        13000,
      loadingUnloading: 1400,
      waitingCharges:    600,
      otherCharges:      600,
    },
    deductions: {
      tds:              780,
      platformFee:      560,
      otherDeductions:  220,
    },
  },
  DSLT0004: {
    phone: '+91 88776 05443',
    paidOn: '22 Jun 2025, 04:45 PM',
    paymentMethod: 'UPI',
    earnings: {
      freight:         8000,
      loadingUnloading:  900,
      waitingCharges:    450,
      otherCharges:      500,
    },
    deductions: {
      tds:              493,
      platformFee:      350,
      otherDeductions:  142,
    },
  },
  DSLT0005: {
    phone: '+91 77665 44332',
    paidOn: '—',
    paymentMethod: 'Wallet',
    earnings: {
      freight:        11800,
      loadingUnloading: 1300,
      waitingCharges:    700,
      otherCharges:      500,
    },
    deductions: {
      tds:              715,
      platformFee:      500,
      otherDeductions:  215,
    },
  },
  DSLT0006: {
    phone: '+91 66664 33221',
    paidOn: '—',
    paymentMethod: 'Bank Transfer',
    earnings: {
      freight:         9200,
      loadingUnloading: 1050,
      waitingCharges:    500,
      otherCharges:      500,
    },
    deductions: {
      tds:              563,
      platformFee:      400,
      otherDeductions:  162,
    },
  },
  DSLT0007: {
    phone: '+91 55443 22190',
    paidOn: '20 Jun 2025, 03:00 PM',
    paymentMethod: 'UPI',
    earnings: {
      freight:        11400,
      loadingUnloading: 1300,
      waitingCharges:    600,
      otherCharges:      600,
    },
    deductions: {
      tds:              695,
      platformFee:      500,
      otherDeductions:  195,
    },
  },
  DSLT0008: {
    phone: '+91 44332 10009',
    paidOn: '20 Jun 2025, 11:30 AM',
    paymentMethod: 'Wallet',
    earnings: {
      freight:         8800,
      loadingUnloading:  950,
      waitingCharges:    500,
      otherCharges:      500,
    },
    deductions: {
      tds:              538,
      platformFee:      380,
      otherDeductions:  157,
    },
  },
}

// Per-admin extended details keyed by admin ID (used by AdminDetailsDrawer)
export const ADMIN_DETAILS = {
  ADM001: { employeeId: 'EMP001', phoneVerified: true,  twoFactorAuth: true  },
  ADM002: { employeeId: 'EMP002', phoneVerified: true,  twoFactorAuth: true  },
  ADM003: { employeeId: 'EMP003', phoneVerified: true,  twoFactorAuth: false },
  ADM004: { employeeId: 'EMP004', phoneVerified: false, twoFactorAuth: false },
  ADM005: { employeeId: 'EMP005', phoneVerified: true,  twoFactorAuth: false },
  ADM006: { employeeId: 'EMP006', phoneVerified: true,  twoFactorAuth: true  },
  ADM007: { employeeId: 'EMP007', phoneVerified: false, twoFactorAuth: false },
}

// Permissions per role (used by AdminDetailsDrawer)
export const ROLE_PERMISSIONS = {
  'Super Admin': {
    label: 'All Access',
    permissions: [
      'User Management',
      'Order Management',
      'Quotation Management',
      'Payment Management',
      'Rewards Management',
      'Reports & Analytics',
      'System Settings',
      'Access Control',
    ],
  },
  'Admin': {
    label: 'Extended Access',
    permissions: [
      'User Management',
      'Order Management',
      'Quotation Management',
      'Payment Management',
      'Rewards Management',
      'Reports & Analytics',
    ],
  },
  'Manager': {
    label: 'Operational Access',
    permissions: [
      'Order Management',
      'Quotation Management',
      'Reports & Analytics',
    ],
  },
  'Finance Admin': {
    label: 'Finance Access',
    permissions: [
      'Payment Management',
      'Reports & Analytics',
      'Quotation Management',
    ],
  },
  'Support Agent': {
    label: 'Support Access',
    permissions: [
      'User Management',
      'Order Management',
    ],
  },
}

// ─── Full Order Details (used by OrderDetails page) ──────────────────────────
export const ORDER_DETAILS = {
  '#ORD0001': {
    bookingDateTime: '23 Jun 2025, 10:30 AM',
    placedBy: 'Rohit Sharma',
    customer: {
      id: 'CUS0001',
      name: 'Rohit Sharma',
      email: 'rohit.sharma@email.com',
      phone: '+91 98765 43210',
      status: 'Active',
      joinedOn: '12 May 2025',
      totalOrders: 18,
      totalSpent: '₹1,25,400',
    },
    shipment: {
      goodsType: 'Household Items',
      packingType: 'Boxes',
      weight: '2,450 kg',
      volume: '18.6 CBM',
      packages: 25,
      vehicleType: 'Truck (Closed)',
      vehicleSize: '17 FT',
      loadType: 'Full Load',
      specialInstructions: 'Handle with care',
    },
    route: {
      pickup: {
        label: 'Connaught Place, New Delhi, 110001',
        city: 'Delhi',
        state: 'Delhi, India',
        dateTime: '23 Jun 2025, 10:30 AM',
      },
      delivery: {
        label: 'Bandra Kurla Complex, Mumbai, 400051',
        city: 'Mumbai',
        state: 'Maharashtra, India',
        dateTime: '—',
      },
      estimatedDelivery: '25 Jun 2025, 06:00 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '23 Jun 2025, 10:30 AM', detail: '',                      done: true,  active: false },
      { label: 'Driver Assigned', time: '23 Jun 2025, 11:15 AM', detail: 'Amit Kumar',             done: true,  active: false },
      { label: 'Picked Up',       time: '23 Jun 2025, 02:40 PM', detail: 'Delhi',                  done: true,  active: false },
      { label: 'In Transit',      time: '23 Jun 2025, 02:40 PM', detail: 'On the way to Mumbai',   done: false, active: true  },
      { label: 'Delivered',       time: 'Expected: 25 Jun 2025, 06:00 PM', detail: '',             done: false, active: false },
    ],
    pricing: {
      freightCharge:    16000,
      fuelCharge:        1500,
      tollCharge:         600,
      loadingCharge:      400,
      platformFeePct:      10,
    },
    driver: {
      name: 'Amit Kumar',
      phone: '+91 91234 56789',
      email: 'amit.kumar@email.com',
      rating: 4.8,
      trips: 125,
      vehicleNumber: 'DL1LA1234',
      vehicleType: 'Truck 17 Feet Closed',
      capacity: '7 Ton',
      gpsEnabled: true,
    },
    documents: [
      { label: 'Invoice',           file: 'INV-ORD0001.pdf' },
      { label: 'E-Way Bill',        file: 'EWB-87654321.pdf' },
      { label: 'Delivery Challan',  file: 'DC-ORD0001.pdf' },
      { label: 'Proof of Delivery', file: 'POD-ORD0001.pdf' },
    ],
    payment: {
      method: 'Online (Wallet)',
      status: 'Paid',
      paidOn: '23 Jun 2025, 10:35 AM',
    },
    notes: 'Please ensure safe delivery. Customer is available after 6 PM for delivery.',
  },

  '#ORD0002': {
    bookingDateTime: '23 Jun 2025, 09:15 AM',
    placedBy: 'Priya Patel',
    customer: {
      id: 'CUS0002',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 91234 56789',
      status: 'Active',
      joinedOn: '15 May 2025',
      totalOrders: 12,
      totalSpent: '₹85,600',
    },
    shipment: {
      goodsType: 'Electronics',
      packingType: 'Cartons',
      weight: '850 kg',
      volume: '6.2 CBM',
      packages: 12,
      vehicleType: 'Mini Truck',
      vehicleSize: '8 FT',
      loadType: 'Part Load',
      specialInstructions: 'Fragile items — handle with extreme care',
    },
    route: {
      pickup: {
        label: 'MG Road, Bangalore, 560001',
        city: 'Bangalore',
        state: 'Karnataka, India',
        dateTime: '23 Jun 2025, 09:15 AM',
      },
      delivery: {
        label: 'Hitech City, Hyderabad, 500081',
        city: 'Hyderabad',
        state: 'Telangana, India',
        dateTime: '—',
      },
      estimatedDelivery: '24 Jun 2025, 08:00 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '23 Jun 2025, 09:15 AM', detail: '',            done: true,  active: false },
      { label: 'Driver Assigned', time: '—',                     detail: '',            done: false, active: true  },
      { label: 'Picked Up',       time: '—',                     detail: '',            done: false, active: false },
      { label: 'In Transit',      time: '—',                     detail: '',            done: false, active: false },
      { label: 'Delivered',       time: 'Expected: 24 Jun 2025, 08:00 PM', detail: '', done: false, active: false },
    ],
    pricing: {
      freightCharge:    10000,
      fuelCharge:         800,
      tollCharge:         400,
      loadingCharge:      300,
      platformFeePct:      10,
    },
    driver: null,
    documents: [
      { label: 'Invoice',          file: 'INV-ORD0002.pdf' },
      { label: 'E-Way Bill',       file: 'EWB-ORD0002.pdf' },
      { label: 'Delivery Challan', file: 'DC-ORD0002.pdf' },
    ],
    payment: {
      method: 'Credit Card - VISA',
      status: 'Successful',
      paidOn: '23 Jun 2025, 09:20 AM',
    },
    notes: 'Please call before delivery. Prefer morning delivery.',
  },

  '#ORD0003': {
    bookingDateTime: '22 Jun 2025, 08:45 AM',
    placedBy: 'Amit Verma',
    customer: {
      id: 'CUS0003',
      name: 'Amit Verma',
      email: 'amit.verma@email.com',
      phone: '+91 99887 76655',
      status: 'Active',
      joinedOn: '20 May 2025',
      totalOrders: 9,
      totalSpent: '₹65,300',
    },
    shipment: {
      goodsType: 'Industrial Goods',
      packingType: 'Pallets',
      weight: '3,200 kg',
      volume: '22.4 CBM',
      packages: 30,
      vehicleType: 'Truck (Open)',
      vehicleSize: '20 FT',
      loadType: 'Full Load',
      specialInstructions: 'No special instructions',
    },
    route: {
      pickup: {
        label: 'Anna Nagar, Chennai, 600040',
        city: 'Chennai',
        state: 'Tamil Nadu, India',
        dateTime: '22 Jun 2025, 08:45 AM',
      },
      delivery: {
        label: 'RS Puram, Coimbatore, 641002',
        city: 'Coimbatore',
        state: 'Tamil Nadu, India',
        dateTime: '22 Jun 2025, 06:15 PM',
      },
      estimatedDelivery: '22 Jun 2025, 06:15 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '22 Jun 2025, 08:45 AM', detail: '',                       done: true, active: false },
      { label: 'Driver Assigned', time: '22 Jun 2025, 09:30 AM', detail: 'Ramesh Yadav',           done: true, active: false },
      { label: 'Picked Up',       time: '22 Jun 2025, 11:00 AM', detail: 'Chennai',                done: true, active: false },
      { label: 'In Transit',      time: '22 Jun 2025, 11:00 AM', detail: 'On the way to Coimbatore', done: true, active: false },
      { label: 'Delivered',       time: '22 Jun 2025, 06:15 PM', detail: 'Delivered Successfully', done: true, active: false },
    ],
    pricing: {
      freightCharge:     8200,
      fuelCharge:         700,
      tollCharge:         300,
      loadingCharge:      200,
      platformFeePct:      10,
    },
    driver: {
      name: 'Ramesh Yadav',
      phone: '+91 91234 56789',
      email: 'ramesh.yadav@email.com',
      rating: 4.6,
      trips: 98,
      vehicleNumber: 'UP32CT7788',
      vehicleType: 'Truck 20 Feet Open',
      capacity: '10 Ton',
      gpsEnabled: true,
    },
    documents: [
      { label: 'Invoice',           file: 'INV-ORD0003.pdf' },
      { label: 'E-Way Bill',        file: 'EWB-ORD0003.pdf' },
      { label: 'Delivery Challan',  file: 'DC-ORD0003.pdf' },
      { label: 'Proof of Delivery', file: 'POD-ORD0003.pdf' },
    ],
    payment: {
      method: 'UPI - PhonePe',
      status: 'Pending',
      paidOn: '—',
    },
    notes: 'Industrial machinery parts. Ensure no moisture exposure during transit.',
  },

  '#ORD0004': {
    bookingDateTime: '22 Jun 2025, 04:20 PM',
    placedBy: 'Neha Gupta',
    customer: {
      id: 'CUS0004',
      name: 'Neha Gupta',
      email: 'neha.gupta@email.com',
      phone: '+91 88776 65544',
      status: 'Active',
      joinedOn: '22 May 2025',
      totalOrders: 15,
      totalSpent: '₹1,10,200',
    },
    shipment: {
      goodsType: 'Furniture',
      packingType: 'Bubble Wrap',
      weight: '1,800 kg',
      volume: '14.0 CBM',
      packages: 18,
      vehicleType: 'Truck (Closed)',
      vehicleSize: '17 FT',
      loadType: 'Full Load',
      specialInstructions: 'Delicate wooden furniture — handle with extra care',
    },
    route: {
      pickup: {
        label: 'Koregaon Park, Pune, 411001',
        city: 'Pune',
        state: 'Maharashtra, India',
        dateTime: '22 Jun 2025, 04:20 PM',
      },
      delivery: {
        label: 'Sitabuldi, Nagpur, 440012',
        city: 'Nagpur',
        state: 'Maharashtra, India',
        dateTime: '—',
      },
      estimatedDelivery: '24 Jun 2025, 07:30 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '22 Jun 2025, 04:20 PM', detail: '',                        done: true,  active: false },
      { label: 'Driver Assigned', time: '22 Jun 2025, 05:10 PM', detail: 'Arjun Singh',             done: true,  active: false },
      { label: 'Picked Up',       time: '23 Jun 2025, 08:00 AM', detail: 'Pune',                    done: true,  active: false },
      { label: 'In Transit',      time: '23 Jun 2025, 08:00 AM', detail: 'On the way to Nagpur',    done: false, active: true  },
      { label: 'Delivered',       time: 'Expected: 24 Jun 2025, 07:30 PM', detail: '',              done: false, active: false },
    ],
    pricing: {
      freightCharge:    12800,
      fuelCharge:        1000,
      tollCharge:         500,
      loadingCharge:      400,
      platformFeePct:      10,
    },
    driver: {
      name: 'Arjun Singh',
      phone: '+91 98765 43210',
      email: 'arjun.singh@email.com',
      rating: 4.8,
      trips: 128,
      vehicleNumber: 'DL5AH1234',
      vehicleType: 'Truck 17 Feet Closed',
      capacity: '7 Ton',
      gpsEnabled: true,
    },
    documents: [
      { label: 'Invoice',          file: 'INV-ORD0004.pdf' },
      { label: 'E-Way Bill',       file: 'EWB-ORD0004.pdf' },
      { label: 'Delivery Challan', file: 'DC-ORD0004.pdf' },
    ],
    payment: {
      method: 'Net Banking',
      status: 'Successful',
      paidOn: '22 Jun 2025, 04:25 PM',
    },
    notes: 'Customer requests contactless delivery. Leave at the gate.',
  },

  '#ORD0005': {
    bookingDateTime: '22 Jun 2025, 02:10 PM',
    placedBy: 'Vikram Singh',
    customer: {
      id: 'CUS0005',
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 77665 44332',
      status: 'Active',
      joinedOn: '25 May 2025',
      totalOrders: 7,
      totalSpent: '₹48,900',
    },
    shipment: {
      goodsType: 'FMCG Goods',
      packingType: 'Cartons',
      weight: '620 kg',
      volume: '4.8 CBM',
      packages: 8,
      vehicleType: 'Mini Truck',
      vehicleSize: '8 FT',
      loadType: 'Part Load',
      specialInstructions: 'Temperature sensitive — keep cool',
    },
    route: {
      pickup: {
        label: 'Park Street, Kolkata, 700016',
        city: 'Kolkata',
        state: 'West Bengal, India',
        dateTime: '22 Jun 2025, 02:10 PM',
      },
      delivery: {
        label: 'Fraser Road, Patna, 800001',
        city: 'Patna',
        state: 'Bihar, India',
        dateTime: '—',
      },
      estimatedDelivery: '23 Jun 2025, 06:30 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '22 Jun 2025, 02:10 PM', detail: '',            done: true,  active: false },
      { label: 'Driver Assigned', time: '—',                     detail: '',            done: false, active: true  },
      { label: 'Picked Up',       time: '—',                     detail: '',            done: false, active: false },
      { label: 'In Transit',      time: '—',                     detail: '',            done: false, active: false },
      { label: 'Delivered',       time: 'Expected: 23 Jun 2025, 06:30 PM', detail: '', done: false, active: false },
    ],
    pricing: {
      freightCharge:     9200,
      fuelCharge:         700,
      tollCharge:         300,
      loadingCharge:      200,
      platformFeePct:      10,
    },
    driver: null,
    documents: [
      { label: 'Invoice',    file: 'INV-ORD0005.pdf' },
      { label: 'E-Way Bill', file: 'EWB-ORD0005.pdf' },
    ],
    payment: {
      method: 'UPI - Paytm',
      status: 'Successful',
      paidOn: '22 Jun 2025, 02:15 PM',
    },
    notes: 'FMCG goods. Deliver to warehouse loading dock only.',
  },

  '#ORD0006': {
    bookingDateTime: '21 Jun 2025, 07:30 PM',
    placedBy: 'Sanjay Mehta',
    customer: {
      id: 'CUS0006',
      name: 'Sanjay Mehta',
      email: 'sanjay.mehta@email.com',
      phone: '+91 66554 33221',
      status: 'Inactive',
      joinedOn: '28 May 2025',
      totalOrders: 5,
      totalSpent: '₹32,100',
    },
    shipment: {
      goodsType: 'Textile Goods',
      packingType: 'Bales',
      weight: '2,100 kg',
      volume: '16.5 CBM',
      packages: 22,
      vehicleType: 'Truck (Closed)',
      vehicleSize: '17 FT',
      loadType: 'Full Load',
      specialInstructions: 'Keep away from moisture',
    },
    route: {
      pickup: {
        label: 'CG Road, Ahmedabad, 380009',
        city: 'Ahmedabad',
        state: 'Gujarat, India',
        dateTime: '21 Jun 2025, 07:30 PM',
      },
      delivery: {
        label: 'Ring Road, Surat, 395002',
        city: 'Surat',
        state: 'Gujarat, India',
        dateTime: '22 Jun 2025, 04:30 PM',
      },
      estimatedDelivery: '22 Jun 2025, 04:30 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '21 Jun 2025, 07:30 PM', detail: '',                       done: true, active: false },
      { label: 'Driver Assigned', time: '21 Jun 2025, 08:15 PM', detail: 'Vikas Sharma',           done: true, active: false },
      { label: 'Picked Up',       time: '21 Jun 2025, 10:00 PM', detail: 'Ahmedabad',              done: true, active: false },
      { label: 'In Transit',      time: '21 Jun 2025, 10:00 PM', detail: 'On the way to Surat',    done: true, active: false },
      { label: 'Delivered',       time: '22 Jun 2025, 04:30 PM', detail: 'Delivered Successfully', done: true, active: false },
    ],
    pricing: {
      freightCharge:    12100,
      fuelCharge:         900,
      tollCharge:         500,
      loadingCharge:      300,
      platformFeePct:      10,
    },
    driver: {
      name: 'Vikas Sharma',
      phone: '+91 66664 33221',
      email: 'vikas.sharma@email.com',
      rating: 4.4,
      trips: 76,
      vehicleNumber: 'HR26R98899',
      vehicleType: 'Truck 17 Feet Closed',
      capacity: '7 Ton',
      gpsEnabled: false,
    },
    documents: [
      { label: 'Invoice',           file: 'INV-ORD0006.pdf' },
      { label: 'E-Way Bill',        file: 'EWB-ORD0006.pdf' },
      { label: 'Delivery Challan',  file: 'DC-ORD0006.pdf' },
      { label: 'Proof of Delivery', file: 'POD-ORD0006.pdf' },
    ],
    payment: {
      method: 'Credit Card',
      status: 'Successful',
      paidOn: '21 Jun 2025, 07:35 PM',
    },
    notes: 'Textile samples — no stacking above 3 layers.',
  },

  '#ORD0007': {
    bookingDateTime: '21 Jun 2025, 06:05 PM',
    placedBy: 'Anjali Mehta',
    customer: {
      id: 'CUS0007',
      name: 'Anjali Mehta',
      email: 'anjali.mehta@email.com',
      phone: '+91 55443 22110',
      status: 'Blocked',
      joinedOn: '31 May 2025',
      totalOrders: 0,
      totalSpent: '₹0',
    },
    shipment: {
      goodsType: 'Perishable Goods',
      packingType: 'Insulated Boxes',
      weight: '400 kg',
      volume: '3.2 CBM',
      packages: 6,
      vehicleType: 'Refrigerated Van',
      vehicleSize: '10 FT',
      loadType: 'Part Load',
      specialInstructions: 'Maintain temperature below 8°C at all times',
    },
    route: {
      pickup: {
        label: 'Hazratganj, Lucknow, 226001',
        city: 'Lucknow',
        state: 'Uttar Pradesh, India',
        dateTime: '21 Jun 2025, 06:05 PM',
      },
      delivery: {
        label: 'Mall Road, Kanpur, 208001',
        city: 'Kanpur',
        state: 'Uttar Pradesh, India',
        dateTime: '—',
      },
      estimatedDelivery: '21 Jun 2025, 08:00 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '21 Jun 2025, 06:05 PM', detail: '',            done: true,  active: false },
      { label: 'Driver Assigned', time: '21 Jun 2025, 06:50 PM', detail: 'Gurpreet Singh', done: true, active: false },
      { label: 'Picked Up',       time: '21 Jun 2025, 08:00 PM', detail: 'Lucknow',     done: false, active: true  },
      { label: 'In Transit',      time: '—',                     detail: '',            done: false, active: false },
      { label: 'Delivered',       time: 'Expected: 21 Jun 2025, 08:00 PM', detail: '', done: false, active: false },
    ],
    pricing: {
      freightCharge:     7200,
      fuelCharge:         600,
      tollCharge:         200,
      loadingCharge:      200,
      platformFeePct:      10,
    },
    driver: {
      name: 'Gurpreet Singh',
      phone: '+91 99887 66554',
      email: 'gurpreet.singh@email.com',
      rating: 4.7,
      trips: 110,
      vehicleNumber: 'PB10MG2233',
      vehicleType: 'Refrigerated Van 10 Feet',
      capacity: '3 Ton',
      gpsEnabled: true,
    },
    documents: [
      { label: 'Invoice',          file: 'INV-ORD0007.pdf' },
      { label: 'E-Way Bill',       file: 'EWB-ORD0007.pdf' },
      { label: 'Delivery Challan', file: 'DC-ORD0007.pdf' },
    ],
    payment: {
      method: 'UPI - G-Pay',
      status: 'Failed',
      paidOn: '—',
    },
    notes: 'Perishable dairy products. Deliver before 8 PM without fail.',
  },

  '#ORD0008': {
    bookingDateTime: '20 Jun 2025, 11:20 AM',
    placedBy: 'Manoj Kumar',
    customer: {
      id: 'CUS0008',
      name: 'Manoj Kumar',
      email: 'manoj.kumar@email.com',
      phone: '+91 66554 33221',
      status: 'Inactive',
      joinedOn: '28 May 2025',
      totalOrders: 5,
      totalSpent: '₹32,100',
    },
    shipment: {
      goodsType: 'Auto Parts',
      packingType: 'Wooden Crates',
      weight: '1,500 kg',
      volume: '11.0 CBM',
      packages: 15,
      vehicleType: 'Truck (Open)',
      vehicleSize: '17 FT',
      loadType: 'Part Load',
      specialInstructions: 'Metal parts — protect from rain',
    },
    route: {
      pickup: {
        label: 'MI Road, Jaipur, 302001',
        city: 'Jaipur',
        state: 'Rajasthan, India',
        dateTime: '20 Jun 2025, 11:20 AM',
      },
      delivery: {
        label: 'City Palace Road, Udaipur, 313001',
        city: 'Udaipur',
        state: 'Rajasthan, India',
        dateTime: '—',
      },
      estimatedDelivery: '21 Jun 2025, 04:00 PM',
    },
    timeline: [
      { label: 'Order Placed',    time: '20 Jun 2025, 11:20 AM', detail: '',            done: true,  active: false },
      { label: 'Driver Assigned', time: '—',                     detail: '',            done: false, active: false },
      { label: 'Picked Up',       time: '—',                     detail: '',            done: false, active: false },
      { label: 'In Transit',      time: '—',                     detail: '',            done: false, active: false },
      { label: 'Delivered',       time: '—',                     detail: 'Order Cancelled', done: false, active: false },
    ],
    pricing: {
      freightCharge:     6400,
      fuelCharge:         500,
      tollCharge:         300,
      loadingCharge:      200,
      platformFeePct:      10,
    },
    driver: null,
    documents: [
      { label: 'Invoice', file: 'INV-ORD0008.pdf' },
    ],
    payment: {
      method: 'Wallet',
      status: 'Refunded',
      paidOn: '20 Jun 2025, 11:22 AM',
    },
    notes: 'Order was cancelled by customer due to change in requirement.',
  },
}
