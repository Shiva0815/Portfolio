import React, { useEffect ,useState} from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'
import axios from 'axios'

const Service = () => {

  const [service, setService] = useState([])

  useEffect(() => {
    serviceCheck()
  }, [])


  const serviceCheck = () => {
    let config = {
      method: 'GET',
      url: 'https://shivangportfoliobackend.vercel.app/service',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    };
    axios.request(config)
      .then((response) => {
        setService(response?.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(service)
  
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
              service?.service1?.map((data,index) => {
                return (
                  <li key={index}>
                    <BiCheck className='service_list-icon' />
                    <p>{data.service} </p>
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
              service?.service2?.map(({ service }, index) => {
                return (
                  <li key={index}>
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
              service?.service3?.map(({ service }, index) => {
                return (
                  <li key={index}>
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