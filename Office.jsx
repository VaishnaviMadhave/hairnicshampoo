import React from 'react'
import { Col, Container,Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


function Office() {
  return (
    <div>
       <Container>
            <Row className="gap-4 mt-5 " >
              <Col>
              <Card className="text-center" >
                <Card.Body className="ncard px-3 py-5 border">
                <i class="fa-solid fa-location-dot fs-1"></i>
                <h4 className="text-white mt-4 fw-bolder">Office Address</h4>
                <p className="text-white fw-light">123, Streets, New York, USA</p>
                 </Card.Body>
                 </Card>
              </Col>

              <Col>
              <Card className="text-center" >
                <Card.Body className="ncard px-3 py-5 border">
                <i class="fa-solid fa-phone fs-1"></i>
                <h4 className="text-white mt-4 fw-bolder">Call Us</h4>
                <p className="text-white fw-light">+98 797326527</p>
                 </Card.Body>
                 </Card>
              </Col>

              <Col>
              <Card className="text-center" >
                <Card.Body className="ncard px-3 py-5 border">
                <i class="fa-solid fa-envelope fs-1"></i>
                <h4 className="text-white mt-4 fw-bolder">Mail Us</h4>
                <p className="text-white fw-light">info@eg.com</p>
                 </Card.Body>
                 </Card>
              </Col> 

            </Row>
            </Container>
          
    </div>
  )
}

export default Office