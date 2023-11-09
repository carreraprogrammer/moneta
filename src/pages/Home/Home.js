/* COMPONENTS */

import Header from "../components/Header/Header";
import Carousel from '../components/Carousel/Carousel'
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";

/* STYLES */

import '../Styles/Home.scss'

/* LIBRARIES */

import AOS from 'aos'
import 'aos/dist/aos.css'

/* HOOKS */

import { useEffect } from 'react'

/* IMAGES */ 

import arrow from '../resources/Images/arrow.svg'
import affogato from '../resources/Images/affogato.png'
import ShopHome from "../components/ShopHome";

/* ROUTES */

import { NavLink } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 500});
        window.scrollTo(0, 0);
    }, [])

    return(
      <div id="homeContainer">
        <Header />
        <Gallery />
        <Carousel />
        <div id='descriptionContainer'>
          <p id='homeDescription'>Los cafés especiales se vuelven el feliz acompañante de ideas, aprendizajes y esperanzas. Somos cultura de cafés especiales!</p>
        </div>
        <div id='imageHomeContainer'>
          <div id='arrowContainer'>
            <NavLink id='arrowHomeLink' to='/Coffee'><img id='arrowHome' src={arrow} alt='arrow' data-aos='fade-right' /></NavLink>
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