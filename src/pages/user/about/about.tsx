import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
      <div className='bg-white h-auto w-[480px] p-6 rounded-lg flex flex-col justify-between gap-2'>
        <h1 className='text-xl font-semibold text-center'>Sobre a aplicação!</h1>
        <p className='text-justify'>
          Esta é uma aplicação iniciada com Vite e desenvolvida em React com TypeScript e
          Tailwindcss com o uso da biblioteca DaisyUI para estilização de alguns componentes. Para
          rodar o projeto em sua máquina, basta clonar o repositório do GitHub, instalar as
          dependências necessárias com o instalador de pacotes de sua preferência, eu utilizei o
          NPM, e então rodar o projeto.
        </p>
        <button
          type='button'
          className='btn btn-primary text-white'
          onClick={() => navigate('/user/dashboard')}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};
