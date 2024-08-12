import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export const CustomLink = ({ to, children }: LinkProps) => {

  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={` text-lg rounded-full overflow-hidden text-white ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
};