
import AvionBorder from '../icons/avion-border';
import './style.css';
import { useInView } from 'react-intersection-observer';


function Pot() {
  const [ref, inView] = useInView({});
  return (
    <div  div ref={ref} className={inView ? 'pot pot-animated' : 'pot'}>
      <AvionBorder/>
      <p>Você não reservou dinheiro para "Tulum” neste mês</p>
      <button className='pots-button'>Ir para Reservas</button>
    </div>
  );
}

export default Pot;
