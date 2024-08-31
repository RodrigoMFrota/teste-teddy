import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem('username');
    const sessionUser = sessionStorage.getItem('username');
    if (!localUser && !sessionUser) navigate('auth/sign-in');
  }, []);

  return <Outlet />;
};
