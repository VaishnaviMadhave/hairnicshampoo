import React from 'react'
import {Container  } from "react-bootstrap";
import Natural from "./Natural";
import Use from "./Use";
function Htuse() {
  return (
    <div>
         <Container fluid>
       <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>How to use</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">How to use</a>
    </div>
    </div>
    </Container>
    <Natural/>
    <Use/>
    </div>
  )
}

export default Htuse