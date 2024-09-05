import { useEffect, useState } from 'react';
import ArrowUpIcon from '../../assets/icons/arrow-up.svg';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  /* ========================================
     = Manedar el scrolll =
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
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 p-3 bg-fuccia text-white rounded-full shadow-lg lg:hidden'
        >
          <img className='h-6' src={ArrowUpIcon} alt='Icono flecha arriba' />
        </button>
      )}
    </>
  );
};
