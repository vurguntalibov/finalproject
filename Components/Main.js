import React, { useContext } from 'react'
import "../Css/Main.css"
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Customers from './Customers'
import Praducts from './Praducts'
import Statistics from './Statistics'
import { Route, Routes } from 'react-router-dom'

const Main = () => {

  return (
    <div className='Main'>
      
        <Navbar/>
        <Routes>
        <Route path="/dashboard"  element={<Dashboard/>} /> 
        <Route path="/customers"  element={<Customers/>} /> 
        <Route path="/praducts"  element={<Praducts/>} />  
        <Route path="/statistics"  element={<Statistics/>} />  </Routes>
    </div>
  )
}

export default Main