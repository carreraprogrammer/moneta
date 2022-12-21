import carousel from '../resources/Images/carouselOne.png'
import $ from 'jquery'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Carousel = () => {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  
  const stopCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(0)'
        })
      $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(0)'
        })
      $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(0)'
        })
    }

    const startCarousel = () => {
        $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(0%)',
          transition: 'all 3s ease-in-out'
        })
        $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(0%)',
          transition: 'all 3s ease-in-out'
        })
        $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(0%)',
          transition: 'all 3s ease-in-out'
        })
      }
  
  return (
  <div id='carouselOne' onMouseLeave={stopCarousel} onMouseOver={startCarousel} data-aos='fade-right' data-aos-anchor-placement="center-bottom">
    <img className='carouselOneImg' src={carousel} alt='carousel'/>
    <div id='carouselBtnContainer'>
      <button id='carouselBtn' style={{marginRight: '10px', marginBottom: '10px',}}>Menú</button>
    </div>
    <img className='carouselOneImg' src={carousel} alt='carousel'/>
  </div>
  )
}

export default Carousel