import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const Nav = () => {
  return (
    
      <Scrollspy className='navi' items={ ['home', 'about', 'experience','services', 'contact'] } currentClassName="active">
      <a href='#home' ><AiOutlineHome/></a>
      <a href='#about' ><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#services' ><RiServiceLine/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
      </Scrollspy>
    
  )
}

export default Nav