import React from 'react'


import Home from './component/home/Home';
import Course from './component/Course';
import { Route, Routes } from  "react-router-dom"





function App() {
  return (
    <>
    <div>
      
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/course' element={ <Course/>}/>
      </Routes>
      
    </div>
    </>
  );
};

export default App
