import { Container } from '../components/Layouts/Container';
import { SectionTitle } from '../components/Layouts/SectionTitle';
import ProjectImage from '../assets/images/project-example.jpg';
import ProjectCard from '../components/ProjectCard';
export const Works = () => {
  return (
    <Container>
      <SectionTitle>Mis proyectos</SectionTitle>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <ProjectCard
          imageSrc={ProjectImage}
          altText='Imagen proyecto'
          projectName='Nombre del proyecto'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in metus sollicitudin, rhoncus magna eu, semper ipsum. Etiam eu hendrerit velit. Mauris ut nulla vitae dolor feugiat auctor. Vestibulum sed.'
          technologies={['TailwindCSS', 'Laravel', 'Livewire']}
        />
        <ProjectCard
          imageSrc={ProjectImage}
          altText='Imagen proyecto'
          projectName='Nombre del proyecto'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in metus sollicitudin, rhoncus magna eu, semper ipsum. Etiam eu hendrerit velit. Mauris ut nulla vitae dolor feugiat auctor. Vestibulum sed.'
          technologies={['TailwindCSS', 'Laravel', 'Livewire']}
        />
        <ProjectCard
          imageSrc={ProjectImage}
          altText='Imagen proyecto'
          projectName='Nombre del proyecto'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in metus sollicitudin, rhoncus magna eu, semper ipsum. Etiam eu hendrerit velit. Mauris ut nulla vitae dolor feugiat auctor. Vestibulum sed.'
          technologies={['TailwindCSS', 'Laravel', 'Livewire']}
        />
      </div>
    </Container>
  );
};
