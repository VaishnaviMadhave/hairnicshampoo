import React from 'react'
import {Container  } from "react-bootstrap";
import Blogs from "./Blogs";
function Articles() {
  return (
    <div>
            <Container fluid>
       <div className="bgimg p-5 text-center mb-4 text-white">
      <h1>Blog Articles</h1>
      <div className="d-flex align-items-center justify-content-center">
           <a href='#' className="text-white">Home</a>
           <a href='#' className="text-white ms-2">Pages</a>
           <a href='#' className="text-white ms-2">Blog Articles</a>
    </div>
    </div>
    </Container>
    <Blogs/>
    </div>
  )
}

export default Articles