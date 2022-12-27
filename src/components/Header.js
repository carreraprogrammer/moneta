import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import frontImage from '../resources/Images/newFrontPage.svg'
import leaves from '../resources/Images/leaves.png'

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
          <img id='frontImage' src={frontImage} style={{objectFit: 'cover'}} alt='coffee dates'/>
          <img id='leaves' src={leaves} style={{position: 'fixed', top: '0', left: '0%', height: '60%', transition: 'all 3s ease-in-out'}} data-aos='fade-down'  data-aos-duraton='3000' data-aos-anchor-placement='top-top' alt='leaves' />
    </header>
  )
}

export default Header