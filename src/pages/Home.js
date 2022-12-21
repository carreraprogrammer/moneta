import Header from "../components/Header";
import '../Styles/Home.css'
import Carousel from '../components/Carousel'
import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import arrow from '../resources/Images/arrow.svg'
import affogato from '../resources/Images/affogato.png'

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  
    const startCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
        transform: 'translateX(-20%)'
      })
      $('#carouselOne > :nth-child(3)').css({
        transform: 'translateX(-20%)'
      })
      $('#carouselOne > :nth-child(2)').css({
        transform: 'translateX(-80%)'
      })
    }

    return(
      <div id="homeContainer">
        <Header />
        <div id='homeGallery'>
          <div id='galleryContainer' data-aos='fade-in' onMouseOver={startCarousel}>
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
            <img style={{width: '200px', height: '400px'}} src={arrow} alt='arrow' data-aos='fade-right' />
          </div>
          <div id='imageHome'>
            <img style={{width: '100%', height: '100%'}} src={affogato} />
          </div>
        </div>
      </div>
    )
}

export default Home