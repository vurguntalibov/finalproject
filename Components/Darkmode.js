import React, { useEffect, useState } from 'react'
import "../Css/Darkmode.css"
import close from  "../Fotos/close.png"
import brush from  "../Fotos/brush.png"
import { json } from 'react-router-dom'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

const Darkmode = ({opentoggle,setopentoggle,lists,changetog}) => {


       //  bu da bir variantdir.amma islemedi.yeni localstorageye vermedi//

  //  const store=localStorage.getItem("list15")
  // const[mode,setmode]=useState(store || true)   

  // const changemode=()=>{
  //  const form = mode=== true  ? document.body.classList.add ("dark") : document.body.classList.remove("dark");
  //   setmode(form);
  //  localStorage.setItem("list15",form )
  // }
 
  
  // useEffect(() => {
  //   document.body.className = `mode${mode}`;
  // }, [mode]);




    //2-ci metod///

  //  useEffect(()=>{
  //   mode===true  ? document.body.classList.add ("dark") : document.body.classList.remove("dark");
  //    const form=mode;
  //    localStorage.setItem("list10",(form ));
    
  //   },[mode])




  // useEffect(()=>{
  // const stored=localStorage.getItem("list15");
  //  console.log(stored)
  //  if(stored)
  //  { setmode(true)}
  //  else{
  //    setmode(false)}
  // },[]) ;






         //Mezahir's write
  //  const[theme,setTheme]=useState(localStorage.getItem("list15") ) 
  //  const changeTHEME=(test)=>{
  //   localStorage.setItem(("list15"),(test))
  //  }
  //  console.log(localStorage.getItem("list10"))
  //  useEffect(()=>{
  //  if(theme){
  //   document.body.classList.add("light")
  //   document.body.classList.remove("dark")
  //   localStorage.setItem(("list15"),(true))
  //  }
  //  else{
  //   document.body.classList.add("dark")
  //   document.body.classList.remove("light")
  //   localStorage.setItem(("list10"),(false))
  //  }
  //  },[theme])



  // const[mode,setmode]=useState(true)

  // const changemode=()=>{
  //  setmode(!mode)
  //  const x = mode === true;
  //  if (x) {
  //    document.body.classList.add("dark");
  //  } else {
  //    document.body.classList.remove("dark");
  //  }
  //  localStorage.setItem("list15", x);
  //  console.log(x);}

  //   useEffect(()=>{
  // const stored=localStorage.getItem("list15");
  //  if(stored)
  //  { setmode(true)}
  //  else{
  //    setmode(false)}
  // },[]) ;


  const storedMode = localStorage.getItem("list15");
  const [mode, setmode] = useState(storedMode==="true" ?true:false); 
  const[open,setopen]=useState(true);

  useEffect(() => { 
    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  const changemode = () => {
    const newMode = !mode;
    setmode(newMode);
    localStorage.setItem("list15", newMode); 
  };

  const changemodewhite=()=>{
       setopen(!open)
    document.body.classList.remove("dark")
  }

   const changeblue=()=>{
    setopen(!open)
    open ===true  ? document.body.classList.add ("blue") : document.body.classList.remove("blue")
   }

   const changered=()=>{
    setopen(!open)
    open ===true  ? document.body.classList.add ("red") : document.body.classList.remove("red")

   }

   const changecyan=()=>{
    setopen(!open)
    open ===true  ? document.body.classList.add ("cyan") : document.body.classList.remove("cyan")

   }
   const changegreen=()=>{
    setopen(!open)
    open ===true  ? document.body.classList.add ("green") : document.body.classList.remove("green")

   }
   const changeorange=()=>{
    setopen(!open)
    open ===true  ? document.body.classList.add ("orange") : document.body.classList.remove("orange")
   }

  return (
   <div>
   {  opentoggle && lists.map((item,index)=>(
    <div onMouseLeave={changetog} className='mode' key={index}>
      <p className='theme'>Theme Settings <img onClick={changetog} src={close} style={{height:"30px",width:"30px",border:"1px solid"}} ></img> </p>
      <p style={{textAlign:"start"}}>Choose Mode </p>
     <div onClick={changemodewhite} className='form-control d-flex justify-content-between align-items-center mb-2 px-3 text-secondary'> <div className='circle'> </div> Light </div>
     <div onClick={changemode} className='form-control d-flex justify-content-between align-items-center mb-2 px-3'> <div className='circle1'> </div> Dark  </div>
     <p style={{textAlign:"start",marginTop:"30px"}}>Choose color </p>
     <div onClick={changeblue} className='blueb' > <img src={brush}/> <p>Blue</p> </div>
     <div onClick={changered} className='redb' > <img src={brush}/> <p>Red</p> </div>
     <div onClick={changecyan} className='cyanb' > <img src={brush}/> <p>Cyan</p> </div>
     <div onClick={changegreen} className='greenb' > <img src={brush}/> <p>Green</p> </div>
     <div onClick={changeorange} className='orangeb' > <img src={brush}/> <p>Orange</p> </div>
      
      
       </div>
   ))

   }

   </div>
  )
}

export default Darkmode