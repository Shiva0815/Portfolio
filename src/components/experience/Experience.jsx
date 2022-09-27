import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {Frontdata,Backdata} from './experience-data'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {
              Frontdata.map(({id,language,level})=>{
                return (
                  <article id={id} className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h5>{language}</h5>
              <small className='text-light'>{level}</small>
              </div>
            </article>
                )
              })
            }
            
          </div>
        </div>
        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
          {
              Backdata.map(({id,language,level})=>{
                return (
                  <article id={id} className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h5>{language}</h5>
              <small className='text-light'>{level}</small>
              </div>
            </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience