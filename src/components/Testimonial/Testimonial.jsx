import React from 'react'
import { Data } from './Data'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className='testimonial container section'>
       <h2 className='section__title'>My client say</h2>
       <span className='section__subtitle'>Testimonial</span>
       <Swiper className="testimonial__container swiper"
       loop={true}
       speed={1200}
       autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
       }}
       slidesPerGroup={1}
       grabCursor={true}
       slidesPerView={1}
      spaceBetween={24}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         576: {
           slidesPerView: 1,
         },
         768: {
           slidesPerView: 2,
         },
         
       }}>
        {
          Data.map(({id, image, title, description}) => {
            return(
              <SwiperSlide className='testimonial__card' key={id}>
                <img src={image} alt="testimonial" className='testimonial__img' />
                <h3 className='testimonial__name'>{title}</h3>
                <p className="testimonial__description">{description}</p>
              </SwiperSlide>
            )
          })
        }
       </Swiper>
    </section>
  )
}

export default Testimonial