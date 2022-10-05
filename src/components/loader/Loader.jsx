import React from 'react'
import './loader.css'
import ME from '../../assets/me1.png'
import { Outlet, Link } from "react-router-dom";

const Loader = () => {
  return (
    <header id='home' className='loader'>
      <div className="container loader_container">
        <h5>Hello I'm</h5>
        <h1>Shivang Yadav</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
        <Link to="/App" className='arrow'></Link>
      </div>
      <Outlet/>
    </header>
  )
}

export default Loader
