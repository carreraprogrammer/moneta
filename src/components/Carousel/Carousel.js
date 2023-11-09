import carousel from '../assets/Images/carouselOne.png'
import $ from 'jquery'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import sandwich from '../assets/Images/carouselSandwich.png'
import { NavLink } from 'react-router-dom';
import './Carousel.scss'

const Carousel = () => {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  
  const stopCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(0%)',
          transition: 'all 20s ease-in-out'
        })
      $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(-3%)',
          transition: 'all 40s ease-in-out'
        })
      $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(-9%)',
          transition: 'all 40s ease-in-out'
        })
      $('#carouselOne > :nth-child(4)').css({
          transform: 'translateX(-9%)',
          transition: 'all 40s ease-in-out'
      })
    }

    const startCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
        transform: 'translateX(3%)',
        transition: 'all 5s ease-in-out'
      })
      $('#carouselOne > :nth-child(4)').css({
        transform: 'translateX(3%)',
        transition: 'all 5s ease-in-out'
      })
      $('#carouselOne > :nth-child(2)').css({
        transform: 'translateX(12%)',
        transition: 'all 5s ease-in-out'
      })
      $('#carouselOne > :nth-child(3)').css({
        transform: 'translateX(12%)',
        transition: 'all 5s ease-in-out'
      })
    }
  
  return (
  <div id='carouselOne' onMouseLeave={startCarousel} onMouseOver={stopCarousel} data-aos='fade-ind'>
    <img className='carouselOneImg'  id='carouselImgOne' src={carousel} alt='carousel'  data-aos='carouselRight' data-aos-anchor-placement="center-center" data-aos-duration='1000' />
    <div id='carouselSandwichContainer'  data-aos='carouselBtnRight' data-aos-anchor-placement="center-center" data-aos-duration='1000'>
      <img id='carouselSandwich' alt='sandwich' src={sandwich} />
    </div>
    <div id='carouselBtnContainer' data-aos='carouselBtnRight' data-aos-anchor-placement="center-center" data-aos-duration='2000'>
      <NavLink to='/Coffee'  id='carouselBtn' >Menú</NavLink>
    </div>
    <img className='carouselOneImg' src={carousel} alt='carousel'  data-aos='carouselRight' data-aos-anchor-placement="center-center" data-aos-duration='1000' />
  </div>
  )
}

export default Carousel