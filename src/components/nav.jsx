import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="absolute top-10 left-10 p-10 text-left">
      <p className="text-white text-9xl mb-1">Faiz Ramadlan</p>
      <p className="text-white text-3xl">Full Stack Web Developer</p>
      <nav className="mt-32">
        <ul className="flex flex-col space-y-4">
          <li>
            <NavLink
              to="/"
              className="text-white text-5xl hover:text-gray-300"
              activeClassName="active"
              end
              isActive={(match) => {
                if (match) {
                  return true;
                }
                return false;
              }}
            >
              {location.pathname === "/" ? "☺" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-white text-5xl hover:text-gray-300"
              activeClassName="active"
              isActive={(match) => {
                if (match) {
                  if (match.isExact) {
                    return true;
                  }
                  return false;
                }
                return false;
              }}
            >
              {location.pathname === "/projects" ? "☺" : "Projects"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="text-white text-5xl hover:text-gray-300"
              activeClassName="active"
              isActive={(match) => {
                if (match) {
                  if (match.isExact) {
                    return true;
                  }
                  return false;
                }
                return false;
              }}
            >
              {location.pathname === "/contacts" ? "☺" : "Contacts"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
