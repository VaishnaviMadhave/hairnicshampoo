import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Footer() {
  return (
    <div>
        <Container fluid>
            <div className="bgimg text-center p-5 mt-5">
                <h1>Let's Subscribe <span className="text-white fw-bold">The Newsletter</span></h1>
                <p className="text-white">Subscribe now to get 30% discount on any of our products</p>
                <Form.Group className="mb-3 w-75 mx-auto d-block mt-5 d-flex align-items-center" controlId="exampleForm.ControlInput1">
                 <Form.Control type="email" placeholder="enter your email" className="bg-transparent opacity-50 border-4 border-white  p-3 center" />
                 <i className="fa-solid fa-paper-plane text-white fs-4" style={{marginLeft:"-40px"}}></i>
      </Form.Group>
            </div>
            <div>
                <Row className="f mt-5">
             <Col>
             <a href="#" style={{color:"#90bc79"}}><h1>Hairnic</h1></a>
             <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus.</p>
             </Col>
             <Col>
             <h4>Get in Touch</h4>
             <ul className="list-unstyled mt-3">
                <li><i class="fa-solid fa-location-dot me-3 text-secondary"></i> 123 Street, New York, USA</li>
                <li className="mt-3"><i class="fa-solid fa-phone me-3 text-secondary "></i> +012 345 67890</li>
                <li  className="mt-3"><i class="fa-solid fa-envelope me-3 text-secondary"></i> info@example.com</li>
                </ul>
                <p  className="mt-3">
               <a href="#"> <i className="fa-brands fa-twitter  rounded-circle p-2  fs-5 me-2" style={{border:"3px solid #90bc79"}}></i></a>
               <a href="#">  <i className="fa-brands fa-facebook rounded-circle p-2  fs-5 me-2" style={{border:"3px solid #90bc79"}}></i></a>
               <a href="#"> <i className="fa-brands fa-instagram rounded-circle p-2  fs-5 me-2" style={{border:"3px solid #90bc79"}}></i></a>
               <a href="#"> <i className="fa-brands fa-linkedin rounded-circle p-2  fs-5" style={{border:"3px solid #90bc79"}}></i></a>
                </p>
             </Col>
             <Col>
             <h4>Our Products</h4>
             <ul className="text-secondary list-unstyled">
                <li><a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Hair Shining Shampoo</a></li>
                <li>< a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Anti-dandruff Shampoo</a></li>
                <li><a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Anti Hairfall Shampoo</a></li>
                <li> <a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Hair Growing Shampoo</a></li>
                <li> <a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Anti Smell Shampoo</a></li>
            </ul>
             </Col>
             <Col>
             <h4>Popular Links</h4>
             <ul className="text-secondary list-unstyled">
                <li><a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>About us</a></li>
                <li>< a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Contact Us</a></li>
                <li><a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Privacy Policy</a></li>
                <li> <a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Terms and condition</a></li>
                <li> <a href="#"> <i class="fa-solid fa-greater-than me-2 mt-3"></i>Career</a></li>
            </ul>
             </Col>
                </Row>

                <hr/>
                <div className="d-flex f"> 
                <p className=" w-50 flex-grow-1  ">&copy;<a href="#">Hairnic</a>,All Right Reserved. Designed & Distributed By <p>Vaishnavi Madhave</p></p>
                <Breadcrumb style={{"--bs-breadcrumb-divider": '|' }}>
      <Breadcrumb.Item href="#">Home | </Breadcrumb.Item> 
      <Breadcrumb.Item href="#"> Cookies | </Breadcrumb.Item>
      <Breadcrumb.Item href="#"> Help | </Breadcrumb.Item>
      <Breadcrumb.Item href="#">FAQ's | </Breadcrumb.Item>
    </Breadcrumb>
                </div>
</div>
        </Container>    

    </div>
  )
}

export default Footer