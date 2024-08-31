import { Header } from '@/components';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };
  return (
    <>
      <Header />
      <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
        <div className='bg-white h-auto w-96 p-6 rounded-lg flex flex-col justify-between gap-6'>
          <button type='button' className='btn btn-secondary' onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </>
  );
};
