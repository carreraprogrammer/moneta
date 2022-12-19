import Header from "../components/Header";
import '../Styles/Home.css'
import Carousel from '../components/Carousel'
import $ from 'jquery'

const Home = () => {
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
          <div id='galleryContainer' loading='lazy' onMouseOver={startCarousel}>
            <div id='homeGalleryOne'></div>
            <div id='homeGalleryTwo'></div>
            <div id='homeGalleryThree'></div>
          </div>
        </div>
        <Carousel />
        <div id='descriptionContainer'>
          <p id='homeDescription'>Los cafés especiales se vuelven el feliz acompañante de ideas, aprendizajes y esperanzas. Somos cultura de cafés especiales</p>
        </div>
        <div id='gifHomeContainer'>
          <div id='gifHome'></div>
        </div>
      </div>
    )
}

export default Home