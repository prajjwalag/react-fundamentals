import React from 'react'
import './SkillsCard.css'

const SkillsCard = ({id, name, icon}) => {
  return (
    <div className='skills-card'>
      <img src={icon} alt={name} />
    </div>
  )
}

export default SkillsCard
