import { useForm } from 'react-hook-form';
import { Header } from '@/components';
import { useNavigate } from 'react-router-dom';
import type * as T from './types';

export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<T.FormValues>({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: T.FormValues) => {
    if (data.password !== 'admin') {
      alert('Dados inválidos.');
      return;
    }

    if (data.rememberMe) {
      localStorage.setItem('username', data.username);
    } else {
      sessionStorage.setItem('username', data.username);
    }

    navigate('/dashboard');
  };

  return (
    <>
      <Header />

      <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
        <div className='bg-white h-auto w-96 p-6 rounded-lg flex flex-col justify-between gap-6'>
          <div>
            <h3 className='text-2xl font-semibold leading-none tracking-tight'>Login</h3>
            <p className='text-lg text-muted-foreground'>Insira suas credenciais para acessar</p>
          </div>

          <form
            className='h-full flex flex-col justify-between gap-6'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='text'
              placeholder='Usuário:'
              className='input input-bordered input-secondary w-full'
              {...register('username')}
            />

            <input
              type='password'
              placeholder='Senha:'
              className='input input-bordered input-secondary w-full'
              {...register('password')}
            />

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                className='checkbox checkbox-secondary'
                {...register('rememberMe')}
              />

              <label className='cursor-pointer label'>
                <span className='label-text'>Manter-me conectado</span>
              </label>
            </div>

            <button type='submit' className='btn btn-secondary w-full'>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
