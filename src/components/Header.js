import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import frontImage from '../resources/Images/frontPage.svg'

const Header = () => {
  useEffect(() => {
      AOS.init({duration: 3000})
  }, [])

  return(
    <header className='header' id='header' data-aos='fade-in' >
      <h1 
        id='headerTitle'  
      >
          <span data-aos="zoom-in-up" data-aos-duration="3000">
          M
          </span>
          <span data-aos="fade-up" data-aos-duration="3000"> 
          O
          </span>
          <span data-aos="fade-down" data-aos-duration="3000">
          N
          </span>
          <span div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
          E
          </span>
          <span data-aos="fade-down" data-aos-duration="3000">
          T
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="3000">
          A
          </span></h1>
          <img id='frontImage' src={frontImage}/>
    </header>
  )
}

export default Header