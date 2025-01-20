import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from '../../images/logo.svg'

const Header = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "";
  };
  return (
    <header className={css.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
