import { PrivateRoute } from '@/middleware';
import { About, Dashboard, ExternalCompanies, Partners, SignIn } from '@/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/auth/sign-in',
    element: <SignIn />,
  },
  {
    path: '/user',
    element: <PrivateRoute />,
    children: [
      {
        path: '/user/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/user/partners',
        element: <Partners />,
      },
      {
        path: '/user/external-companies',
        element: <ExternalCompanies />,
      },
      {
        path: '/user/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/auth/sign-in' />,
  },
]);
