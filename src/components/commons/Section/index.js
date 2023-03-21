import React from 'react'
import Animate from '../../Animate'
import Card from '../Card'
import Icon from '../Icon'

const Section = ({ section }) => {
  const { header, title, sections } = section || {}
  return (
    <div className="section">
      <div className="section__illustration">
        <Animate classIn="animate__fadeInLeft" children={<Icon icon={header.iconBack} />} />
        <Animate classIn="animate__fadeInUp" delay="0.4s" className="absolute" children={<Icon icon={header.iconFloat} />} />
      </div>
      <Animate classIn="animate__fadeIn" delay="0.8s" duration='2s' children={<h1>{title}</h1>} />
      {sections ? sections.map(({ icon, title, message }) => (
        <Animate key={title} classIn="animate__bounceInLeft" delay="0.8s" duration='1.6s' children={<Card icon={icon} title={title} text={message} />} />)) : null}
    </div>
  )
}

export default Section