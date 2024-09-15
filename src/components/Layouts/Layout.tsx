import { useEffect, useState } from 'react';
import ArrowUpIcon from '../../assets/icons/arrow-up.svg';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  /* ========================================
     = Manedar el scroll =
  ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <main>{children}</main>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-3 bg-fuccia text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${
          showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img className='h-6' src={ArrowUpIcon} alt='Icono flecha arriba' />
      </button>
    </>
  );
};