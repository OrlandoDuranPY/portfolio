import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  textSmall?: boolean;
};

export const CustomLink = ({ to, children, textSmall = false }: LinkProps) => {

  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`text-white font-semibold ${isActive ? 'opacity-100' : 'opacity-50'} ${textSmall ? 'text-sm' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
};