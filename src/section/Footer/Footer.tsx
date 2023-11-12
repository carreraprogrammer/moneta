import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <section className='footer-container' >
      <div className='column-1'>
        <div>
          <div className='footer-title'>VERSION</div>
          <div className='footer-text'>2023 © Edition</div>
        </div>
      </div>
      <div className='column-2'>
        <div className='footer-title'>SOCIAL MEDIA</div>
        <ul>
          <li>
            <a href='https://github.com/carreraprogrammer' target='_blank' rel='noreferrer'>
              Github
            </a>
          </li>
          <li className='footer-text'>
            <a href='https://www.instagram.com/carreraprogrammer/' target='_blank' rel='noreferrer'>
              Instagram
            </a>
          </li>
          <li className='footer-text'>
            <a href='https://www.linkedin.com/in/carreraprogrammer/' target='_blank' rel='noreferrer'>
              Linkedin
            </a>
          </li>
          <li className='footer-text'>
            <a href='https://twitter.com/carreraprog' target='_blank' rel='noreferrer'>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
