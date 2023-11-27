import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../Css/Praduct.css"

const Praducts = () => {

  const [praduct, setPraducts] = useState([]);

  useEffect(() => {
    const list = () => {
      fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then(data => setPraducts(data))
    }; list()
  }, [])


  //Pagination//

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage,setitemsPerPage]=useState(8);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = praduct.slice(startIndex, endIndex);

  function previous() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function next() {
    const totalPages = Math.ceil(praduct.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

            //Baket fill in with IPA data when i choose anydata or raw//
  const [basket, setBasket] = useState([]);
  const addToBasket = (item) => {
    // Check if the item is already in the basket
    const existingItemIndex = basket.findIndex((x) => x.id === item.id);

    if (existingItemIndex >-1) {
      // Item already exists, update its quantity
      const updatedBasket = [...basket];
      updatedBasket.splice(existingItemIndex, 1);
      setBasket(updatedBasket);
    } else {
      // Item doesn't exist, add it to the basket
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
    
  };
        //bundan is etmedik.amma bununla da silmek olur//
  const removeFromBasket = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  };  

         //accumlate the count of chosen elements when i check//
  const basketnumeral =Math.ceil( basket.reduce((x, y) => x + y.quantity, 0));

  //Basket inner showing//
  const [open, setOpen] = useState(false)
  const basketinner = () => {
    setOpen(!open);
  }
  //calculate price//
  const totalBasketPrice = basket.reduce((total, item) => total + item.price, 0);

  //Seach//

  const [title, setTitle] = useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [rate,setRate]=useState("")
  const [count,setCount]=useState("")

  const [opensearch,setopenSearch]=useState(false)
  const showfilterbutton=()=>setopenSearch(!opensearch)



  return (
    <div className='Praduct'> <FontAwesomeIcon icon="fa-light fa-magnifying-glass" />
      <h1 style={{ textAlign: 'left', margin: "20px 0 20px 40px" }}><b>Top Praducts</b></h1>

      <div className='countlist'>
       {open && <table className='tablewidth'>
          <tr style={{ fontWeight: "bold", fontSize: "17px" }}>
            <td>Photo</td>
            <td>Title</td>
            <td>Price</td>


          </tr>
          {basket.map((itembasket, indexbasket) => {
              return <tr key={indexbasket}>
              <td> <img style={{ height: "50px", width: "50px" }} src={itembasket.image}></img></td>  
              <td> {itembasket.title.length>0 ? itembasket.title.slice(0,20):itembasket.title } </td>
              <td> {itembasket.price} </td>
            </tr>
          })}  
                        {/* Qaliq iki eded olsun.bunu etmeyende qaliq noqteden sonra 6-reqem gedir.bu ixtisar etmek ucundur */}
          <td colspan="3" style={{ backgroundColor: "yellow", fontWeight: "bold", fontSize: "20px" }}>Total count:{totalBasketPrice.toFixed(2)}</td>   
        </table>}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-around",alignItems:"center"}}> 
        <input className='form-control  ' onClick={showfilterbutton}   placeholder='Searching by title... ' onChange={(e) => setTitle(e.target.value)}/>
        <i class="bi bi-info-circle"></i></div> <FontAwesomeIcon icon="fa-light fa-magnifying-glass" />
        <div style={{ display: "flex", justifyContent: "end" }}> <i class="bi bi-cart4" onClick={basketinner} style={{ fontSize: "40px"}} > </i>
          <h5 style={{ color: "red" }}>{basketnumeral}</h5></div>
      </div>
       { opensearch && <div style={{display:'grid',gridTemplateColumns:"auto auto auto auto",gap:"10px"}}>
        <input type='text' className='form-control' onChange={(e)=>setCategory(e.target.value)} placeholder='Search by category...'/>
        <input type='text' className='form-control' onChange={(e)=>setPrice(e.target.value)} placeholder='Search by price...'/>
        <input type='text' className='form-control' onChange={(e)=>setRate(e.target.value)} placeholder='Search by rate...'/>
        <input type='text' className='form-control' onChange={(e)=>setCount(e.target.value)} placeholder='Search by count...'/>
       </div>
        }

      <div>
        <div className='list'>
          <table className='listname'>
            <tr className='head'>
              <th >Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Check</th>

            </tr>
            {/* 1-ci forma filtere vermek
{pageData.filter((item) => {
    return search.toLowerCase() === "" || (item.title && item.title.toLowerCase().includes(search.toLowerCase()))
})} */}

            {/* 2-ci forma filtere vermek.bu zaman searchin icinde hamisin axtarmaq olur.category,price,rate,count hamisin eyni zamanda */}
     {/* /* pageData.filter((item) => { return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search) ||
    item.price.toString().toLowerCase().includes(search) || 
    item.rating["rate"].toString().toLowerCase().includes(search) ||
    item.rating["count"].toString().toLowerCase().includes(search) })
    .map */}

                         {/* bu zaman her birine ayri ayri inputlarla axtaris veririk */}

            {pageData.filter((item) => { return(
            (title.toLowerCase() === "" ? item : item.title.toLowerCase().includes(title)) &&
            (category.toLowerCase() === "" ? item : item.category.toLowerCase().includes(category))  &&
            (price.toLowerCase() === "" ? item : item.price.toString().toLowerCase().includes(price)) &&
            (rate.toLowerCase()==="" ? item : item.rating["rate"].toString().toLowerCase().includes(rate)) &&
            (count.toLowerCase()==="" ? item : item.rating["count"].toString().toLowerCase().includes(count)))
          }).map((item, index) => {
                return <tr className='head1' key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td> <img src={item.image} /> </td>
                  <td>
                    <div>{item.rating["rate"]} r</div>
                    <div>{item.rating["count"]} c </div>
                  </td>
                  <td> <input type='checkbox' onClick={() => addToBasket(item) } /></td>
                </tr>
              })}
          </table>

        </div>
      </div>
      <div className='paginationpraduct'>
      <select style={{marginRight:"10px",color:"red",textAlign:"center",backgroundColor:"cyan"}} onChange={(e)=>setitemsPerPage(parseInt(e.target.value))}>
          <option>5</option>
          <option>10 </option>
          <option>15</option>
        </select>
     
        <button onClick={previous}>Previous</button>
        <p>Page {currentPage}</p>
        <button onClick={next}>Next</button></div>
    </div>
  )
}

export default Praducts