import './App.scss';
import Investments from './components/MacroNeeds/Investments';

const mock = {
  investments: {
    assets: {
      header: {
        iconBack: 'Clouds',
        iconFloat: 'MoneySign',
      },
      title: 'Sua conta rendeu mais que a poupança. Faça um depósito para o seu dinheiro continuar crescendo.'
    },
    welcome: {
      header: {
        iconBack: 'Buildings',
        iconFloat: 'OkSign',
      },
      title: 'Outro ponto interessante é que você descobriu novos caminhos, muito bom!',
      sections: [
        {
          title: "Investiu em CDB",
          message: "Foi uma ótima escolha para seu dinheiro render com segurança.",
          icon: "Cdb"
        },
        {
          title: "Criou Reservas",
          message: "Agora é ter foco para guardar dinheiro e alcançar suas metas.",
          icon: "Pots"
        },
        {
          title: "Explorou Criptomoedas",
          message: "Aproveite o mundo cripto com facilidade e proteção garantida.",
          icon: "Crypto"
        },
      ]
    }
  }
}

function App() {
  return (
    <div className="App">
      <Investments data={mock} />
    </div>
  );
}

export default App;
