import React from 'react'
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";

function Blogs() {
  return (
    <div>
      <Container fluid>
        <div className="mx-auto d-block mt-5 p-4 w-50">
        <h1 className="fw-light text-center">Form Our <span className="fw-bold " style={{color:"#90bc79"}}>Blog Articles</span></h1>
        <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
        </div>
        <Row className="pcard m- 5 5" >
          <Col>
          <Card className="p-4">
            <img src=" ./img/blog-1.jpg" className="mx-auto d-block img-fluid w-100" />
            <Card.Body>
              <Card.Title>Foods that are good for your hair growing </Card.Title>
              <p className="text-secondary"><i className="fa-solid fa-eye"></i> 9999 views  <i className="fa-solid fa-comments"></i> 99999 comments</p>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.
              </Card.Text>
              <Button className="btn1">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="p-4">
            <img src=" ./img/blog-2.jpg" className="mx-auto d-block img-fluid w-100" />
            <Card.Body>
              <Card.Title>How to take care of your hair naturally </Card.Title>
              <p className="text-secondary"><i className="fa-solid fa-eye"></i> 9999 views  <i className="fa-solid fa-comments"></i> 99999 comments</p>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.
              </Card.Text>
              <Button className="btn1">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="p-4">
            <img src=" ./img/blog-3.jpg" className="mx-auto d-block img-fluid w-100" />
            <Card.Body>
              <Card.Title>How to use natural and organic Shampoo </Card.Title>
              <p className="text-secondary"><i className="fa-solid fa-eye"></i> 9999 views  <i className="fa-solid fa-comments"></i> 99999 comments</p>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.
              </Card.Text>
              <Button className="btn1">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Blogs