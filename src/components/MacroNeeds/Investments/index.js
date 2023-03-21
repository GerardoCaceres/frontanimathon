import React from 'react'

import Card from '../../commons/Card';
import Icon from '../../commons/Icon';
import Animate from '../../Animate';

const Investments = () => {

  return (
    <div className="macroneed">
      <div className="section one">
        <Icon icon="BannerInvestments" />
        <div className="pills">
          <span>Investments</span>
          <span>Credits</span>
        </div>
        <div className="section__illustration">
          <Animate classIn="animate__fadeInLeft" children={<Icon icon="Clouds" />} />
          <Animate classIn="animate__fadeInUp" delay="0.4s" className="absolute" children={<Icon icon="MoneySign" />} />
        </div>
        <Animate classIn="animate__fadeIn" delay="0.8s" duration='2s' children={<h1>Sua conta rendeu mais que a poupança. Faça um depósito para o seu dinheiro continuar crescendo.</h1>} />
      </div>
      <div className="section two" >
        <div className="section__illustration">
          <Animate classIn="animate__fadeInLeft" children={<Icon icon="Buildings" />} />
          <Animate classIn="animate__fadeInUp" delay="0.4s" className="absolute" children={<Icon icon="OkSign" />} />
        </div>
        <Animate classIn="animate__fadeIn" delay="0.8s" duration='2s' children={<h1>Outro ponto interessante é que você descobriu novos caminhos, muito bom!</h1>} />
        <Animate classIn="animate__bounceInLeft" delay="0.8s" duration='1.6s' children={<Card icon="Cdb" title="Investiu em CDB" text="Foi uma ótima escolha para seu dinheiro render com segurança." />} />
        <Animate classIn="animate__bounceInLeft" delay="0.8s" duration='1.6s' children={<Card icon="Pots" title="Criou Reservas" text="Agora é ter foco para guardar dinheiro e alcançar suas metas." />} />
        <Animate classIn="animate__bounceInLeft" delay="0.8s" duration='1.6s' children={<Card icon="Crypto" title="Explorou Criptomoedas" text="Aproveite o mundo cripto com facilidade e proteção garantida." />} />
      </div>
    </div>
  );
}

export default Investments;
