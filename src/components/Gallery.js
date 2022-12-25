import $ from 'jquery'
import AOS from 'aos'
import { useEffect } from 'react'

const Gallery = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    
    const startCarousel = () => {
        $('#carouselOne > :nth-child(1)').css({
          transform: 'translateX(-3%)',
          transition: 'all 5s ease-in-out'
        })
        $('#carouselOne > :nth-child(4)').css({
          transform: 'translateX(-3%)',
          transition: 'all 5s ease-in-out'
        })
        $('#carouselOne > :nth-child(2)').css({
          transform: 'translateX(-12%)',
          transition: 'all 5s ease-in-out'
        })
        $('#carouselOne > :nth-child(3)').css({
          transform: 'translateX(-12%)',
          transition: 'all 5s ease-in-out'
        })
      }

  return(
    <div id='homeGallery'>
    <div id='galleryContainer' data-aos='fade-in' data-aos-anchor-place='center-center' data-aos-easing="ease-in-sine"  data-aos-duration='2000' onMouseOver={startCarousel}>
      <div id='homeGalleryOne'></div>
      <div id='homeGalleryTwo'></div>
      <div id='homeGalleryThree'></div>
    </div>
  </div>
  )
}

export default Gallery