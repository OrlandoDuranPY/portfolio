// Iconos
import GithubIcon from '../assets/icons/github-white.svg';
import InstagramIcon from '../assets/icons/instagram-white.svg';
import LinkedInIcon from '../assets/icons/linkedin-white.svg';
import { CustomLink } from './CustomLink';
import { CustomIconLink } from './CustomIconLink';

export const Footer = () => {
  return (
    <>
      {/* Vista tablet y desktop */}
      <div className='hidden md:block w-full bg-customBlack2 py-10 px-10 lg:px-0'>
        <div className='container mx-auto md:flex justify-between items-center'>
          {/* Redes Sociales */}
          <ul className='flex gap-5'>
            <CustomIconLink
              href='https://github.com/OrlandoDuranPY/'
              icon={GithubIcon}
              alt='Enlace a Github'
            />
            <CustomIconLink
              href='https://www.instagram.com/orlandoduranpy.dev/'
              icon={InstagramIcon}
              alt='Enlace a Instagram'
            />
            <CustomIconLink
              href='https://www.linkedin.com/in/orlandoduranpy/'
              icon={LinkedInIcon}
              alt='Enlace a Linkedin'
            />
          </ul>

          {/* Menu */}
          <ul className='flex gap-10 rounded-full font-palanquin'>
            <CustomLink to='/'>INICIO</CustomLink>
            <CustomLink to='/about'>ACERCA DE MI</CustomLink>
            <CustomLink to='/works'>MI TRABAJO</CustomLink>
            <CustomLink to='/contact'>CONTACTO</CustomLink>
          </ul>
        </div>
        <div className='border border-t border-white border-opacity-20 container m-auto mt-10'></div>
        {/* Derechos */}
        <p className='text-center text-sm mt-10 text-white text-opacity-50'>
          &copy; 2024 @orlandoduranpy
        </p>
        {/* Redes sociales */}
      </div>

      {/* Vista movil */}
      <div className='block md:hidden w-full bg-customBlack2 py-10 px-8 lg:px-0'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo y Redes Sociales */}
          <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-white font-palanquin opacity-50'>Orlandoduranpy.dev</h1>
            <ul className='flex gap-5'>
              <CustomIconLink
                href='https://github.com/OrlandoDuranPY/'
                icon={GithubIcon}
                alt='Enlace a Github'
              />
              <CustomIconLink
                href='https://www.instagram.com/orlandoduranpy.dev/'
                icon={InstagramIcon}
                alt='Enlace a Instagram'
              />
              <CustomIconLink
                href='https://www.linkedin.com/in/orlandoduranpy/'
                icon={LinkedInIcon}
                alt='Enlace a Linkedin'
              />
            </ul>
          </div>
          {/* Menu */}
          <ul className='flex gap-5 rounded-full font-palanquin flex-col text-right'>
            <CustomLink textSmall to='/'>
              INICIO
            </CustomLink>
            <CustomLink textSmall to='/about'>
              ACERCA DE MI
            </CustomLink>
            <CustomLink textSmall to='/works'>
              MI TRABAJO
            </CustomLink>
            <CustomLink textSmall to='/contact'>
              CONTACTO
            </CustomLink>
          </ul>
        </div>
        <div className='border border-t border-white border-opacity-20 container m-auto mt-10'></div>
        {/* Derechos */}
        <p className='text-center text-sm mt-10 text-white text-opacity-50'>
          &copy; 2024 @orlandoduranpy.dev, Todos los derechos reservados
        </p>
        {/* Redes sociales */}
      </div>
    </>
  );
};
