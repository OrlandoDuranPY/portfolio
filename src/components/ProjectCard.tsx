interface ProjectCardProps {
    imageSrc: string;
    altText: string;
    projectName: string;
    description: string;
    technologies: string[];
  }
  
  const ProjectCard = ({
    imageSrc,
    altText,
    projectName,
    description,
    technologies,
  }: ProjectCardProps) => {
    return (
      <div className='border border-white border-opacity-20 rounded-2xl overflow-hidden flex flex-col group'>
        {/* Imagen */}
        <div className='h-52 overflow-hidden'>
          <img
            src={imageSrc}
            alt={altText}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        {/* Descripcion y tecnologias */}
        <div className='space-y-5 p-5'>
          <h3 className='text-fuccia2 font-semibold text-xl mb-0'>
            {projectName}
          </h3>
          <p className='text-white text-opacity-80'>{description}</p>
          {/* Tecnologias */}
          <div className='flex flex-wrap gap-3 w-full'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='bg-fuccia2 bg-opacity-20 px-3 py-1 rounded-full'
              >
                <span className='text-white text-xs text-opacity-80'>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;