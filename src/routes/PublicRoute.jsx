import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import NavigationPage from "../pages/NavigationPage";
import RegisterCountry from "../pages/RegisterCountry.jsx";


const PublicRoute = () => {
  return (
    <BrowserRouter>
       <NavigationPage/>
       <Routes>
           <Route path='/' element= { <HomePage/>} /> 
           <Route path='/register' element= { <RegisterCountry/> }/>
       </Routes>
  </BrowserRouter>
  )
}

export default PublicRoute