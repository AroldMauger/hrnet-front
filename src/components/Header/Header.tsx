import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.scss";

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/hrnet-front/" ? (
        <>
        <h1>HRNET</h1>
          <img src="logo.webp" alt="logo de l'entreprise HRNET"/>
          <NavLink to="/hrnet-front/employee-list">View Current Employees</NavLink>
        </>
      ) : location.pathname === "/hrnet-front/employee-list" ? (
        <>
        <img src="logo.webp" alt="logo de l'entreprise HRNET"/>
        <NavLink to="/hrnet-front/">Home</NavLink>
        </>
      ) : null}
    </header>
  );
}

export default Header;
