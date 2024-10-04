import React from 'react'
import {Container  } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
function Notfound() {
  return (
    <div>
            <Container fluid>
       <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>Error</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">404 Error</a>
    </div>
    </div>
    </Container>

    <Container className="mt-5 mb-5 text-center ">
    <i style={{color:"#90bc79", }} className="fa-solid fa-triangle-exclamation fs-1"></i>
          <h1 className="fw-bold">404</h1>
          <h3 className="fw-bold">Page Not Found</h3>
          <p>We are sorry, the page you have looking for is not exist in our website! Maybe
          <p>go to our home page or try to use a search?</p></p>
          <Button className="px-4 mt-3 fs-5" style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Go Back to Home</Button>


        </Container>
    </div>
  )
}

export default Notfound