import { CustomLink } from './CustomLink';
// Iconos
import GithubIcon from '../assets/icons/github.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

export const Header = () => {
  return (
    <nav className='w-full bg-gra py-5'>
      <div className='container py-5 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-2xl font-black'>Orlandoduranpy.dev</h1>

        {/* Menu */}
        <ul className='flex gap-5 rounded-full'>
            <CustomLink to="/">Inicio</CustomLink>
            <CustomLink to="/about">Acerca de mi</CustomLink>
            <CustomLink to="/works">Mi trabajo</CustomLink>
        </ul>

        {/* Redes Sociales */}
        <ul className='flex gap-5'>
            <li>
                <a href="https://github.com/OrlandoDuranPY/" target='_blank'><img className='h-6' src={GithubIcon} alt="Github" /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/orlandoduranpy.dev/" target='_blank'><img className='h-6' src={InstagramIcon} alt="Instagram" /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/orlandoduranpy/" target='_blank'><img className='h-6' src={LinkedInIcon} alt="Linkedin" /></a>
            </li>
        </ul>
      </div>
    </nav>
  );
};
