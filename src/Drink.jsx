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
      <Link to="/" />
    </div>
  )
}

export default Drink;