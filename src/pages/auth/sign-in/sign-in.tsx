import { Header } from '@/components';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
        <div className='bg-white h-auto w-96 p-6 rounded-lg flex flex-col justify-between gap-6'>
          <div>
            <h3 className='text-2xl font-semibold leading-none tracking-tight'>Login</h3>
            <p className='text-lg text-muted-foreground'>Insira suas credenciais para acessar</p>
          </div>

          <form action='post' className='h-full'>
            <div className='flex flex-col justify-between gap-6'>
              <input
                type='text'
                placeholder='Usuário:'
                className='input input-bordered input-secondary w-full max-w-xs'
              />
              <input
                type='password'
                placeholder='Senha:'
                className='input input-bordered input-secondary w-full max-w-xs'
              />
            </div>
          </form>

          <button
            type='submit'
            className='btn btn-secondary'
            onClick={() => navigate('/dashboard')}
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  );
};
