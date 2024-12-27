import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addcartData } from '../pages/addTocartSlice';
// import sppinergif from "./images/spinnergif.gif"
 

const Search=()=>{
    const {txtdata}= useParams();
    const [mydata, setMydata]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const dispatch= useDispatch();    

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);

        setIsLoading(true);

    }, [txtdata])

  


    const loadData=()=>{
       let api=`http://localhost:3000/product/`;
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
      const status=key.name.includes(txtdata);
      
      if (status)
      {

       return(
        <>
         <Card style={{ width: '250px', marginTop:"20px" }}>
          <Card.Img variant="top" src={key.images} />
          <Card.Body>
            <Card.Title> {key.name} </Card.Title>
            <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 
    
             {" "}  For - {key.category}
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
    }
    })
     return(
            <>
           <div id="proHeading">
            <h1> All Search  jewellary</h1>
           </div>
           
            <div id="homeProduct">     
            {ans}        
         </div>
           
            </>
        )
    }
export default Search;