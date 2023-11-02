import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';

const Rout = () => { // Fix the function definition syntax
  return (
    <>
      <Routes>
        <Route path='/' element={<Contact />} />
      </Routes>
    </>
  );
};

export default Rout;
