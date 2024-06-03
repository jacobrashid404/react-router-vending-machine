import { NavLink } from "react-router-dom";


function NavBar() {

  const activeStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"
                   style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                  }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/chips"
                   style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                  }
          >
            Chips
          </NavLink>
        </li>
        <li>
          <NavLink to="/drink"
                   style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                  }
          >
            Drink
          </NavLink>
        </li>
        <li>
          <NavLink to="/candy"
                   style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                  }
          >
            Candy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;