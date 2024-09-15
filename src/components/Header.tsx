import { useEffect, useState } from 'react';
import { CustomLink } from './CustomLink';
import { CustomHeaderIconLink } from './CustomHeaderIconLink';
import GithubIconWhite from '../assets/icons/github-white.svg';
import InstagramIconWhite from '../assets/icons/instagram-white.svg';
import LinkedInIconWhite from '../assets/icons/linkedin-white.svg';
import CloseMenuIcon from '../assets/icons/close-menu.svg';
import HamburguerMenuIcon from '../assets/icons/hamburguer-menu.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ========================================
     = Abrir o cerrar menu =
  ========================================= */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /* ========================================
     = Manejar scroll =
  ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Vista tablet y desktop */}
      <nav className='hidden lg:block w-full py-5 fixed z-50 transition-all'>
        <div className={`container py-5 mx-auto flex justify-between items-center px-8 ${isScrolled ? 'bg-customBlack2' : 'bg-white bg-opacity-10'}  rounded-3xl`}>
          {/* Logo */}
          <a href='/' className='text-2xl font-bold text-white font-jost'>
            Orlandoduranpy.dev
          </a>

          {/* Menu */}
          <ul className='flex gap-10 rounded-full font-jost'>
            <CustomLink to='#home'>INICIO</CustomLink>
            <CustomLink to='#about'>ACERCA DE MI</CustomLink>
            <CustomLink to='#works'>MI TRABAJO</CustomLink>
            <CustomLink to='#contact'>CONTACTO</CustomLink>
          </ul>

          {/* Redes Sociales */}
          <ul className='flex gap-5'>
            <CustomHeaderIconLink
              whiteIcon={GithubIconWhite}
              alt='Icono Github'
              href='https://github.com/OrlandoDuranPY/'
            />
            <CustomHeaderIconLink
              whiteIcon={InstagramIconWhite}
              alt='Icono Instagram'
              href='https://www.instagram.com/orlandoduranpy.dev/'
            />
            <CustomHeaderIconLink
              whiteIcon={LinkedInIconWhite}
              alt='Icono Linkedin'
              href='https://www.linkedin.com/in/orlandoduranpy/'
            />
          </ul>
        </div>
      </nav>

      {/* Vista mobile */}
      <nav className='lg:hidden w-full fixed'>
        <div className='container py-4 mx-auto flex justify-between items-center px-8'>
          {/* Logo */}
          <h1 className='text-xl font-bold text-white'>Orlandoduranpy.dev</h1>

          {/* Menu Button */}
          <button className='text-white' onClick={toggleMenu}>
            <img
              className='h-6'
              src={HamburguerMenuIcon}
              alt='Icono Menu de Hamburguesa'
            />
          </button>
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 bg-customBlack2 bg-opacity-95 z-50 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex justify-end p-5'>
          <button className='text-white' onClick={toggleMenu}>
            <img className='h-6' src={CloseMenuIcon} alt='Icono cerrar menu' />
          </button>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <ul className='text-2xl text-center space-y-5 font-jost'>
            <CustomLink to='#home' toggleMenu={toggleMenu}>
              INICIO
            </CustomLink>
            <CustomLink to='#about' toggleMenu={toggleMenu}>
              ACERCA DE MI
            </CustomLink>
            <CustomLink to='#works' toggleMenu={toggleMenu}>
              MI TRABAJO
            </CustomLink>
            <CustomLink to='#contact' toggleMenu={toggleMenu}>
              CONTACTO
            </CustomLink>
          </ul>
        </div>
      </div>
    </>
  );
};
