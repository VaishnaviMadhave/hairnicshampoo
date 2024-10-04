import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header()
{
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/cart").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCart(res2)
      })
    })
  },[])


    return(
        <>
        <Container fluid>
        <div className=" fs-5">
         <Navbar data-bs-theme="dark"  className="p-3 bgimg">
        <Container >
          <Navbar.Brand href="#Home"  className="fs-3">Hairnic</Navbar.Brand>
          <Nav className="">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Shampoo">Products</Link>
            <Link className="dropdown-toggle">Pages</Link>
           <NavDropdown title="pages" id="basic-nav-dropdown">
                  <Link to="/Features" className="bg-white dropdown-item">Features</Link>
                  <Link to="/Htuse" className="bg-white dropdown-item">How to use</Link>
                  <Link to="/Testimonial" className="bg-white dropdown-item">Testimonal</Link>
                  <Link to="/Articles" className="bg-white dropdown-item">Blog Articles</Link>
                  <Link to="/Notfound" className="bg-white dropdown-item">404 page</Link>
            </NavDropdown>
            <Link to="/Contact">Contact</Link>
            <Button variant="dark">Shop Now</Button>
            <Link to="/Cart"><i className="fa-solid fa-cart-shopping ms-3" ></i> <sup>{cart.length}</sup> </Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      </Container>
        </>
    )
}
export default Header;