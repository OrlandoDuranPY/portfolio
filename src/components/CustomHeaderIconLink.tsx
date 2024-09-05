type IconLinkProps = {
  // icon: string;
  whiteIcon?: string;
  alt: string;
  href: string;
};

export const CustomHeaderIconLink = ({
  whiteIcon,
  alt,
  href,
}: IconLinkProps) => {
  return (
    <li className='group hover:scale-110 rounded-full group h-10 w-10 flex items-center justify-center transition-all'>
      <a
        className='w-full flex items-center justify-center'
        href={href}
        target='_blank'
      >
        <div className='flex items-center justify-center w-6 h-6'>
          <img
            className='transition-all duration-300'
            src={whiteIcon}
            alt={alt}
          />
        </div>
      </a>
    </li>
  );
};
