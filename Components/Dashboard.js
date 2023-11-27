import React, { useState } from 'react'
import "../Css/Dashboard.css"
import ApexChart from './Apexchart'

const Dashboard = () => {

  const dashboard=[
    {
      icon1: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"/></svg>,
      count1: "1,995",
      title1: "Total sales",

      icon2: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"/><path fill="currentColor" d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"/></svg>,
      count2: "2,001",
      title2: "Daily visits",

      icon3: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"/><path fill="currentColor" d="M12 11c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3z"/></svg>,
      count3: "$2,632",
      title3: "Total income",

      icon4: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z"/><path fill="currentColor" d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"/></svg>,
      count4: "1,711",
      title4: "Total orders",
     
    }
  ]

  return (
    <div>
     
   
 <p className='tittle'>Dashboard</p>
    { 
    dashboard.map((item,index)=>(
       <div className='dash' key={index}>
       <div className='boxes' >
        <div className='box'>
        {item.icon1} 
        <div><h1> {item.count1} </h1>
        <p> {item.title1} </p>  </div> </div>


        <div className='box'>
        {item.icon2} 
        <div><h1> {item.count2} </h1>
        <p> {item.title2} </p>  </div> </div>   

        <div className='box'>
        {item.icon3} 
        <div><h1> {item.count3} </h1>
        <p> {item.title3} </p> </div> </div>



        <div className='box'>
        {item.icon4} 
        <div><h1> {item.count4} </h1>
        <p> {item.title4} </p>  </div> </div>

       </div>  
        <div className='apex'> <ApexChart/> </div>
         </div>
    ))

    }
   

    </div>
  )
}

export default Dashboard