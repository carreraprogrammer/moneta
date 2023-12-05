import React from 'react';

import Header from "../../section/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import ShopHome from "../../section/ShopHome/ShopHome";
import Events from "../../section/Events/Events";
import Footer from "../../section/Footer/Footer";

import './Home.scss';
import Contact from '../../section/Contact/Contact';
import useScrollToTop from '../../customHooks/useScrollToTop';

const Home: React.FC = () => {

  useScrollToTop();

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
