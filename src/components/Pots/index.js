import alcancia from '../../images/pots/alcancia.svg'
import corazon from '../../images/pots/corazon.svg';
import avion from '../../images/pots/avion.svg';
import casa from '../../images/pots/casa.svg';
import agenda from '../../images/pots/agenda.svg';
import './style.css';

function Pots() {
  return (
    <div className="pots">
      <div className="header">
        <img src={alcancia} className="pots-icon" alt="alcancia" />
        <p>Você guardou R$ 1.250 entre estas<br /> Reservas neste mês</p>
      </div>

      <div className="list">
        <ul>
          <li>
            <div className="left-column">
              <img src={corazon} className="pots-icon" alt="alcancia" />
              <p>Lua de mel</p>
            </div>
            <span> + R$ 1.0000</span>
          </li>
          <li>
            <div className="left-column">
              <img src={avion} className="pots-icon" alt="alcancia" />
              <p>tulum</p>
            </div>
            <span> + R$ 200</span>
          </li>
          <li>
            <div className="left-column">
              <img src={casa} className="pots-icon" alt="alcancia" />
              <p>Reforma da casa e praia</p>
            </div>
            <span> + R$ 50</span>
          </li>
        </ul>
        </div>



      <div className="footer">
        <div className='image'><img src={agenda} className="pots-icon" alt="alcancia" /></div>
        <p>Sabia que é possível programar reservas? <br /> É prático e perfeito para ajudar a focar!</p>
        <button>Ir para Reservas</button>
      </div>
    </div>
  );
}

export default Pots;
