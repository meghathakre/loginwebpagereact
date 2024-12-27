import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addcartData } from '../pages/addTocartSlice';

const Shop=()=>{
const [catData, setCatData]= useState("");
const [priceData, setPriceData]=useState("");
const [displayState, setDisplayState]= useState(true)


const [mydata, setMydata]=useState([]);

const [pricemydata, setPriceMydata]=useState([]);

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
})



 const ans1=pricemydata.map((key)=>{
    
  if (priceData==2000)
  {
      if (key.price>0 && key.price<2001 )
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
    }

    if (priceData==4000)
      {
          if (key.price>2000 && key.price<4001 )
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
        }


        if (priceData==5000)
          {
              if (key.price>4000 && key.price<5001 )
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
            }
    
            if (priceData==6000)
              {
                  if (key.price>5000)
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
                }
  }
)

      



const handleSubCategory=()=>{
    let api=`http://localhost:3000/product/?category=${catData}`;
    axios.get(api).then((res)=>{
     setMydata(res.data);
    })
    setDisplayState(true);
}

const handleSubPrice=()=>
{
  let api="http://localhost:3000/product";
  axios.get(api).then((res)=>{
    setPriceMydata(res.data);
  })
  setDisplayState(false);
}
console.log(pricemydata);

    return(
        <>
          <div id="shoppage">
            <div style={{width:"350px", paddingLeft:"20px",paddingTop:"20px", fontSize:"11px", fontWeight:"bold"}}>       
             <h5> Search By Category</h5> 
              <br/>
              <input type="radio" value="rings" name="cat" onChange={(e)=>{setCatData(e.target.value)}} />Rings
              <br/>
              <input type="radio" value="bengles" name="cat"  onChange={(e)=>{setCatData(e.target.value)}} /> Bengles
              <br/>
              <input type="radio" value="earings" name="cat"  onChange={(e)=>{setCatData(e.target.value)}} /> Earings
             <br/>
             <Button size="sm" onClick={handleSubCategory}>Search</Button>
             <br/> <br/>
             <h5> Search By Price</h5> 
             
             <input type="radio" value="2000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}}/> Rs 2000 & below
             <br/>
             <input type="radio" value="4000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 2000 - 4000
             <br/>
             <input type="radio" value="5000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 4000 - 5000
             <br/>
             <input type="radio" value="6000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 5000 & above
             <br/>
             
             <Button size="sm" onClick={handleSubPrice}>Search</Button>


            </div>
            <div>  







            <div id="proHeading">
        <h1> Our Premium jewellary</h1>
       </div>
       
       <div id="homeProduct">
           
            {displayState?ans:ans1}
                 
       </div>










            </div>
          </div>
        </>
    )
}

export default Shop;