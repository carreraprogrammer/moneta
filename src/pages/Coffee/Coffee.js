import sandwich from '../../assets/Images/SandwichWithBrew.png'
import Menu from '../../section/Menu/Menu'
import './Coffee.scss'

const Coffee = () => {

  return(
    <>
      <div id='coffeeHeader'>
        <h1 id='coffeeHeaderTitle'>Café</h1>
        <p id='coffeeHeaderDescription'>Buscamos ser un gran lugar de memoria, donde podamos compartir el amor por el café y la gastronomia nariñense; intercambiar saberes y ser semillas de sueños nuevos</p>
      </div>
      <div id='coffeeGalleryContainer'>
        <div id='coffeeGalleryOne'>
          <img src={sandwich} alt='sandwich' />
        </div>
      </div>
    <Menu />
    </>
  )
}

export default Coffee