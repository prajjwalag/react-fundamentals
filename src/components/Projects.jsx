import React from 'react'
import Github from '../assets/github.svg'
import './ProjectCard.css'

const Projects = (props) => {
  return (
    <>
        
        <div className='project-card'>
            <div className='img-wrapper'>
                <img  src={props.logoImg} alt="/Uber Logo" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className='img-button' href={props.projectUrl}>
                <img src={Github} alt="Github Icon" />
                <span>View on Github</span>
            </a>

        </div>
    </>


  )
}

export default Projects
