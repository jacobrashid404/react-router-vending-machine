import { useNavigate } from "react-router-dom";

/** Chips component
 *
 *
 */

function Chips() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Chips</p>
      <button onClick={ evt => navigate("/") }>Go Back</button>
    </div>
  );
}

export default Chips;