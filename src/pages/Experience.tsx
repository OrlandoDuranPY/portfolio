import { ExperienceItem } from '../components/Layouts/ExperienceItem';
import { SectionTitle } from '../components/Layouts/SectionTitle';

export const Experience = () => {
  return (
    <section className='container mx-auto px-8 lg:px-0'>
      <SectionTitle>Experiencia</SectionTitle>
      <div className='space-y-10'>
        <ExperienceItem
          title='Desarrollador Web'
          company='MIW'
          date='Mar. 2024 - A la fecha'
          description='He desarrollado aplicaciones web utilizando Laravel para la creación de APIs y Vue 3 para el desarrollo frontend, con una sólida experiencia en el consumo de APIs mediante AXIOS y FETCH. He trabajado en la construcción de aplicaciones monolíticas integrando Laravel y Vue 3, y gestionado bases de datos MySQL y PostgreSQL, optimizando tanto la persistencia como la consulta de datos.'
        />
        <div className='border-t border-white border-opacity-20'></div>
        <ExperienceItem
          title='Becario en Coordinación de Inovación y Tecnología'
          company='Universidad Autónoma de Querétaro'
          date='Jun. 2020 - Jun. 2024'
          description='Diseño de System Design y desarrollo de plataformas web, abarcando tanto el frontend como el backend. Utilicé tecnologías como Laravel, Livewire, TailwindCSS, JavaScript y MySQL para crear una plataforma tipo Linkedin. Esta plataforma permite a estudiantes, egresados y docentes cargar sus currículums, generando un catálogo integral de talentos para su promoción en empresas.'
        />
        
        <div className='border-t border-white border-opacity-20'></div>
      </div>
    </section>
  );
};
