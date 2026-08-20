// Centralized Local In-Memory Mock Database

// Existing Category data from website
export let mockCategories = [
  {
    id: 1,
    name: 'General Knowledge',
    slug: 'general-knowledge',
    icon: '📚',
    image: '/cat-general.png',
    colorClass: 'text-red-500 bg-red-500/10 border-red-500/20',
    borderGlowClass: 'hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]',
    description: 'Test your knowledge across a wide variety of topics.',
    isActive: true
  },
  {
    id: 2,
    name: 'Science',
    slug: 'science',
    icon: '🔬',
    image: '/cat-science.png',
    colorClass: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    borderGlowClass: 'hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]',
    description: 'Explore the wonders of physics, chemistry, biology, and space.',
    isActive: true
  },
  {
    id: 3,
    name: 'Current Affairs',
    slug: 'current-affairs',
    icon: '📰',
    image: '/cat-current.png',
    colorClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    borderGlowClass: 'hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)]',
    description: 'Stay updated with recent national and international events.',
    isActive: true
  },
  {
    id: 4,
    name: 'Sports',
    slug: 'sports',
    icon: '⚽',
    image: '/cat-sports.png',
    colorClass: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    borderGlowClass: 'hover:border-orange-400/50 hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]',
    description: 'Quizzes about football, cricket, basketball, Olympics, and more.',
    isActive: true
  },
  {
    id: 5,
    name: 'Entertainment',
    slug: 'entertainment',
    icon: '🎬',
    image: '/cat-entertainment.png',
    colorClass: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    borderGlowClass: 'hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.25)]',
    description: 'Movies, music, TV series, celebrity trivia, and pop culture.',
    isActive: true
  },
  {
    id: 6,
    name: 'Technology',
    slug: 'technology',
    icon: '💻',
    image: '/cat-technology.png',
    colorClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    borderGlowClass: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]',
    description: 'Computers, internet, gadgets, coding, and history of tech.',
    isActive: true
  },
  {
    id: 7,
    name: 'History',
    slug: 'history',
    icon: '📜',
    image: '/cat-history.png',
    colorClass: 'text-amber-600 bg-amber-600/10 border-amber-600/20',
    borderGlowClass: 'hover:border-amber-600/50 hover:shadow-[0_0_20px_rgba(217,119,6,0.25)]',
    description: 'Dive into ancient civilizations, wars, historical empires, and events.',
    isActive: true
  }
];

// Existing Contest data from website
export let mockContests = [
  {
    id: 1,
    categoryId: 1,
    category: { id: 1, name: 'General Knowledge' },
    title: 'Mega GK Battle',
    description: 'Show off your General Knowledge skills in this epic battle.',
    prizePool: 50000,
    entryFee: 20,
    joined: 2450,
    maxParticipants: 5000,
    minParticipants: 10,
    durationMinutes: 20,
    image: '/cat-general.png',
    startTime: new Date('2026-07-22T08:00:00Z').toISOString(),
    endTime: new Date('2026-07-22T08:20:00Z').toISOString(),
    isActive: true,
    status: 'Live',
    date: '22 July 2026, 8:00 Am'
  },
  {
    id: 2,
    categoryId: 2,
    category: { id: 2, name: 'Science' },
    title: 'Science Champions',
    description: 'Test your scientific knowledge in physics, chemistry, and biology.',
    prizePool: 30000,
    entryFee: 15,
    joined: 1200,
    maxParticipants: 2000,
    minParticipants: 10,
    durationMinutes: 15,
    image: '/cat-science.png',
    startTime: new Date('2026-07-23T10:00:00Z').toISOString(),
    endTime: new Date('2026-07-23T10:15:00Z').toISOString(),
    isActive: true,
    status: 'Upcoming',
    date: '23 July 2026, 10:00 Am'
  },
  {
    id: 3,
    categoryId: 3,
    category: { id: 3, name: 'Current Affairs' },
    title: 'Current Affairs Quiz',
    description: 'Stay updated with national and global current affairs quizzes.',
    prizePool: 20000,
    entryFee: 5,
    joined: 3800,
    maxParticipants: 5000,
    minParticipants: 20,
    durationMinutes: 10,
    image: '/cat-current.png',
    startTime: new Date('2026-07-24T09:00:00Z').toISOString(),
    endTime: new Date('2026-07-24T09:10:00Z').toISOString(),
    isActive: true,
    status: 'Live',
    date: '24 July 2026, 9:00 Am'
  },
  {
    id: 4,
    categoryId: 4,
    category: { id: 4, name: 'Sports' },
    title: 'Sports Mania',
    description: 'Ultimate trivia on sports including football, cricket, and tennis.',
    prizePool: 25000,
    entryFee: 20,
    joined: 850,
    maxParticipants: 1000,
    minParticipants: 5,
    durationMinutes: 15,
    image: '/cat-sports.png',
    startTime: new Date('2026-07-25T11:00:00Z').toISOString(),
    endTime: new Date('2026-07-25T11:15:00Z').toISOString(),
    isActive: true,
    status: 'Upcoming',
    date: '25 July 2026, 11:00 Am'
  },
  {
    id: 5,
    categoryId: 6,
    category: { id: 6, name: 'Technology' },
    title: 'Tech Titans',
    description: 'Quiz on computers, algorithms, hardware, and giant tech companies.',
    prizePool: 40000,
    entryFee: 10,
    joined: 1950,
    maxParticipants: 3000,
    minParticipants: 15,
    durationMinutes: 20,
    image: '/cat-technology.png',
    startTime: new Date('2026-07-26T07:00:00Z').toISOString(),
    endTime: new Date('2026-07-26T07:20:00Z').toISOString(),
    isActive: true,
    status: 'Live',
    date: '26 July 2026, 7:00 Am'
  }
];

// Initial Features from website homepage
export let mockFeatures = [
  {
    id: 1,
    iconName: "ShieldCheck",
    title: "Fair & Transparent",
    description: "Our platform is 100% fair. We follow the perfect rules of the game for accurate results. Our platform is completely trustworthy for players.",
    colorClass: "text-[#E94B4B]",
    isActive: true,
    displayOrder: 1
  },
  {
    id: 2,
    iconName: "Gift",
    title: "Exciting Rewards",
    description: "Win real cash prizes, badges, and unlock exclusive rewards based on your skills.",
    colorClass: "text-[#E94B4B]",
    isActive: true,
    displayOrder: 2
  },
  {
    id: 3,
    iconName: "BookOpen",
    title: "Learn & Grow",
    description: "Improve your general knowledge and subject expertise with daily quiz challenges.",
    colorClass: "text-[#E94B4B]",
    isActive: true,
    displayOrder: 3
  },
  {
    id: 4,
    iconName: "Lock",
    title: "Secure & Trusted",
    description: "Your data, wallet funds, and transactions are completely secure and private.",
    colorClass: "text-[#E94B4B]",
    isActive: true,
    displayOrder: 4
  }
];

// Platform System Settings
export let mockSettings = {
  platformName: 'KnowChamp',
  logoUrl: '/logo_knowchamp.png',
  emailNotifications: true,
  realtimeSocketAlerts: true,
  newBookingAlerts: true,
  quotationAlerts: true,
  settlementAlerts: true,
  userRegistrationAlerts: true
};

// Legal Policies Content HTML Mock Templates
const DEFAULT_CUSTOMER_POLICY = `<h2>1. Introduction</h2>
<p>Welcome to <strong>KnowChamp</strong> ("we", "our", "us"). We are committed to protecting your privacy and ensuring the security of your personal and gameplay information. This Privacy Policy governs your use of the KnowChamp mobile application and web portal.</p>

<h2>2. Information We Collect</h2>
<p>To provide a fair, competitive, and secure quiz gaming experience, we collect the following categories of information:</p>
<ul>
  <li><strong>Account &amp; Profile Details:</strong> Full name, username, mobile phone number, email address, date of birth, and avatar selection.</li>
  <li><strong>Gameplay &amp; Tournament Analytics:</strong> Contest participation history, response speed, accuracy rates, leaderboard rankings, and tournament achievements.</li>
  <li><strong>Wallet &amp; Financial Transactions:</strong> Entry fee transactions, prize pool winnings, withdrawal records, and payout identifiers (e.g., UPI ID, Bank Account details) for prize distributions.</li>
  <li><strong>Device &amp; Security Data:</strong> IP address, device model, operating system, and geolocation data (used strictly to enforce regional contest eligibility and anti-cheat policies).</li>
</ul>

<h2>3. How We Use Your Information</h2>
<ul>
  <li>Facilitating real-time quiz matchmaking and live tournament score computation.</li>
  <li>Crediting prize pool winnings, bonuses, and processing instant wallet withdrawals.</li>
  <li>Ensuring fair-play compliance and detecting unauthorized bots, emulators, or multi-accounting.</li>
  <li>Delivering personalized contest recommendations, push notifications, and customer support.</li>
</ul>

<h2>4. Fair Play &amp; Anti-Fraud Monitoring</h2>
<p>KnowChamp employs automated security algorithms to analyze in-game response patterns. Any suspicious automation or fraudulent activity will result in account review and potential prize forfeiture.</p>

<h2>5. Data Protection &amp; Security</h2>
<p>We implement 256-bit SSL encryption and strict server access controls to ensure your financial and personal data remains protected against unauthorized access.</p>

<h2>6. Contact &amp; Privacy Requests</h2>
<p>For inquiries regarding data protection, consent withdrawal, or account deletion, contact our privacy team at <strong>privacy@knowchamp.com</strong> or through the in-app Support Center.</p>`;

const DEFAULT_DRIVER_POLICY = `<h2>1. Contest Organizers &amp; Quiz Hosts Overview</h2>
<p>This Privacy Policy outlines how <strong>KnowChamp</strong> collects, uses, and safeguards information provided by verified quiz creators, tournament hosts, and content moderators on our platform.</p>

<h2>2. Host Verification &amp; Payout Data</h2>
<p>To ensure content integrity and facilitate host revenue-sharing, we collect:</p>
<ul>
  <li><strong>Identity &amp; Tax Compliance:</strong> Government-issued ID, PAN details, and verified bank credentials for hosting commission payouts and TDS reporting.</li>
  <li><strong>Content Submissions:</strong> Question banks, answer keys, subject category tags, and reference explanations.</li>
  <li><strong>Host Activity Metrics:</strong> Contest creation history, player engagement statistics, and rating reviews.</li>
  <li><strong>KYC Verification:</strong> Host bank details, UPI ID and pan card upload verification status.</li>
</ul>

<h2>3. Content Ownership &amp; Integrity</h2>
<ul>
  <li>Question submissions must adhere to KnowChamp originality and copyright standards.</li>
  <li>Host credentials and question bank repositories are secured with multi-factor authentication.</li>
</ul>

<h2>4. Host Support &amp; Compliance</h2>
<p>For questions regarding creator agreements or payout policies, reach out to <strong>partners@knowchamp.com</strong>.</p>`;

const DEFAULT_CUSTOMER_TERMS = `<h2>1. Acceptance of Terms</h2>
<p>By downloading, registering, or participating in quiz contests on <strong>KnowChamp</strong>, you agree to be legally bound by these Terms and Conditions and our Platform Rules.</p>

<h2>2. Eligibility &amp; Account Registration</h2>
<ul>
  <li>Users must be at least 18 years of age (or have verified parental/guardian consent) to participate in cash prize tournaments.</li>
  <li>Each player is entitled to maintain only one active KnowChamp account. Multi-accounting, emulator usage, or profile sharing is strictly prohibited.</li>
  <li>Players from restricted jurisdictions where skill-based gaming is legally prohibited are not eligible to enter paid contests.</li>
</ul>

<h2>3. Contests, Entry Fees &amp; Prize Pools</h2>
<ul>
  <li>Contests require the payment of a specified entry fee or ticket prior to joining.</li>
  <li>Entry fees are non-refundable once a contest countdown begins or questions are revealed.</li>
  <li>Prize pools are distributed strictly according to official leaderboard rankings computed based on accuracy, score, and answering speed.</li>
  <li>In case of a tie, the prize allocation follows the transparent tie-breaker protocol specified for that contest.</li>
</ul>

<h2>4. Wallet, Winnings &amp; Withdrawals</h2>
<ul>
  <li>Wallet balances consist of Deposit Balance, Bonus Cash, and Withdrawable Winnings.</li>
  <li>Winnings can be withdrawn to verified UPI IDs or bank accounts subject to mandatory KYC verification.</li>
  <li>KnowChamp complies with applicable tax regulations, including Tax Deducted at Source (TDS) on net winnings where mandated by law.</li>
</ul>

<h2>5. Fair Play &amp; Anti-Cheating Policy</h2>
<p>KnowChamp operates a zero-tolerance policy against cheating, automated scripts, screen mirroring tools, or collusion. Violations will result in immediate disqualification, permanent account banning, and forfeiture of all balances.</p>

<h2>6. Limitation of Liability</h2>
<p>KnowChamp is a game of knowledge, skill, and cognitive speed. We are not liable for gameplay disruptions arising from user connectivity issues, device failures, or third-party telecommunication interruptions.</p>`;

const DEFAULT_DRIVER_TERMS = `<h2>1. Quiz Host &amp; Partner Agreement</h2>
<p>This Agreement governs your onboarding and engagement as approved Quiz Creators, Tournament Hosts, or Subject Experts on the <strong>KnowChamp</strong> platform.</p>

<h2>2. Question Quality &amp; Confidentiality</h2>
<ul>
  <li>Hosts must ensure all submitted questions are factually accurate, unambiguous, and free from intellectual property infringement.</li>
  <li>Leaking question sets or answer keys prior to contest conclusion is a severe breach resulting in immediate legal action and compensation claims.</li>
  <li>KnowChamp reserves editorial rights to review, approve, modify, or reject any submitted content.</li>
</ul>

<h2>3. Host Revenue Share &amp; Settlements</h2>
<ul>
  <li>Host commission payouts are calculated based on contest participation volume minus platform hosting fees.</li>
  <li>Settlements are processed weekly to verified bank accounts following anti-fraud review.</li>
</ul>

<h2>4. Account Termination</h2>
<p>KnowChamp reserves the right to suspend or terminate host privileges for non-compliance with quality standards or community guidelines.</p>`;

// Mock Legal Database (Policies & Terms)
export let mockPrivacyPolicies = {
  customer: {
    active: {
      id: 1,
      version: 'v1.0.0',
      content: DEFAULT_CUSTOMER_POLICY,
      isActive: true,
      status: 'Active',
      publishedAt: '2026-08-10T12:00:00Z',
      publishedBy: 'System Admin'
    },
    history: [
      {
        id: 1,
        version: 'v1.0.0',
        content: DEFAULT_CUSTOMER_POLICY,
        isActive: true,
        status: 'Active',
        publishedAt: '2026-08-10T12:00:00Z',
        publishedBy: 'System Admin'
      }
    ]
  },
  driver: {
    active: {
      id: 2,
      version: 'v1.0.0',
      content: DEFAULT_DRIVER_POLICY,
      isActive: true,
      status: 'Active',
      publishedAt: '2026-08-10T12:00:00Z',
      publishedBy: 'System Admin'
    },
    history: [
      {
        id: 2,
        version: 'v1.0.0',
        content: DEFAULT_DRIVER_POLICY,
        isActive: true,
        status: 'Active',
        publishedAt: '2026-08-10T12:00:00Z',
        publishedBy: 'System Admin'
      }
    ]
  }
};

export let mockTermsConditions = {
  customer: {
    active: {
      id: 1,
      version: 'v1.0.0',
      content: DEFAULT_CUSTOMER_TERMS,
      isActive: true,
      status: 'Active',
      publishedAt: '2026-08-10T12:00:00Z',
      publishedBy: 'System Admin'
    },
    history: [
      {
        id: 1,
        version: 'v1.0.0',
        content: DEFAULT_CUSTOMER_TERMS,
        isActive: true,
        status: 'Active',
        publishedAt: '2026-08-10T12:00:00Z',
        publishedBy: 'System Admin'
      }
    ]
  },
  driver: {
    active: {
      id: 2,
      version: 'v1.0.0',
      content: DEFAULT_DRIVER_TERMS,
      isActive: true,
      status: 'Active',
      publishedAt: '2026-08-10T12:00:00Z',
      publishedBy: 'System Admin'
    },
    history: [
      {
        id: 2,
        version: 'v1.0.0',
        content: DEFAULT_DRIVER_TERMS,
        isActive: true,
        status: 'Active',
        publishedAt: '2026-08-10T12:00:00Z',
        publishedBy: 'System Admin'
      }
    ]
  }
};

// Mock Support Contact details
export let mockSupportContact = {
  id: 1,
  supportEmail: 'support@knowchamp.com',
  helplineNumber: '+91 98765 43210',
  officeAddress: '102, Innovation Hub, Tech City, Bangalore, India',
  workingHours: 'Mon - Sat: 9:00 AM to 6:00 PM',
  updatedAt: '2026-08-15T10:00:00Z'
};

// Mock Notifications list
export let mockNotifications = [
  {
    id: 1,
    title: 'New Contest Published',
    message: 'Weekly Grand GK Challenge is now live for registration.',
    isRead: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Withdrawal Verified',
    message: 'User USR003 withdrawal request of ₹1,200 has been verified.',
    isRead: true,
    createdAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 3,
    title: 'System Settings Updated',
    message: 'Platform settings updated successfully by admin.',
    isRead: true,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

// Profile Details Mock Storage
export let mockUserProfile = {
  id: 1,
  name: 'Admin User',
  email: 'admin@quizapp.com',
  role: 'admin',
  profilePicUrl: null,
  createdAt: '2026-01-01T00:00:00Z'
};
