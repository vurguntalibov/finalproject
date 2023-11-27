import React from 'react'

const Tooltip = ({data}) => {




  return (
    <div>
{   data?.map((item,index)=>(
    <p key={index}>
      <p>{item.content}</p>
       <p> {item.icon}</p> </p>
))

}

   <h1>sssssssss</h1>
   
    </div>
  )
}  

export default Tooltip