/* COMPONENTS */

import Header from "../../components/Header/Header";

/* STYLES */

import './Home.scss'

/* LIBRARIES */

import AOS from 'aos'
import 'aos/dist/aos.css'

/* HOOKS */

import { useEffect } from 'react'


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 500});
        window.scrollTo(0, 0);
    }, [])

    return(
      <div id="homeContainer">
        <Header />
  
      </div>
    )
}

export default Home