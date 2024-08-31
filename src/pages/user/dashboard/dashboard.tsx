import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const localUser = localStorage.getItem('username');
  const sessionUser = sessionStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };
  return (
    <>
      <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
        <div className='bg-white h-auto w-96 p-6 rounded-lg flex flex-col justify-between gap-2'>
          <h2 className='text-xl font-semibold text-center'>
            Olá, {localUser ?? sessionUser}. Seja bem-vindo!
          </h2>

          <button type='button' className='btn' onClick={() => navigate('/user/partners')}>
            Parceiros
          </button>

          <button
            type='button'
            className='btn'
            onClick={() => navigate('/user/external-companies')}
          >
            Empresas externas
          </button>

          <button type='button' className='btn' onClick={() => navigate('/user/about')}>
            Sobre a aplicação
          </button>

          <button type='button' className='btn btn-error text-white' onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </>
  );
};
