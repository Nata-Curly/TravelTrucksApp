import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "";
  };
  return (
    <header className={css.header}>
      <a href="/">
        <svg width='136' height='16'>
          <use href="./images/sprite.svg#logo" />
        </svg>
      </a>
      <nav>
        <ul className={css.headerList}>
          <li>
            <NavLink className={getActiveClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
