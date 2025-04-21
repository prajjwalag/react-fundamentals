import React from 'react'
import viteImg from '/vite.svg'

const Header = () => {
  return (
    <header>
      <img src={viteImg} style={{width: '4rem', height: '4rem'}} alt="Vite logo" />
      <h1 className="heading">Hi, I am a React <span>Developer</span></h1>
    </header>
  )
}

export default Header
