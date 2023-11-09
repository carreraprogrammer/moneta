import shopBtn from '../resources/Images/shopHomeBtn.png'
import { NavLink } from 'react-router-dom';
import shopBackground from '../resources/Images/backgroundShop.svg'
import $ from 'jquery'

const ShopHome = () => {
  const handleOnShopBackground = () => {
    $('#shopSection').css({
      background: `url(${shopBackground})`,
      backgroundColor: '#ea984e',
      backgroundSize: 'cover',
      backgroundPosition:'center',
      transition: 'all 5s ease-in-out'
    })
    $('#shopImage').css({
      transform: 'rotate(-2deg) translateY(-9%)',
      transition: 'all 0.5s ease-in-out'
    })
    $('.nav').addClass('navhidde')
  }

  const handleLeaveShopBackground = () => {
    $('#shopSection').css({
      background: '',
      backgroundColor: '#ea984e',
      backgroundSize: 'cover',
      backgroundPosition:'center',
      transition: 'all 5s ease-in-out'
    })
    $('#shopImage').css({
      transform: 'rotate(0deg) translateY(-9%)'
    })
  }

  return (
  <div id='shopSection'>
    <h1 data-aos='fade-up' id='shopTitle'>SHOP</h1>
      <div id='shopImage' data-aos='imageAnimation' data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-anchor-placement="center-center" data-aos-anchor='#imageHomeContainer'>
        <NavLink id='shopBtn' to='/Shop'>
          <p  data-aos="fade-in" data-aos-duration="1000" id='shopBtnText' data-aos-anchor-placement="center-center"  data-aos-anchor='#imageHomeContainer' onMouseOver={() => {
            $('#shopButtonImage').css({animation: 'rotation 1s infinite linear'}); handleOnShopBackground()
          }} onMouseLeave={()=> {
            $('#shopButtonImage').css({animation: 'none'}); handleLeaveShopBackground()
          }} style={{cursor: 'pointer', fontWeight: 'bold'}}>Tienda</p>
          <img onMouseOver={handleOnShopBackground} onMouseLeave={handleLeaveShopBackground} id='shopButtonImage' src={shopBtn} alt='shopBtn' data-aos="rotate-c"  data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-anchor-placement="center-center" data-aos-delay='100' />
        </NavLink>
      </div>
  </div>
  )
}

export default ShopHome