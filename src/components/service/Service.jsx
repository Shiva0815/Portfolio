import React from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'
import { service1, service2, service3 } from './service-data'

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className='service'>
          <div className='service_head'>
            <h3>Lorem</h3>
          </div>
          <ul className='service_list'>
            {
              service1.map(({ service }, index) => {
                return (
                  <li>
                    <BiCheck className='service_list-icon' />
                    <p>{service} </p>
                  </li>
                )
              })
            }
          </ul>
        </article>


        <article className='service'>
          <div className='service_head'>
            <h3>Lorem</h3>
          </div>
          <ul className='service_list'>
            {
              service3.map(({ service }, index) => {
                return (
                  <li>
                    <BiCheck className='service_list-icon' />
                    <p>{service} </p>
                  </li>
                )
              })
            }
          </ul>
        </article>


        <article className='service'>
          <div className='service_head'>
            <h3>Lorem</h3>
          </div>
          <ul className='service_list'>
            {
              service2.map(({ service }, index) => {
                return (
                  <li>
                    <BiCheck className='service_list-icon' />
                    <p>{service}</p>
                  </li>
                )
              })
            }
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service