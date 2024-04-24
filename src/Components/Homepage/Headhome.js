import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Headhome() {
  return (
    <div className='headhome'>
      <Container>
        <Row>
          <Col md="6" lg="6">
            <div className='text animate__animated animate__fadeInLeft'>
              <img className='imgone' src="/images/instructors/tag-2.png"></img>            

              <h1>Best Online Learning <span> Resources!</span><span><img src="/images/Home/rocket.png"></img></span></h1>
              <h4>ake Your Free Account & Get Discounts</h4>
              {/* <button>Enroll Now</button> */}
              <div class="buttons">
                <button class="blob-btn">
                Enroll Now
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br />

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                  </defs>
                </svg>
                <img src='images/Home/kian Logo-01.png'></img>
              </div>
              </div>
          </Col>
          <Col md="6" lg="6">
            <div className='image'>
              <div className='icons animate__animated animate__fadeInDown'>
                <img className='imgone' src="images/Home/Untitled-1.png"></img>
                <img className='imgtwo' src='images/Home/2910890.png'></img>
              </div>
              <img className='imgthree animate__animated animate__fadeInRight' src='images/Home/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922477gbjew.png'></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Headhome;