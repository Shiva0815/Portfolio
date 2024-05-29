import React,{useEffect, useState} from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';
import axios from 'axios';

const Experience = () => {
  const [frontdata, setFrontdata] = useState([])
  const [backdata, setBackdata] = useState([])

  useEffect(() => {
    frontdataCheck()
    backdataCheck()
  }, [])

  const frontdataCheck = () => {
    let config = {
      method: 'GET',
      url: 'https://shivangportfoliobackend.vercel.app/experience_frontend',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    };
    axios.request(config)
      .then((response) => {
        setFrontdata(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const backdataCheck = (token) => {
    let config = {
      method: 'GET',
      url: 'https://shivangportfoliobackend.vercel.app/experience_backend',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    };
    axios.request(config)
      .then((response) => {
        setBackdata(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {
              frontdata?.map((data, index) => {
                return (
                  <article key={index} id={data.id} className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                      <h5>{data.language}</h5>
                      <small className='text-light'>{data.level}</small>
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
              backdata.map((data, index) => {
                return (
                  <article key={index} id={data.id} className='experience_details'>
                    <BsPatchCheckFill className='experience_details-icon' />
                    <div>
                      <h5>{data.language}</h5>
                      <small className='text-light'>{data.level}</small>
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