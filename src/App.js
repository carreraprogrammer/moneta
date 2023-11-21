import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.scss';

// Lazy loading de las páginas
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Shop = React.lazy(() => import("./pages/Shop/Shop"));
const Coffee = React.lazy(() => import("./pages/Coffee/Coffee"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </React.Suspense>
  );
}

export default App;
