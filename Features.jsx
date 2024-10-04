import React from 'react'
import {Container  } from "react-bootstrap";
import Natural from "./Natural";
import Benefits from "./Benefits";
function Features() {
  return (
    <div>
         <Container fluid>
       <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>Features</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">Features</a>
    </div>
    </div>
    </Container>
    <Natural/>
    <Benefits/>
    </div>
  )
}

export default Features