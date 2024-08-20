type IconLinkProps = {
  icon: string;
  alt: string;
  href: string;
};

export const CustomIconLink = ({ icon,alt, href }: IconLinkProps) => {
  return (
    <li>
      <a href={href} target='_blank' className='w-10 h-10 bg-white bg-opacity-20 flex items-center justify-center rounded-full'>
        <img className='h-5' src={icon} alt={alt} />
      </a>
    </li>
  );
};
