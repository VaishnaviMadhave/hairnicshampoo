import React from 'react'
import {Container, Row, Col  } from "react-bootstrap";
import Office from "./Office";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <div>
       <Container fluid>
       <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>Contact</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">Contact</a>
    </div>
    </div>
    </Container>
    <Office/>

    <Container fluid>
    <h1 className="fw-light text-center mt-5">If You Have any Query <span className="fw-bold " style={{color:"#90bc79"}}> Please</span></h1>
    <h1 style={{color:"#90bc79"}} className="fw-bold text-center ">Contact Us</h1>
      <Row className="cnt">
        <Col md={7}>
        <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. 
          </p>
          <Link to=''>Download Now!</Link>
          <Row className="mt-4 mv-4">
            <Col >
            <input type="text" placeholder="name" className="form-control" ></input>
            </Col>
            <Col>
            <input type="email" placeholder="mail" className="form-control" ></input>
            </Col>
            </Row>
            <input type="email" placeholder="subject" className="form-control mb-4 mt-3" ></input>
            <textarea rows={7} className="form-control mb-4" placeholder="message"></textarea>
            <Button className="px-4 mt-3 fs-5 w-100 mb-5" style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Send Message</Button>
          </Col>
        <Col md={5}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000623.759652719!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1725360206724!5m2!1sen!2sin" 
        width="600" height="500" 
        style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact