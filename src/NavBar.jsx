import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import Drink from "./Drink.jsx";
import Chips from "./Chips.jsx";
import Candy from "./Candy.jsx";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/drink">Drink</Link></li>
        <li><Link to="/candy">Candy</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;