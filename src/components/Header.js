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
          oneta
          </span></h1>
          <img id='frontImage' src={frontImage}/>
    </header>
  )
}

export default Header