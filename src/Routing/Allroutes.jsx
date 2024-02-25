import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Loginsignup from '../Pages/signup';
import Login from '../Pages/Login';
import AboutUs from '../Pages/AboutUs';
import Men from '../Pages/Men';
const Allroutes = () => {



    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Loginsignup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/men" element={<Men />} />
      </Routes>
  );
};

export default Allroutes;