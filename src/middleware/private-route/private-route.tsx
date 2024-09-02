import { Header } from '@/components';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const localUser = localStorage.getItem('username');
    const sessionUser = sessionStorage.getItem('username');
    if (!localUser && !sessionUser) navigate('/auth/sign-in');
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
