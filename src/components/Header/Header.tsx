import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.scss";

const Header: FC = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/" ? (
        <>
          <img src="logo.png" />
          <NavLink to="/employee-list">View Current Employees</NavLink>
        </>
      ) : location.pathname === "/employee-list" ? (
        <>
          <h1>Current Employees</h1>
          <NavLink to="/">Home</NavLink>
        </>
      ) : null}
    </header>
  );
}

export default Header;
