import { configureStore } from "@reduxjs/toolkit";


import myData from "./pages/addTocartSlice";

const store= configureStore({


    reducer:{
        addCart:myData
    }
})
export default store;