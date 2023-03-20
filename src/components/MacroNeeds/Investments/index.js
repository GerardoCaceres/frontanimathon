import React from 'react'
import {BannerInvestments, Clouds, MoneySign, Buildings, OkSign} from '../../commons/Icon/icons/'

// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useInView } from 'react-intersection-observer';

const Investments = () => { 

  
  const [ sectionOne , sectionOneInview ] = useInView({
    threshold: 0.9,
  })

  const [ sectionTwo, sectionTwoInView ] = useInView({
    threshold: 0.15,
  })



  return (
    <div className="macroneed">
      <div className="section" ref={sectionOne}>
        <BannerInvestments />
        <div className="pills">
          <span>Investments</span>
          <span>Credits</span>
        </div>
          <Clouds className={sectionOneInview ? "animate__animated animate__fadeInLeft" : "" } />
          <MoneySign className={sectionOneInview ? "animate__animated animate__fadeInUp" : ""} />
          <h1 className={sectionOneInview ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}>Neste mês sua conta rendeu R$ 50</h1>
        {/* <AnimationOnScroll animateIn="animate__fadeInLeft" offset="200" animateOnce animatePreScroll>
          <Clouds />
        </AnimationOnScroll> 
        <AnimationOnScroll animateIn="animate__fadeInUp" offset="200" animateOnce animatePreScroll>
          <MoneySign />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1>Neste mês sua conta rendeu R$ 50</h1>
        </AnimationOnScroll> */}
      </div>
      <div className="section" ref={sectionTwo} >
        <Buildings  className={sectionTwoInView ? "animate__animated animate__fadeInLeft" : ""}/>
        <OkSign className={sectionTwoInView ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}/>
        <h3 className={sectionTwoInView ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}>
          Outro ponto interessante é que você descobriu novos caminhos, muito bom!
        </h3>
        {/* <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
          <Buildings />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <OkSign />
        </AnimationOnScroll>
        <h3>
          Outro ponto interessante é que você descobriu novos caminhos, muito bom!
        </h3> */}
      </div>
    </div>
  );
}


export default Investments;
