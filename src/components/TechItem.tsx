interface TechItemProps {
  src: string;
  alt: string;
  label: string;
}

export const TechItem = ({ src, alt, label }: TechItemProps) => {
  return (
    <div className='carousel-item flex flex-col items-center'>
      <img src={src} alt={alt} className='tech-icon h-16' />
      <p className='text-white text-opacity-60 mt-2 text-center'>{label}</p>
    </div>
  );
};
