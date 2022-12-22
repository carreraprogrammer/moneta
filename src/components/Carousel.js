import carousel from '../resources/Images/carouselOne.png'
import $ from 'jquery'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import sandwich from '../resources/Images/carouselSandwich.jpg'

const Carousel = () => {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  
  const stopCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(-3%)',
          transition: 'all 20s ease-in-out'
        })
      $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(-3%)',
          transition: 'all 20s ease-in-out'
        })
      $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(-9%)',
          transition: 'all 20s ease-in-out'
        })
      $('#carouselOne > :nth-child(4)').css({
          transform: 'translateX(-9%)',
          transition: 'all 20s ease-in-out'
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
  <div id='carouselOne' onMouseLeave={startCarousel} onMouseOver={stopCarousel}>
    <img className='carouselOneImg'  id='carouselImgOne' src={carousel} alt='carousel'  data-aos='carouselRight' data-aos-anchor-placement="center-center" data-aos-duration='2000' />
    <div id='carouselSandwichContainer'  data-aos='carouselBtnRight' data-aos-anchor-placement="center-center" data-aos-duration='2000'>
      <img id='carouselSandwich' alt='sandwich' src={sandwich} />
    </div>
    <div id='carouselBtnContainer' data-aos='carouselBtnRight' data-aos-anchor-placement="center-center" data-aos-duration='2000'>
      <button id='carouselBtn'>Menú</button>
    </div>
    <img className='carouselOneImg' src={carousel} alt='carousel'  data-aos='carouselRight' data-aos-anchor-placement="center-center" data-aos-duration='2000' />
  </div>
  )
}

export default Carousel