import React, { useEffect ,useState} from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'
import axios from 'axios'

const Service = () => {

  const [service, setService] = useState([])

  useEffect(() => {
    serviceCheck(sessionStorage.getItem('access_token'))
  }, [])


  const serviceCheck = (token) => {
    let payload = JSON.stringify({
      "collection": "service",
      "database": "portfolio",
      "dataSource": "Cluster0",
      "projection": {}
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-mkzhb/endpoint/data/v1/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: payload
    };
    axios.request(config)
      .then((response) => {
        setService(response?.data?.document);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
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