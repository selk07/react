import React from 'react';
import './App.css';
import H2 from './style/styled';
import {BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import Ivan from './pages/Ivan'
import Petro from './pages/Petro'

function App() {
    return (
      <>
        <BrowserRouter>
          <ul className='navigation'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="contact/ivan">Contact</NavLink></li>
          </ul>
       
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contacts />}>
              <Route path="ivan" element={<Ivan />} />
              <Route path="petro" element={<Petro />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
    }

    function Contacts() {
      return <H2>Список користувачів <Outlet/> </H2>;
  }

export default App;