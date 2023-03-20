import React from 'react'
import {BannerInvestments, Clouds, MoneySign, Buildings, OkSign} from '../../commons/Icon/icons/'

// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useInView } from 'react-intersection-observer';

const Investments = () => { 

  const [ wasAnimatedOne, setWasAnimatedOne ] = React.useState(false)
  const [ wasAnimatedTwo, setWasAnimatedTwo ] = React.useState(false)

  const [ sectionOne , sectionOneInview ] = useInView({
    threshold: 0.9,
  })

  const [ sectionTwo, sectionTwoInView ] = useInView({
    threshold: 0.15,
  })

  React.useEffect (() => {
    if(!wasAnimatedOne && sectionOneInview) setWasAnimatedOne(true)
  }, [sectionOneInview])

  React.useEffect (() => {
    if(!wasAnimatedTwo && sectionTwoInView) setWasAnimatedTwo(true)
  }, [sectionTwoInView])

  return (
    <div className="macroneed">
      <div className="section" ref={sectionOne}>
        <BannerInvestments />
        <div className="pills">
          <span>Investments</span>
          <span>Credits</span>
        </div>
          <Clouds className={wasAnimatedOne ? "animate__animated animate__fadeInLeft" : "" } />
          <MoneySign className={wasAnimatedOne ? "animate__animated animate__fadeInUp" : ""} />
          <h1 className={wasAnimatedOne ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}>Neste mês sua conta rendeu R$ 50</h1>
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
        <Buildings  className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft" : ""}/>
        <OkSign className={wasAnimatedTwo ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}/>
        <h3 className={wasAnimatedTwo ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}>
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
