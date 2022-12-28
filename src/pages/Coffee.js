import AOS from 'aos'
import '../Styles/Coffee.css'
import { useEffect } from 'react'
import sandwich from '../resources/Images/SandwichWithBrew.jpg'
import Menú from '../components/Menú'


const Coffee = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
    window.scrollTo(0, 0);
  }, [])


  return(
    <>
      <div id='coffeeHeader'>
        <h1 id='coffeeHeaderTitle'>Café</h1>
        <p id='coffeeHeaderDescription'>Buscamos ser un gran lugar de memoria, donde podamos compartir el amor por el café y la gastronomia nariñense; intercambiar saberes y ser semillas de sueños nuevos</p>
      </div>
    <div id='homeGallery' style={{background: '#ea984e'}}>
      <div id='galleryContainer' data-aos='fade-in' data-aos-anchor-place='center-center' data-aos-easing="ease-in-sine"  data-aos-duration='2000' style={{border: '4px solid #6d0022', width: '90%'}}>
        <div id='homeGalleryOne' style={{background: `url(${sandwich})`, backgroundSize: 'cover', flexBasis: '100%', backgroundPositionX: 'center', backgroundPositionY: 'center'}}></div>
      </div>
    </div>
    <Menú />
    </>
  )
}

export default Coffee