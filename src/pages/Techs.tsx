import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/javascript.svg';
import SassIcon from '../assets/icons/sass.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import ReactIcon from '../assets/icons/react.svg';
import VueIcon from '../assets/icons/vue.svg';
import LaravelIcon from '../assets/icons/laravel.svg';
import LivewireIcon from '../assets/icons/livewire.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Techs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
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
    <div className='slider-container pointer-events-none'>
      <Slider {...settings}>
        <div className='carousel-item'><img src={HtmlIcon} alt='HTML icon' /></div>
        <div className='carousel-item'><img src={CssIcon} alt='CSS icon' /></div>
        <div className='carousel-item'><img src={JavascriptIcon} alt='Javascript icon' /></div>
        <div className='carousel-item'><img src={SassIcon} alt='SASS icon' /></div>
        <div className='carousel-item'><img src={TailwindIcon} alt='Tailwind icon' /></div>
        <div className='carousel-item'><img src={ReactIcon} alt='React icon' /></div>
        <div className='carousel-item'><img src={VueIcon} alt='Vue icon' /></div>
        <div className='carousel-item'><img src={LaravelIcon} alt='Laravel icon' /></div>
        <div className='carousel-item'><img src={LivewireIcon} alt='Livewire icon' /></div>
      </Slider>
    </div>
  );
};