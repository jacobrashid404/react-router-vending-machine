import { useNavigate } from "react-router-dom";

/** Drink component
 *
 *
 */

function Drink() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Soda</p>
      <button onClick={ evt => navigate("/") }>Go Back</button>
    </div>
  )
}

export default Drink;