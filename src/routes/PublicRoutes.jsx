import React, { lazy, Suspense } from 'react'
import { ROUTES } from '../constants/routes'

const KnowChampHome = lazy(() => import('../pages/know-champ/Home'))
const ContestPage = lazy(() => import('../pages/know-champ/Contest'))
const HowItWorksPage = lazy(() => import('../pages/know-champ/HowItWorks'))
const LeaderboardPage = lazy(() => import('../pages/know-champ/Leaderboard'))
const Login = lazy(() => import('../pages/admin/Login'))

const withSuspense = (Component) => (
  <Suspense fallback={
    <div className="flex items-center justify-center min-h-screen bg-[#090b15]">
      <div className="w-8 h-8 border-4 border-[#fb7185] border-t-transparent rounded-full animate-spin"></div>
    </div>
  }>
    <Component />
  </Suspense>
)

const PublicRoutes = [
  {
    path: ROUTES.HOME,
    element: withSuspense(KnowChampHome),
  },
  {
    path: '/contests',
    element: withSuspense(ContestPage),
  },
  {
    path: '/how-it-works',
    element: withSuspense(HowItWorksPage),
  },
  {
    path: '/leaderboard',
    element: withSuspense(LeaderboardPage),
  },
  {
    path: ROUTES.ADMIN.LOGIN,
    element: withSuspense(Login),
  },
]

export default PublicRoutes
