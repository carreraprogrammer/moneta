import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import frontImage from '../resources/Images/newFrontPage.svg'
import leaves from '../resources/Images/leavesGif.gif'

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
          <img id='leavesGif' src={leaves} style={{position: 'absolute', top: '0', left: '0', filter: 'saturate(10%) sepia(100%) opacity(10%)'}}/>
    </header>
  )
}

export default Header