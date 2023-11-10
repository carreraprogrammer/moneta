/* COMPONENTS */

import Header from "../../section/Header/Header";

/* STYLES */

import './Home.scss'

/* LIBRARIES */

import AOS from 'aos'
import 'aos/dist/aos.css'

/* HOOKS */

import { useEffect } from 'react'
import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import AboutAbstract from "../../section/AboutAbstract/AboutAbstract";
import ShopHome from "../../components/ShopHome/ShopHome";

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
        <AboutAbstract />
        <ShopHome />
      </div>
    )
}

export default Home