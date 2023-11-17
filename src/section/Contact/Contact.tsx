import React from 'react'
import './Contact.scss'
import Button from '../../components/Button/Button'

const Contact:React.FC = () => {
  return (
    <section id='contactSection'>
      <h2 id='contactTitle'>CONTACTANOS</h2>
      <form>
        <input type='text' className= 'formInputs' placeholder='Nombre' />
        <input type='text' className= 'formInputs' placeholder='Email' />
        <input type='text' className= 'formInputs' placeholder='Telefono' />
        <textarea placeholder='Mensaje' />
        <Button />
      </form>
    </section>
  )
}

export default Contact