import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/** Chips component
 *
 *
 */

function Chips() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Chips</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Chips;