type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export const ExperienceItem = ({
  title,
  company,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <article className='flex flex-col lg:flex-row lg:justify-between'>
      <header className='space-y-1 mb-5 lg:mb-0'>
        <h2 className='text-xl text-fuccia2 font-semibold'>{title}</h2>
        {/* Empresa */}
        <p className='text-white text-sm text-opacity-80'>{company}</p>
        {/* Fecha */}
        <p className='text-white text-sm text-opacity-50'>{date}</p>
      </header>
      <p className='text-white lg:w-2/5 text-opacity-80'>{description}</p>
    </article>
  );
};
