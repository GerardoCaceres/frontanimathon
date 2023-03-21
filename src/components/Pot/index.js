
import AvionBorder from '../icons/avion-border';
import './style.css';

function Pot() {
  return (
    <div className="pot">
      <AvionBorder/>
      <p>Você não reservou dinheiro para "Tulum” neste mês</p>
      <button className='pots-button'>Ir para Reservas</button>
    </div>
  );
}

export default Pot;
