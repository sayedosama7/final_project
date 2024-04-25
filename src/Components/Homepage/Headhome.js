import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Headhome() {
  return (
    <div className='headhome'>
      <Container>
        <Row>

          <Col md="12" lg="6">
            <div className='headhome-caption'>
              <img className='tag' src="/images/instructors/tag-2.png" alt='tag' />
              <div className='headhome-title'>
                <img className='rocket' src="/images/Home/rocket.png" alt='rocket' />
                <h2 className='text-primary animate__animated animate__fadeInLeft'>Best Online</h2>
                <h3 className='text-primary animate__animated animate__fadeInLeft'>Learning</h3>
                <h4 className='animate__animated animate__fadeInLeft'>Resources!</h4>
                <h5 className='text-muted mt-4 animate__animated animate__fadeInLeft'>Make Your Free Account & Get Discounts</h5>
              </div>
              {/* <button>Enroll Now</button> */}
              <div className="buttons mt-4 animate__animated animate__fadeInLeft">
                <Link to='/signup'>
                  <button className="blob-btn">
                    Enroll Now
                    <span className="blob-btn__inner">
                      <span className="blob-btn__blobs">
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                </Link>

                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                  </defs>
                </svg> */}

                <img className='spin-logo' src="images/Home/Untitled-1.png" alt='home'></img>
              </div>
            </div>
          </Col>

          <Col md="12" lg="6">
            <div className='head-banner'>
              <img className='img-fluid animate__animated animate__fadeInRight' src='images/Home/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922477gbjew.png' alt='home'></img>
             <div>
              <img className='small-img lamp' src='images/Home/homehead/lamp.png' alt='lamp' />
              <img className='small-img camera' src='images/Home/homehead/camera.png' alt='lamp' />
              <img className='small-img light' src='images/Home/homehead/light.png' alt='lamp' />
              <img className='small-img mic' src='images/Home/homehead/mic.png' alt='lamp' />
            </div>
            </div>

          </Col>
          
        </Row>
      </Container>
    </div>
  )
}
export default Headhome