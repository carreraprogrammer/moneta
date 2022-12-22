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
    }

    const startCarousel = () => {
        $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(8%)',
          transition: 'all 5s ease-in-out'
        })
        $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(8%)',
          transition: 'all 5s ease-in-out'
        })
        $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(32%)',
          transition: 'all 5s ease-in-out'
        })
      }
  
  return (
  <div id='carouselOne' onMouseLeave={startCarousel} onMouseOver={stopCarousel}>
    <img className='carouselOneImg' src={carousel} alt='carousel'  data-aos-easing="ease-in-sine" data-aos='carouselRight' data-aos-anchor-placement="top-bottom" data-aos-duration='2000' data-aos-anchor='#homeGallery' />
    <div id='carouselBtnContainer' data-aos-easing="ease-in-sine" data-aos='carouselBtnRight' data-aos-anchor-placement="top-center" data-aos-duration='2000'>
      <button id='carouselBtn' style={{marginRight: '10px', marginBottom: '10px',}}>Menú</button>
    </div>
    <img className='carouselOneImg' src={carousel} alt='carousel'  data-aos-easing="ease-in-sine" data-aos='carouselRight' data-aos-anchor-placement="top-bottom" data-aos-duration='2000'/>
  </div>
  )
}

export default Carousel