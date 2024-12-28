import { NavLink } from "react-router-dom";
import "./menulogin.css";

const MenuLogin = () => {
  return (
    <div className="menulogin">
      <nav>
        <ul>
          <li>
            <h2>App Tareas</h2>
          </li>
          <li>
            <NavLink
              to="/login"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-on" : "nav-link"
              }
            >
              <h3>Login</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newuser"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-on" : "nav-link"
              }
            >
              <h3>Registro</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuLogin;
