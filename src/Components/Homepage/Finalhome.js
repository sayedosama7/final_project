import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Finalhome() {
    return (
        <div className='finalhome'>
            <Container>
                <Row>
                    <Col md="3">
                        <div animation-duration="1.2s" data-wow-delay="0.2s" className='box span3 wow bounceInUp center'>
                            <h1><i class="fa-solid fa-gear"></i></h1>
                            <div className='text'>
                                <h2>Lifetime Access</h2>
                                <h5>Welcome to our academy, where learning knows no bounds!</h5>
                            </div>
                        </div>

                    </Col>
                    <Col md="3">
                        <div data-wow-delay="0.4s" className='box span3 wow bounceInUp center'>
                            <h1><i class="fa-solid fa-check"></i></h1>
                            <div className='text'>
                                <h2>Best Teachers</h2>
                                <h5>At our academy, we take pride in providing the best teachers for our students. </h5>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div data-wow-delay="0.6s" className='box span3 wow bounceInUp center'>
                        <h1><i class="fa-solid fa-chalkboard-user"></i></h1>
                            <div className='text'>
                                <h2>Diverse Learning</h2>
                                <h5>At our The academy offers a wide array of educational materials covering various subjects and fields</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div data-wow-delay="0.8s" className='box span3 wow bounceInUp center'>
                        <h1><i class="fa-solid fa-headset"></i></h1>                            
                            <div className='text'>
                                <h2>Interactive Support</h2>
                                <h5>The academy website offers a wide array of educational materials covering various subjects and fields</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Finalhome;