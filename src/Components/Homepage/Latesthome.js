import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Latesthome() {
    return (
        <div className='latesthome'>
            <Container>
                <Row>
                    <Col xl="6" md="12">
                        <div className='text'>
                            <h1>Get a 30% Discount! <span><img src='/images/Home/mic-speaker.png' alt='home'></img></span></h1>
                            <h3>Create Your Free Account Today!</h3>
                            <h6>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                            
                        </div>
                        <div class="buttons">
                                <button class="blob-btn">
                                    Join Now
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
                        </div>
                    </Col>
                    <Col xl="6" md="12">
                    {/* <div class="wow zoomIn" data-wow-duration="1s" data-wow-offset="100" style="visibility: visible; animation-duration: 1s; animation-name: zoomIn;">
                
              </div> */}
                        {/* <img className='image wow zoomIn' src="/images/Home/discount-stamp-2.png" data-wow-duration="1s" data-wow-offset="100" style="visibility: visible; animation-duration: 1s; animation-name: zoomIn;"></img> */}
                        {/* <img className='image' src="/images/Home/img_553471.png"></img> */}
                        <img
      className='image wow zoomIn' // تضمين الكلاسات الخاصة بك هنا
      src="/images/Home/discount-stamp-2.png"
      alt="Discount-Stamp" // يفضل تضمين نص بديل للصورة لأغراض الوصولية
      data-wow-duration="1s"
      data-wow-offset="100"
      style={{
        visibility: 'visible',
        animationDuration: '2s',
        animationName: 'zoomIn'
      }}
    />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Latesthome;