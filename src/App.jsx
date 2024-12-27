import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";


import Login from "./pages/Login";
import Search from "./pages/Search";
import MyCart from "./pages/MyCart";
import Products from "./pages/Products";

import Shop from "./pages/Shop";
import CheckOut from "./pages/CheckOut";



const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route index element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="Products" element={<Products/>}/>
         <Route path="searchproduct/:txtdata" element={<Search/>}/>
         <Route path="mycart" element={<MyCart/>}/>
         <Route path="shop" element={<Shop/>}/>
         <Route path="checkout" element={<CheckOut/>}/>
        
         
        
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;