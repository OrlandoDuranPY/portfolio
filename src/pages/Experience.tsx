import { Container } from '../components/Layouts/Container';
import { ExperienceItem } from '../components/Layouts/ExperienceItem';
import { SectionTitle } from '../components/Layouts/SectionTitle';

export const Experience = () => {
  return (
    <Container>
      <SectionTitle>Experiencia</SectionTitle>
      <div className='space-y-10'>
        <ExperienceItem
          title='Desarrollador Web'
          company='Made In Web, Querétaro, Qro.'
          date='Mar. 2024 - A la fecha'
          description='En mi rol actual como Desarrollador Web, he creado aplicaciones monolíticas y APIs robustas con Laravel, integrando interactividad dinámica en el frontend mediante Vue 3. Además, he consumido APIs de manera eficiente utilizando Fetch, Axios y AJAX. Mi experiencia incluye el manejo de bases de datos como MySQL y PostgreSQL, y el uso de Bootstrap y CSS para desarrollar interfaces de usuario responsivas y funcionales.'
        />
        <div className='border-t border-white border-opacity-20'></div>
        <ExperienceItem
          title='Becario en Coordinación de Inovación y Tecnología'
          company='Universidad Autónoma de Querétaro'
          date='Jun. 2020 - Jun. 2024'
          description='El proyecto más relevante durante mi periodo como becario fue el desarrollo de una plataforma de empleo, similar a LinkedIn, que permite a las empresas publicar vacantes y a estudiantes, egresados y docentes cargar sus currículums. Para este proyecto, utilicé tecnologías como Laravel, Livewire, TailwindCSS, JavaScript y MySQL, cubriendo tanto el frontend como el backend, y creando un catálogo integral de talentos accesible para las empresas.'
        />

        <div className='border-t border-white border-opacity-20'></div>
      </div>
    </Container>
  );
};
