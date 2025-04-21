import React from 'react'
import rightArrow from '../../assets/rightArrow.svg'
import Projects from '../../components/Projects'
import './MainBody.css'

const MainBody = () => {
  return (
    <main>
      <h3 className="name-heading">My name is Prajjwal</h3>
      <ol>
        <li>I like vite, Webpack not so much.</li>
        <li>Let's make the web interactive and awesome.</li>
        <li>Building cool user interfaceswith React.</li>
      </ol>
      <a href="#" className="hire-me-button">
        <span>Hire Me</span>
        <img src={rightArrow} alt="Right Arrow" />
      </a>

      <section className='project-section'>
        <h2>These are my Projects</h2>
        <p>I build high-quality Projects of all shapes and sizes.</p>
        <div className="project-container">
          <Projects title="Uber Clone Application" description="In this Uber Clone Project, I create a backend of a Ride Sharing Application." logoImg="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" projectUrl="https://github.com/prajjwalag/Uber"/>
          <Projects title="AirBNB Hotel Booking Clone" description="" logoImg="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1920px-Airbnb_Logo_B%C3%A9lo.svg.png" projectUrl="https://github.com/prajjwalag/Uber"/>
          <Projects title="LinkedIn Microservices Project" description="" logoImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1920px-LinkedIn_2021.svg.png" projectUrl="https://github.com/prajjwalag/Uber"/>
        </div>
        
      </section>

      
    </main>
  )
}

export default MainBody
