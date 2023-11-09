import AOS from 'aos'
import { useEffect } from 'react'
import sandwich from '../../assets/Images/SandwichWithBrew.png'
import Menu from '../../components/Menu/Menu'
import './Coffee.scss'

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
    <Menu />
    </>
  )
}

export default Coffee