import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Deals() {
  return (
    <div>
        <Container fluid className="bgimg mt-5">
            <Row className="align-items-center p-4">
                <Col>
                <img src="./img/shampoo-2.png " className="img-fluid mx-auto d-block w-100 image" />
                </Col>

                <Col>
                <Card style={{ width: '34rem'  , outline:"20px solid white" , borderRadius:"0px"}} className="py-4">
                  <Card.Body className="text-center">
        <Card.Title className="text-secondary">Natural & Organic Shampoo</Card.Title>
        <h1 className="fw-bold">DEALS OF THE DAY</h1>
        <h1 className="fw-bold" style={{color:"#90bc79"}}> $99.99 </h1>
        <h5>Fresh Organic Shampoo</h5>
        <p className="fs-5 fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus sed auctor.</p>
    <div className="d-flex justify-content-evenly align-items-center">
 <div className="p-2"> 
    <h1>0-226</h1>
    <h5 className="text-secondary">--Days--</h5>
 </div>
 <div className="p-2"> 
 <h1>21</h1>
 <h5 className="text-secondary">--Hours--</h5>
 </div>
 <div className="p-2">
 <h1>47</h1>
 <h5 className="text-secondary">--Minutes--</h5>
  </div>
 <div className="p-2">
 <h1>40</h1>
 <h5 className="text-secondary">--Secs--</h5>
  </div>

    </div>
        <Button className="px-4 mt-3 fs-5" style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Shop Now</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>
            </Container>
    </div>
  )
}

export default Deals