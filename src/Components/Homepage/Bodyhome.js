import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Bodyhome() {
  return (
    <div className='bodyhome'>
        <Container>
            <Row>
                <Col md="3">
                    <div className='itemone' id="box">
                    <h1><i class="fa-solid fa-users-between-lines"></i></h1>
                        <div className='text'>
                            <h4>20</h4>
                            <h4>Group</h4>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className='itemtwo' id="box">
                    <h1><i class="fa-solid fa-person-chalkboard"></i></h1>
                        <div className='text'>
                            <h4>12</h4>
                            <h4>Instructors</h4>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className='itemfour' id="box">
                        <h1><i class="fa-solid fa-graduation-cap"></i></h1>
                        <div className='text'>
                            <h4>230</h4>
                            <h4>Students</h4>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className='itemthree' id="box">
                    <h1><i class="fa-solid fa-certificate"></i></h1>
                        <div className='text'>
                            <h4>15</h4>
                            <h4>Courses</h4>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}
export default Bodyhome;