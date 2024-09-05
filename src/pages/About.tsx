import { SectionTitle } from '../components/Layouts/SectionTitle';

export const About = () => {
  return (
    <section className='container mx-auto px-8 lg:px-0'>
      <SectionTitle>Sobre mi</SectionTitle>
      <p className='text-white opacity-80 mb-5'>
        Soy un chico de 25 años apasionado por la tecnología, me gusta buscar
        formas de aprender y crecer en lo que hago. Me encanta la sensación de
        resolver problemas complejos y la satisfacción de crear algo desde cero.
      </p>
      <p className='text-white opacity-80'>
        Fuera del trabajo, soy una persona que le encanta la música, los
        videojuegos, el ejercicio y disfrutar los pequeños detalles de la vida
        cotidiana.
      </p>
    </section>
  );
};
