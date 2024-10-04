import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from "react-bootstrap";
import Natural from "./Natural";
import Healthyhair from "./Healthyhair";

function About()
 {
  return (
    <Container fluid>
    <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>About Us</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">About</a>
    </div>
    </div>
    <Natural/>
    <Healthyhair/>
    </Container>
  )
}

export default About