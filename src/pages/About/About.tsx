import React from 'react'
import AboutHeader from '../../section/AboutHeader/AboutHeader'
import AboutAbstract from '../../section/AboutAbstract/AboutAbstract'
import Contact from '../../section/Contact/Contact'
import Footer from '../../section/Footer/Footer'

import useScrollToTop from '../../customHooks/useScrollToTop'

const About: React.FC = () => {
  useScrollToTop()
  
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