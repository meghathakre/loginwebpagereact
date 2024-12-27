import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { message } from "antd";
import axios from "axios";
import { addcartData } from "../pages/addTocartSlice";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const [searchData, setSearchData] = useState("");
  const MyData = useSelector((state) => state.addCart.cart);
  const DataCount = MyData.length;
  const dispatch = useDispatch();
  const mynav = useNavigate();

  // Load data from API
  const loadData = async () => {
    const api = "http://localhost:3000/product";
    try {
      const res = await axios.get(api);
      setMydata(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Add product to cart
  const addDatatocart = (id, name, category, brand, price, description, images) => {
    dispatch(
      addcartData({
        id,
        name,
        category,
        brand,
        price,
        description,
        images,
        qnty: 1,
      })
    );
    message.success("Product added to cart!");
  };

  // Logout functionality
  const logout = () => {
    localStorage.clear();
    mynav("/");
    message.error("You have successfully logged out!");
  };

  // Navigate to cart
  const myCart = () => {
    mynav("/mycart");
  };

  // Handle search functionality
  const handleSearch = () => {
    if (searchData.trim()) {
      mynav(`/searchproduct/${searchData}`);
    } else {
      message.warning("Please enter a search term.");
    }
  };

  // Render product cards
  const productCards = mydata.map((product) => (
    <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.images} alt="Product" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <h4 style={{ color: "blue", fontSize: "14px" }}>
          Brand: {product.brand} | For: {product.category}
        </h4>
        <Card.Text>{product.description}</Card.Text>
        <h4 style={{ color: "red", fontSize: "16px" }}>Price: ${product.price}</h4>
        <Button
          variant="primary"
          onClick={() =>
            addDatatocart(
              product.id,
              product.name,
              product.category,
              product.brand,
              product.price,
              product.description,
              product.images
            )
          }
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
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
              <Nav>
                <Nav.Link>
                  <input
                    type="text"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    placeholder="Search Products"
                  />
                </Nav.Link>
                <Nav.Link>
                  <FaSearch onClick={handleSearch} />
                </Nav.Link>
                <Nav.Link>
                  <FaUser />
                </Nav.Link>
                <Nav.Link>
                  <a href="#" onClick={myCart}>
                    <FaShoppingCart />
                  </a>
                  {DataCount > 0 && (
                    <span
                      style={{
                      
                        borderRadius: "50%",
                        marginLeft: "1px",
                        border: "1px solid grey",
                        backgroundColor: "lightblue",
                      }}
                    >
                      {DataCount}
                    </span>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    
      <h1 align="center">welcome to home page</h1>
      <div id="proheading">
        
        <h3 align="center">Our Premium Products</h3>
      </div>
      <div id="homeproduct" style={{ display: "flex", flexWrap: "wrap" }}>
        {productCards}
      </div>
      <Button variant="danger" onClick={logout} style={{ marginTop: "20px" }}>
        Logout
      </Button>
    </>
  );
};

export default Home;
