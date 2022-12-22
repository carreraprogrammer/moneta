import Header from "../components/Header";
import '../Styles/Home.css'
import Carousel from '../components/Carousel'
import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import arrow from '../resources/Images/arrow.svg'
import affogato from '../resources/Images/affogato.png'
import shopBtn from '../resources/Images/shopHomeBtn.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  
    const startCarousel = () => {
      $('#carouselOne > :nth-child(1)').css({
        transform: 'translateX(3%)',
        transition: 'all 5s ease-in-out'
      })
      $('#carouselOne > :nth-child(3)').css({
        transform: 'translateX(3%)',
        transition: 'all 5s ease-in-out'
      })
      $('#carouselOne > :nth-child(2)').css({
        transform: 'translateX(12%)',
        transition: 'all 5s ease-in-out'
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
            <img id='arrowHome' src={arrow} alt='arrow' data-aos='fade-right' />
          </div>
          <div id='imageHome'>
            <img style={{width: '100%', height: '100%'}} src={affogato} alt='affogato' />
          </div>
        </div>
        
        <div id='shopSection'>
          <h1 data-aos='fade-up' id='shopTitle'>SHOP</h1>
          <div id='shopImage' data-aos='imageAnimation' data-aos-duration="4000" data-aos-easing="ease-in-sine" data-aos-anchor-placement="center-center" data-aos-anchor='#imageHomeContainer'>
          
            <NavLink id='shopBtn' to='/Shop'>
              <p  data-aos="fade-in" data-aos-duration="1000" id='shopBtnText' data-aos-anchor-placement="center-center"  data-aos-anchor='#imageHomeContainer' onMouseOver={() => {
                $('#shopButtonImage').css({animation: 'rotation 1s infinite linear'})
              }} onMouseLeave={()=> {
                $('#shopButtonImage').css({animation: 'none'})
              }} style={{cursor: 'pointer', fontWeight: 'bold'}}>TIENDA</p>
              <img id='shopButtonImage' src={shopBtn} alt='shopBtn' data-aos="rotate-c"  data-aos-duration="4000" data-aos-easing="ease-in-sine" data-aos-anchor-placement="center-center" />
            </NavLink>
          </div>
        </div>
        <div id='form'>
            
        </div>
      </div>
    )
}

export default Home