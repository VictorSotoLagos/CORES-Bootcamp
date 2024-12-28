import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h2>App de Música</h2>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Inicio{" "}
          </NavLink>
          |{" "}
          <NavLink
            to="/newuser"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Crear Usuario{" "}
          </NavLink>
          |{" "}
          <NavLink
            to="/mostrarUsuarios"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Mostrar Usuarios{" "}
          </NavLink>
          |{" "}
          <NavLink
            to="/songs"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Mostrar Canciones |{" "}
          </NavLink>
          <NavLink
            to="/songs/addSongForm"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Agregar Canción
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/songs/allplaylists"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Listado de Playlists
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/songs/addPlaylistForm"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-on" : "nav-link"
            }
          >
            Agregar Playlist
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Menu;
