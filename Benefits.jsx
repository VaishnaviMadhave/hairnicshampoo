import React from 'react'
import { Container,Row , Col } from "react-bootstrap";

function Benefits() {
  return (
    <div className="text-center mt-5">
        <Container fluid>
            <h1 className="fw-light">Best Benefits of Our <span className="fw-bold " style={{color:"#90bc79"}}> Natural</span></h1>
            <h2 style={{color:"#90bc79"}} className="fw-bold">Hair Shampoo</h2>
            <p className="fs-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p>malesuada consequat, nibh erat tempus risus.</p></p>

            <Row className="mt-4">
                <Col>
                {/*natural*/ }
                <div className="d-flex align-items-center p-2 justify-content-evenly">
                     <div className="h-25 w-25 rounded-circle p-4 fs-1 border" style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                     <div className="ps-3 text-start">
                        <h4>Natural & Organic</h4>
                        <hr width="40% " className="border-4" style={{color:"#90bc79"}}/>
                        <p className="">Lorem ipsum dolor sit amet<br/>adipiscing elit aliquet.</p>
                        
                     </div>
                </div>
                {/**anti hair */}
                <div className="d-flex align-items-center p-2 justify-content-evenly">
                     <div className="h-25 w-25 rounded-circle p-4 fs-1 border" style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                     <div className="ps-3 text-start">
                        <h4>Anti Hair Fall</h4>
                        <hr width="40% " className="border-4" style={{color:"#90bc79"}}/>
                        <p className="">Lorem ipsum dolor sit amet<br/>adipiscing elit aliquet.</p>
                        
                     </div>
                </div>
                {/**anti dandruff */}
                <div className="d-flex align-items-center p-2 justify-content-evenly">
                     <div className="h-25 w-25 rounded-circle p-4 fs-1 border" style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                     <div className="ps-3 text-start">
                        <h4> Anti-dandruff</h4>
                        <hr width="40% " className="border-4" style={{color:"#90bc79"}}/>
                        <p className="">Lorem ipsum dolor sit amet<br/>adipiscing elit aliquet.</p>
                        
                     </div>
                </div>
                </Col>
                <Col>
                <img src="./img/shampoo.png " className="img-fluid mx-auto d-block w-100 image" />
                </Col>
                <Col>
                {/*No Internal Side Effect*/ }
                <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-4 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom  border-3 pb-2 '>No Inter</span>nal Side Effect</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No skin irritation */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-4 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Skin</span> Irritation </h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>
            {/* No Artificial smell */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-4 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>                   
                    <h4><span className='border-bottom border-3 pb-2'>No Artif</span>icial Smell</h4>                  
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing <br/>elit aliquet.</p>                  
                </div>
            </div>             
                </Col>
           </Row>
            </Container>
    </div>
  )
}

export default Benefits