import { SectionTitle } from '../components/Layouts/SectionTitle';
import Avatar from '../assets/images/avatar-blob.png';

export const About = () => {
  return (
    <>
      <div className='container mx-auto px-8 lg:px-0'>
        <div className='flex flex-col lg:flex-row items-center justify-evenly'>
          <div className='lg:w-3/6'>
            <SectionTitle>Sobre mí</SectionTitle>
            <p className='text-white opacity-80 mb-5 text-lg'>
              Tengo +3 años de experiencia creando aplicaciones dinámicas con
              Laravel, TailwindCSS, Livewire, JavaScript y más.
            </p>

            <p className='text-white opacity-80 mb-5 text-lg'>
              Me apasiona resolver problemas complejos y encontrar soluciones
              creativas para cada proyecto. Fuera del trabajo, disfruto de la
              música, los videojuegos, el ejercicio y los pequeños momentos de
              la vida cotidiana.
            </p>
          </div>
          <img src={Avatar} className='w-96' />
        </div>
      </div>
    </>
  );
};
