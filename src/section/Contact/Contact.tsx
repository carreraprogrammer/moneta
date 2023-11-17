import React from 'react'
import './Contact.scss'

const Contact:React.FC = () => {
  return (
    <section id='contactSection'>
      <h2 id='contactTitle'>CONTACTANOS</h2>
      <form>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Telefono' />
        <textarea placeholder='Mensaje' />
      </form>
    </section>
  )
}

export default Contact