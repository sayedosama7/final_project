import React from 'react'
import Headhome from './Headhome'
import Bodyhome from './Bodyhome'
import Sectionhome from './Sectionhome'
import Mainhome from './Mainhome'
import Latesthome from './Latesthome'
import Finalhome from './Finalhome'
// import Swiper from 'swiper'
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Navigation/Footer';
import Endhome from './Endhome'

function Allhomepage() {
  return (
    <div>
      <Headhome />
      <Bodyhome />
      <Sectionhome />
      <Finalhome />
      <Mainhome />
      <Latesthome />
      <Endhome />
      <Footer />
      <ScrollToTop smooth
        color='#fff'
        style={{ backgroundColor: '#372B73' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
      />

    </div>
  )
}
export default Allhomepage