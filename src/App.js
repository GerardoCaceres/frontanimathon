import './App.css';
import {useEffect, useState, useRef} from "react";
import {CriptoRow} from "./components/CriptoRow";

function App() {
    const [numero, setNumero] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Criptos</h1>
          <CriptoRow amount={1500} clxs={'down'}/>
          <CriptoRow amount={1200} clxs={'left'}/>
          <CriptoRow amount={1700} clxs={''}/>
      </header>
    </div>
  );
}

export default App;
