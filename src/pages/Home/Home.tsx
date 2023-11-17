import React from 'react';

// Importing components
import Header from "../../section/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import AboutAbstract from "../../section/AboutAbstract/AboutAbstract";
import ShopHome from "../../section/ShopHome/ShopHome";
import Events from "../../section/Events/Events";
import Footer from "../../section/Footer/Footer";

// Importing styles
import './Home.scss';
import Contact from '../../section/Contact/Contact';

const Home: React.FC = () => {
    return (
      <div id="homeContainer">
        <Header />
        <Gallery />
        <Carousel />
        <ShopHome />
        <Events />
        <Contact />
        <Footer />
      </div>
    );
};

export default Home;
