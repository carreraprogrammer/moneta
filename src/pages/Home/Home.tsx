import React from 'react';

// Importing components
import Header from "../../section/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Carousel from "../../components/Carousel/Carousel";
import AboutAbstract from "../../section/AboutAbstract/AboutAbstract";
import ShopHome from "../../section/ShopHome/ShopHome";
import Events from "../../section/Events/Blogs";
import Footer from "../../section/Footer/Footer";

// Importing styles
import './Home.scss';

const Home: React.FC = () => {
    return (
      <div id="homeContainer">
        <Header />
        <Carousel />
        <Gallery />
        <AboutAbstract />
        <ShopHome />
        <Events />
        <Footer />
      </div>
    );
};

export default Home;
