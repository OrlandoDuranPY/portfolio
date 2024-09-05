import { Link, useLocation } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  textSmall?: boolean;
  toggleMenu?: () => void;
};

export const CustomLink = ({ to, children, textSmall = false, toggleMenu}: LinkProps) => {

  /* ========================================
     = Obtener la url activa =
  ========================================= */
  const location = useLocation();
  const isActive = location.pathname === to;


  /* ========================================
     = Cerrar el menu movil =
  ========================================= */
  const handleClick = () => {
    if(toggleMenu){
      toggleMenu();
    }
  };


  return (
    <li className={`font-semibold hover:scale-105 transition-all ${isActive ? ' text-fuccia' : 'text-white'} ${textSmall ? 'text-sm' : ''}`}>
      <Link to={to} onClick={handleClick}>{children}</Link>
    </li>
  );
};