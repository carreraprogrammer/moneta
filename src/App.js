 import React from "react";
 import { Route, Routes } from 'react-router-dom';
 import Home from "./pages/Home";
 import About from "./pages/About";
 import Shop from "./pages/Shop";
import Navbar from './Components/Navbar'
import Coffee from "./pages/Coffee";
import './App.css'



 const App = () => {
    return (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Coffee' element={<Coffee />} />
          </Routes>
        </>
    )
 }

 export default App