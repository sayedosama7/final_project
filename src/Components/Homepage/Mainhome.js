// import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Mainhome() {
    return (
        <div className='mainhome'>
            <Container fluid>
                <Row>
                    <Col xl="5" md="12">
                        <div className='text span3 wow bounceInLeft'>
                            <img className='imgone' src="/images/instructors/tag-2.png"></img>
                            <a href='#'><h5>___Our Instructors</h5></a>
                            <h1>Meet the Dedicated
                                Educators Shaping
                                Your Future.</h1>
                            <h6>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                            <div class="buttons mr-auto">
                                <button class="blob-btn">
                                    View All
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
                        </div>
                    </Col>
                    <Col xl="7" md="12">
                        <div className='images span3 wow bounceInRight'>
                            <Swiper
                                slidesPerView={2.5}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src='/images/Home/instructors/businessman-black-suit-holding-his-tasklist-makes-thumb-up.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/front-view-man-classroom.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4 icon'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/handsome-business-man-wearing-suit-holding-laptop-computer-pointing-with-finger-camera-smiling-cheerfully-standing-white-background.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i>   5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/medium-shot-man-doing-math-indoors.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/medium-shot-woman-studying-math.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/portrait-male-personal-shopper-working.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/young-attractive-dark-haired-man-glasses-is-showing-business-plan-whiteboard-he-wears-blue-shirt-dark-jacket-he-is-smiling-side.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><img src='/images/Home/instructors/young-handsome-man-holding-notebooks-concept-e-learning-courses.jpg'></img>
                                    <div className="texts">
                                        <h2>Ahmed Hatem</h2>
                                        <h6><span className='mr-4'><i class="fa-solid fa-star"></i> 5</span><span>Full Stack  Developer</span></h6>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainhome;






// import './styles.css';

// import required modules


// export default function App() {
//     return (
//         <>

//         </>
//     );
// }