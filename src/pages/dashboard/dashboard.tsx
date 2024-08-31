import { Header } from '@/components';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='h-[calc(100vh-5rem)] bg-zinc-900 flex justify-center items-center'>
        <div className='bg-white h-auto w-96 p-6 rounded-lg flex flex-col justify-between gap-6'>
          <p>Testando</p>
        </div>
      </div>
    </>
  );
};
