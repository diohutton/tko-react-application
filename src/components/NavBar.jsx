import { NavLink } from "react-router-dom";
import nvcls from "./NavBar.module.css";
import logoImg from "../images/TAKE-ONE.png";

/**
 * Navlinks in header correspond to react routing paths
 */
function NavBar() {
  return (
    <header className={nvcls.header}>
      <nav>
        <ul className={nvcls.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? nvcls.active : undefined
              }
              end
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="advertisers"
              className={({ isActive }) =>
                isActive ? nvcls.active : undefined
              }
            >
              Advertisers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? nvcls.active : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className={nvcls.titleline}>
        <img src={logoImg} className={nvcls.img} alt="TKO" />
        <h2 className={nvcls.title}>Marketing Consultant & Direct Mail</h2>
      </section>
    </header>
  );
}

export default NavBar;
