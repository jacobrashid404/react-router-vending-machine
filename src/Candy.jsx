import { useNavigate } from "react-router-dom";

/** Candy component
 *
 *
 */

function Candy() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Candy</p>
      <button onClick={ evt => navigate("/") }>Go Back</button>
    </div>
  )
}

export default Candy;