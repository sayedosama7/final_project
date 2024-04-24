import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Endhome() {
    return (
        <div className='endhome'>
            <Container>
                <Row className="items">
                    <Col md="8">
                        <div className='text'>
                            <h1>Become an Instructor!</h1>
                            <h6>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                        </div>
                    </Col>
                    <Col>
                        <button>Start Teaching Now</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Endhome;