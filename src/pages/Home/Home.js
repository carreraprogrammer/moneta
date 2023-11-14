/* COMPONENTS */

import Header from "../../section/Header/Header";

/* STYLES */

import './Home.scss'

/* HOOKS */

import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import AboutAbstract from "../../section/AboutAbstract/AboutAbstract";
import ShopHome from "../../section/ShopHome/ShopHome";
import Events from "../../section/Events/Blogs";
import Footer from "../../section/Footer/Footer";

const Home = () => {

    return(
      <div id="homeContainer">
        <Header />
        <Carousel />
        <Gallery />
        <AboutAbstract />
        <ShopHome />
        <Events />
        <Footer />
      </div>
    )
}

export default Home