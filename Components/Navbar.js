import React, { useState } from 'react'
import "../Css/Navbar.css"
import tyson from "../Fotos/tyson.jpeg"
import language from "../Fotos/language.png"
import bell from "../Fotos/bell.png"
import halfmoon from "../Fotos/half moon.png"
import profil from "../Fotos/profil.png"
import statistic from "../Fotos/statistics.png"
import setting from "../Fotos/setting.png"
import logout from "../Fotos/log out.png"
import first from "../Fotos/first.png"
import second from "../Fotos/second.png"
import third from "../Fotos/third.png"
import fourth from "../Fotos/fourth.png"
import fifth from "../Fotos/fifth.png"
import en from "../Fotos/eng.png"
import aze from "../Fotos/azeri.png"
import tur from "../Fotos/turkey.png"
import Darkmode from './Darkmode'
import  Tooltip  from './Tooltip'
import  notfic from "../Data/notification.json"
import  users from "../Data/user_menus.json"
import status from "../Data/status-card-data.json"
import { useTranslation } from 'react-i18next'
import i18n from 'i18next';

const Navbar = () => {
   const [open,setopen]=useState(false)
    const change=()=>{
      setopen(!open)
    }
       


    const [openlan,setopenlan]=useState(false)
    const changelan=()=>{
      setopenlan(!openlan)
    }


    const [openbell,setopenbell]=useState(false)
    const changebell=()=>{
      setopenbell(!openbell)
    }

    const [opentoggle,setopentoggle]=useState(false)
    const changetog=()=>{
      setopentoggle(!opentoggle)
      
    }
  

    const lists=[
      {name:"Profile",
       surname:"My Wallet",
       setting:"Settings",
       logout:"Log out",
       en:"English",
       tur:"Turkey",
       aze:"Azerbaijan",
       first:"We offer these FREE Christian Books in ePub and PDF",
       second:"You can download these books",
       third:"So He took away all the sins of the world through  ",
       fourth:"We can be born again only by believing",
       fifth:"If You Have Confusion and Emptiness",
      }
     
    ]


  
  
  return (
    <div className='Navbar'> 
      <div className='Nav1'>
      <img className='tyson' src={tyson}></img>
      <p onClick={change}><b>Myke Tyson</b>
       { open && <div className='dropdown1'>  
        
         <p>{users.icon}</p>
         <p> </p>
         </div>}
      
      </p></div>


      <div className='Nav2'>
      <div onClick={changelan}> <img   src={language}></img>
       <div className='dropdown2'>
      

      { openlan  && lists.map((item,index)=>(
            <div key={index}>
              <p> <img src={en} ></img>{item.en} </p>
              <p> <img src={aze} ></img>{item.aze}</p>
              <p> <img src={tur} ></img>{item.tur}</p>
            </div>
         ))

      }

      </div></div>
       
       <div onClick={changebell}> <img src={bell}></img>
       <div onClick={changebell} className='dropdown3'>
      { openbell  && lists.map((item,index)=>(
            <div key={index}>
              <p> <img src={first} ></img>{item.first} </p>
              <p> <img src={second} ></img>{item.second}</p>
              <p> <img src={third} ></img>{item.third}</p>
              <p> <img src={fourth} ></img>{item.fourth}</p>
              <p> <img src={fifth} ></img>{item.fifth}</p>
              <button className='view' >View all</button>
              
        

            </div>
         ))

      }

      </div></div>

      <Darkmode opentoggle={opentoggle}
              setopentoggle={setopentoggle}
              lists={lists}
              changetog={changetog}
             />

       
       <div onClick={changetog}><img  src={halfmoon}></img>
                   <Darkmode/>

       
       </div>
      </div>
   


       {/* <Tooltip data={users}/>
       <Tooltip data={status}/>
       <Tooltip data={notfic}/> */}


    </div>
  )
}

export default Navbar