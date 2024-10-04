import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Use() {
  return (
    <div>
    <Container fluid className="bgimg mb-5">
      <Container className="p-5 ">
        <h1 className="display-6 fw-light w-50 mx-auto d-block">
          How To Use Our{" "}
          <span className="text-white fw-bold">Natural & Organic</span> Hair
          Shampoo
        </h1>
        <p className="mt-3 w-50 mx-auto d-block text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          aliquet,erat non malesuada consequat, nibh erat tempus risus.
        </p>
      </Container>
      <Row>
        <Col className=" mx-auto">
          <i className="fa-solid fa-house-chimney border rounded-circle p-4 fs-1 "></i>
          <div className="text-white p-3">
            <h4>
              Wash
              <span className="border-bottom border-3 pb-2"> Hair With </span>
              Water
            </h4>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat.
            </p>
          </div>
        </Col>
        <Col>
          <i className="fa-solid fa-house-chimney border rounded-circle p-4 fs-1"></i>
          <div className="text-white p-3">
            <h4>
              Apply
              <span className="border-bottom border-3 pb-2"> Shampoo </span>
              On Hair
            </h4>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat.
            </p>
          </div>
        </Col>
        <Col>
          <i className="fa-solid fa-house-chimney border rounded-circle p-4 fs-1"></i>
          <div className="text-white p-3">
            <h4>
              Wash
              <span className="border-bottom border-3 pb-2"> Hair With </span>
              Water
            </h4>
            <p className="p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Use