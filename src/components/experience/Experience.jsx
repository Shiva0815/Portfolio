import React,{useEffect, useState} from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';
import axios from 'axios';

const Experience = () => {
  const [frontdata, setFrontdata] = useState([])
  const [backdata, setBackdata] = useState([])

  useEffect(() => {
    frontdataCheck(sessionStorage.getItem('access_token'))
    backdataCheck(sessionStorage.getItem('access_token'))
  }, [])

  const frontdataCheck = (token) => {
    let payload = JSON.stringify({
      "collection": "experience_frontend",
      "database": "portfolio",
      "dataSource": "Cluster0",
      "projection": {}
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-mkzhb/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: payload
    };
    axios.request(config)
      .then((response) => {
        setFrontdata(response?.data?.documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const backdataCheck = (token) => {
    let payload = JSON.stringify({
      "collection": "experience_backend",
      "database": "portfolio",
      "dataSource": "Cluster0",
      "projection": {}
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-mkzhb/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: payload
    };
    axios.request(config)
      .then((response) => {
        setBackdata(response?.data?.documents);
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