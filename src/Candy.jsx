import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/** Candy component
 *
 *
 */

function Candy() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Candy</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Candy;