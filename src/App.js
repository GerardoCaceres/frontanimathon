import Pots from './components/Pots'
import Pot from './components/Pot'
import './App.css';

function App() {
  return (
    <div className="App">
      <Pot/>
      <div className='free'> Espacio publicitario </div>
      <Pots/>
      <div className='free'> Espacio publicitario </div>
    </div>
  );
}

export default App;
