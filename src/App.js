import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Navbar from './components/Navbar/Navbar'
import Coffee from "./pages/Coffee/Coffee";
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