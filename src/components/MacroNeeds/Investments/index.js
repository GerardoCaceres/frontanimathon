import React, { useState} from 'react'

import { useInView } from 'react-intersection-observer';
import Card from '../../commons/Card';
import Icon from '../../commons/Icon';

const Investments = () => {

  const [ wasAnimatedOne, setWasAnimatedOne ] = useState(false)
  const [ wasAnimatedTwo, setWasAnimatedTwo ] = useState(false)

  const [ sectionOne, sectionOneInview ] = useInView({
    threshold: 0.9,
  })

  const [ sectionTwo, sectionTwoInView ] = useInView({
    threshold: 0.15,
  })

  React.useEffect (() => {
    if(!wasAnimatedOne && sectionOneInview) setWasAnimatedOne(true)
  }, [sectionOneInview, wasAnimatedOne])

  React.useEffect (() => {
    if(!wasAnimatedTwo && sectionTwoInView) setWasAnimatedTwo(true)
  }, [sectionTwoInView, wasAnimatedTwo])

  return (
    <div className="macroneed">
      <div className="section one" ref={sectionOne}>
        <Icon icon="BannerInvestments" />
        <div className="pills">
          <span>Investments</span>
          <span>Credits</span>
        </div>
        <div className="section__illustration">
          <Icon icon="Clouds" className={wasAnimatedOne ? "animate__animated animate__fadeInLeft" : ""} />
          <Icon icon="MoneySign" className={wasAnimatedOne ? "animate__animated animate__fadeInUp circle" : "circle"} />
        </div>
        <h1 className={wasAnimatedOne ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}>Sua conta rendeu mais que a poupança. Faça um depósito para o seu dinheiro continuar crescendo.</h1>
      </div>
      <div className="section two" ref={sectionTwo} style={{opacity: wasAnimatedTwo ? 1 : 0}} >
        <div className="section__illustration">
          <Icon icon="Buildings" className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft" : ""} />
          <Icon icon="OkSign" className={wasAnimatedTwo ? "circle animate__animated animate__fadeInUp animate__delay-1s" : "circle"} />
        </div>
        <h1 className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}>
          Outro ponto interessante é que você descobriu novos caminhos, muito bom!
        </h1>
        <Card icon="Cdb" title="Investiu em CDB" text="Foi uma ótima escolha para seu dinheiro render com segurança." className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft delay-it01" : ""} />
        <Card icon="Pots" title="Criou Reservas" text="Agora é ter foco para guardar dinheiro e alcançar suas metas." className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft delay-it02" : ""} />
        <Card icon="Crypto" title="Explorou Criptomoedas" text="Aproveite o mundo cripto com facilidade e proteção garantida." className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft delay-it03" : ""} />
      </div>
    </div>
  );
}


export default Investments;
