import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addcartData } from '../pages/addTocartSlice';


const Products=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api="http://localhost:3000/product";
   axios.get(api).then((res)=>{
    setMydata(res.data);
   })
}

useEffect(()=>{
  loadData();
}, [])


const addDataToCart=(id, name, cate, brand, price, desc, images)=>{
     dispatch(addcartData({id:id, name:name, category:cate, 
      brand:brand, price:price, description:desc,images:images, qnty:1}))
}








const ans=mydata.map((key)=>{
   return(
    <>
     <Card style={{ width: '250px', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.images} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For- {key.category}
        </h4>
        <Card.Text>
           {key.description}
        </Card.Text>
         <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
        <Button variant="primary" 
        onClick={()=>{addDataToCart(key.id, key.name, key.category, key.brand, key.price, key.description, key.images)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </>
   )
})



    return(
        <>
          <div id="topmenu">
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="home">MiniStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/shop">
                  Shop
                </Nav.Link>
                
             
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
          
       <div id="proHeading">
        <h1 align="center"> Our Premium jewellary</h1>
       </div>
       
       <div id="homeProduct" style={{ display: "flex", flexWrap: "wrap",gap:"20px", justifyContent:"space-between"}}>
        {ans}        
       </div>

        </>
    )
}

export default Products;