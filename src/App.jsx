import { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import VendingMachine from './VendingMachine.jsx';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  return (
    <div className="App">
      <VendingMachine />
    </div>
  );
};

export default App;
