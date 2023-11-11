/* COMPONENTS */

import Header from "../../section/Header/Header";

/* STYLES */

import './Home.scss'

/* HOOKS */

import { useEffect } from 'react'
import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import AboutAbstract from "../../section/AboutAbstract/AboutAbstract";
import ShopHome from "../../section/ShopHome/ShopHome";
import Events from "../../section/Events/Events";

const Home = () => {

    return(
      <div id="homeContainer">
        <Header />
        <Gallery />
        <Carousel />
        <AboutAbstract />
        <ShopHome />
        <Events />
      </div>
    )
}

export default Home