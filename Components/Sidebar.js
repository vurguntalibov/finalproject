import React, { useState } from 'react'
import "../Css/Sidebar.css"
import senior from '../Fotos/seniorlogohr.svg'
import dashboard from "../Fotos/dashboard.png"
import customers from "../Fotos/customer.png"
import praducts from "../Fotos/praducts.png"
import statistics from "../Fotos/statistics.png"
import { Routes, Route, Link } from 'react-router-dom'


const Sidebar = () => {
  const [open, setopen] = useState(true)

  const toggle = () => {
    setopen(!open);
    if (open === true) { document.body.classList.add("active") }
    else { document.body.classList.remove("active") }
  }

  return (

    <div className='Sidebar'>
      <div className='senioraz'>
        <img src={senior} style={{ height: "100%", width: "70%", }}></img>
        <i 
            onClick={toggle}
            className={
              open ? `${open} bi bi-list-nested` : ` ${open} bi bi-list`
            }
          ></i>



      </div>

      <Link to="/Dashboard"><div className='set' > 
      <img src={dashboard} />
        <p className='dash'>Dashboard</p>
      </div></Link>

     <Link to="/Customers">  <div className='set'> 
        <img src={customers} />
        <p>Customers</p>
      </div> </Link>

     <Link to="/Praducts">  <div className='set'>
        <img src={praducts} />
        <p>Praducts</p>
      </div></Link>

     <Link to="/Statistics"> <div className='set'> 
        <img src={statistics} />
        <p>Statistics</p>
      </div></Link>



    </div>

  )
}

export default Sidebar