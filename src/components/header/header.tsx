import TeddyLogo from '@/assets/images/teddy.png';

export const Header = () => {
  return (
    <header className='h-20 p-2'>
      <div className='container mx-auto flex justify-center'>
        <img src={TeddyLogo} alt='Logo da Teddy Open Finance' className='h-12' />
      </div>
    </header>
  );
};
