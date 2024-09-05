import { useLocation } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  textSmall?: boolean;
  toggleMenu?: () => void;
};

export const CustomLink = ({ to, children, textSmall = false, toggleMenu }: LinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    if (toggleMenu) {
      toggleMenu();
    }
  };

  return (
    <li className={`text-white font-semibold hover:scale-105 transition-all ${isActive ? 'text-customFuccia2' : ''} ${textSmall ? 'text-sm' : ''}`}>
      <a href={to} onClick={handleClick}>{children}</a>
    </li>
  );
};