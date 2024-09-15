import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import SassIcon from '../assets/icons/sass.svg';
import BootstrapIcon from '../assets/icons/bootstrap.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import JavascriptIcon from '../assets/icons/javascript.svg';
import ReactIcon from '../assets/icons/react.svg';
import VueIcon from '../assets/icons/vue.svg';
import LaravelIcon from '../assets/icons/laravel.svg';
import LivewireIcon from '../assets/icons/livewire.svg';
import MysqlIcon from '../assets/icons/mysql.svg';
import PostgresqlIcon from '../assets/icons/postgresql.svg';
import GithubIcon from '../assets/icons/github2.svg';
import Slider from 'react-slick';
import { TechItem } from '../components/TechItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Container } from '../components/Layouts/Container';
// import { SectionTitle } from '../components/Layouts/SectionTitle';

export const Techs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024, // Pantallas grandes
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Pantallas medianas
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480, // Pantallas pequeñas
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      {/* <Container>
        <SectionTitle>
          <p className='text-center'>
            Tecnologías con las que he trabajado
          </p>
        </SectionTitle>
      </Container> */}
      <div className='slider-container pointer-events-none'>
        <Slider {...settings}>
         {/* Lenguajes de Marcado */}
         <TechItem src={HtmlIcon} alt='HTML icon' label='HTML' />
          {/* Lenguajes de Estilo */}
          <TechItem src={CssIcon} alt='CSS icon' label='CSS' />
          <TechItem src={SassIcon} alt='SASS icon' label='SASS' />
          <TechItem src={BootstrapIcon} alt='Bootstrap icon' label='Bootstrap' />
          <TechItem src={TailwindIcon} alt='Tailwind icon' label='TailwindCSS' />
          {/* Lenguajes de Programación */}
          <TechItem src={JavascriptIcon} alt='Javascript icon' label='JavaScript' />
          {/* Frameworks y Librerías */}
          <TechItem src={ReactIcon} alt='React icon' label='React' />
          <TechItem src={VueIcon} alt='Vue icon' label='Vue.js' />
          <TechItem src={LaravelIcon} alt='Laravel icon' label='Laravel' />
          <TechItem src={LivewireIcon} alt='Livewire icon' label='Livewire' />
          {/* Bases de Datos */}
          <TechItem src={MysqlIcon} alt='Mysql icon' label='MySQL' />
          <TechItem src={PostgresqlIcon} alt='Postgresql icon' label='PostgreSQL' />
          {/* Herramientas de Control de Versiones */}
          <TechItem src={GithubIcon} alt='Github icon' label='GitHub' />
        </Slider>
      </div>
    </>
  );
};
