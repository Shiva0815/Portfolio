import React from 'react'
import './testimonials.css'


// import Swiper core and required modules
import { Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {data} from './testimonial-data'


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} id={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </div>
        </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials