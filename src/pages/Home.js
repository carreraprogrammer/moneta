import Header from "../components/Header";
import '../Styles/Home.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
    return(
      <div id="homeContainer">
        <Header />
        <div id='homeGallery'>
          <div id='galleryContainer' loading='lazy'>
            <div id='homeGalleryOne'></div>
            <div id='homeGalleryTwo'></div>
            <div id='homeGalleryThree'></div>
          </div>
        </div>
      </div>
    )
}

export default Home