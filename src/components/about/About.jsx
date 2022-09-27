import React from 'react'
import './about.css'
import Me from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About=()=> {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt=''/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icons'/>
              <h5>Experience</h5>
              <small>0+ Years Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icons'/>
              <h5>Project</h5>
              <small>0</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad quisquam sequi tempora, delectus, ducimus ipsa possimus assumenda laudantium, odit consequatur molestiae adipisci. Eum error quis inventore voluptates exercitationem. Aperiam?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

        
      </div>

      
      
    </section>
  )
}

export default About