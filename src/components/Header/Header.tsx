import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.scss";

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/" ? (
        <>
        <h1>HRNET</h1>
          <img src="logo.webp" alt="logo de l'entreprise HRNET"/>
          <NavLink to="/employee-list">View Current Employees</NavLink>
        </>
      ) : location.pathname === "/employee-list" ? (
        <>
        <img src="logo.webp" alt="logo de l'entreprise HRNET"/>
        <NavLink to="/">Home</NavLink>
        </>
      ) : null}
    </header>
  );
}

export default Header;
