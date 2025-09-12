import { useMatch, Link, NavLink } from 'react-router-dom';
import './App.css';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <NavLink to={to} {...props} style={{ color: match ? 'red' : '' }}>
      {children}
    </NavLink>
  );
};

export default CustomLink;
