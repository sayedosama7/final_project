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
    <div className='allhomepage'>
        <Headhome/>
        <div className='mt-5 pt-5'></div>
        <Bodyhome/>
        <div className='mt-5 pt-5'></div>
        <Sectionhome/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Finalhome/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Mainhome/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Latesthome/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Endhome/>
        <div className='mt-5 pt-5'></div>
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