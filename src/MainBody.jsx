import React from 'react'
import rightArrow from './assets/rightArrow.svg'

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
    </main>
  )
}

export default MainBody
