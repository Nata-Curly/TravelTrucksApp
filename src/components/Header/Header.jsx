import { NavLink } from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "";
  };
  return (
    <div>
      <header className={css.header}>
        <a href=".">Logo</a>
        <nav>
          <ul className={css.headerList}>
            <li>
              <NavLink className={getActiveClass} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass} to='/catalog'>Catalog</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
