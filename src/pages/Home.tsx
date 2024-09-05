// import Avatar from '../assets/images/avatar.png';
import AvatarBlob from '../assets/images/avatar-blob.png';
import { CustomHeaderIconLink } from '../components/CustomHeaderIconLink';
import GithubIconWhite from '../assets/icons/github-white.svg';
import InstagramIconWhite from '../assets/icons/instagram-white.svg';
import LinkedInIconWhite from '../assets/icons/linkedin-white.svg';

export const Home = () => {
  return (
    <div className='container mx-auto py-14 lg:py-0 px-8 lg:px-0'>
      <div className='w-full flex flex-col lg:flex-row-reverse gap-5 lg:justify-center lg:items-center'>
        <img
          className='w-full lg:w-2/5'
          src={AvatarBlob}
          alt='Usuario de prueba'
        />
        {/* Redes Sociales */}
        <ul className='flex gap-5 lg:hidden'>
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
        <div className='space-y-3 lg:space-y-5'>
          <h1 className='text-white text-3xl lg:text-5xl font-semibold font-palanquin'>
            ¡Hola, soy <span className='text-fuccia'>Orlando</span>! 👋
          </h1>
          <p className='text-white opacity-80 lg:w-4/6'>
            Desarrollador web con 3 años de experiencia en crear aplicaciones
            dinámicas usando Laravel, TailwindCSS, Livewire, JavaScript y más.
            Me encanta encontrar soluciones creativas y eficientes para cada
            proyecto.
          </p>
        </div>
      </div>
    </div>
  );
};
