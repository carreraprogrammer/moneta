/* COMPONENTS */

import Header from "../components/Header";
import Carousel from '../components/Carousel'
import Events from "../components/Events";

/* STYLES */

import '../Styles/Home.css'

/* LIBRARIES */

import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* HOOKS */

import { useEffect } from 'react'

/* IMAGES */ 

import arrow from '../resources/Images/arrow.svg'
import affogato from '../resources/Images/affogato.png'
import ShopHome from "../components/ShopHome";

const Home = () => {
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
      <div id="homeContainer">
        <Header />
        <div id='homeGallery'>
          <div id='galleryContainer' data-aos='fade-in' data-aos-anchor-place='center-center' data-aos-easing="ease-in-sine"  data-aos-duration='2000' onMouseOver={startCarousel}>
            <div id='homeGalleryOne'></div>
            <div id='homeGalleryTwo'></div>
            <div id='homeGalleryThree'></div>
          </div>
        </div>
        <Carousel />
        <div id='descriptionContainer'>
          <p id='homeDescription'>Los cafés especiales se vuelven el feliz acompañante de ideas, aprendizajes y esperanzas. Somos cultura de cafés especiales!</p>
        </div>
        <div id='imageHomeContainer'>
          <div id='arrowContainer'>
            <img id='arrowHome' src={arrow} alt='arrow' data-aos='fade-right' />
          </div>
          <div id='imageHome' data-aos='fade-in' data-aos-anchor-place='top-center' data-aos-easing="ease-in-sine"  data-aos-duration='2000'>
            <img style={{width: '100%', height: '100%'}} src={affogato} alt='affogato' />
          </div>
        </div>
        <ShopHome />
        <Events />
      </div>
    )
}

export default Home