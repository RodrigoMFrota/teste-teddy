import { PrivateRoute } from '@/middleware';
import { Dashboard, SignIn } from '@/pages';
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
    ],
  },
  {
    path: '*',
    element: <Navigate to='/auth/sign-in' />,
  },
]);
