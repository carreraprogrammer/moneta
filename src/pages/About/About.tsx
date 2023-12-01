import React from 'react'
import AboutHeader from '../../section/AboutHeader/AboutHeader'
import AboutAbstract from '../../section/AboutAbstract/AboutAbstract'
import Contact from '../../section/Contact/Contact'
import Footer from '../../section/Footer/Footer'

const About: React.FC = () => {
  return (
    <div>
      <AboutHeader />
      <AboutAbstract />
      <Contact />
      <Footer />
    </div>
  )
}

export default About