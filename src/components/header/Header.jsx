import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shiva Yadav</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>

        <HeaderSocials/>
        <a href="#contact" className='scroll_down'>Scroll down</a>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
