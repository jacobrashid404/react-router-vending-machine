import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Chips from "./Chips.jsx";
import Drink from "./Drink.jsx";
import Candy from "./Candy.jsx";

/** Vending machine
 *
 *
 */

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/chips" element={<Chips/>} />
          <Route path="/drink" element={<Drink/>} />
          <Route path="/candy" element={<Candy/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;