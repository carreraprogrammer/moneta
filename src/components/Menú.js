import menu from '../resources/Information/Menú.js'

const Menú = () => {
  const tintos = menu.filter((section) => section.subCategory === 'Tintos' )

  return (
    <div id='menu'>
    <h1 id='menuTitle'>MENÚ</h1>
    <div id='tintos'>
      <h2>{tintos[0].subCategory}</h2>
      {tintos.map((tinto) => (
        <div className='menuProduct'>
          <h3>{tinto.name}</h3>
          <p>{tinto.productInfo}</p>
        </div>
      )   
      )}
    </div>
    </div>
  )
}

export default Menú

