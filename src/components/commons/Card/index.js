import React from 'react'
import Icon from '../Icon'

const Card = ({ icon, title, text, className }) => {

  return (
    <div className={`card ${className ? className : ''}`}>
      <div className="card__icon">
        <Icon icon={icon} />
      </div>
      <div className="card__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card