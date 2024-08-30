import { SignIn } from '@/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/auth/sign-in',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <Navigate to='/auth/sign-in' />,
  },
]);
