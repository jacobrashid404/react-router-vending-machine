import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/** Drink component
 *
 *
 */

function Drink() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Soda</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Drink;