import React, { useEffect, useState } from 'react'
import "../Css/Customers.css"
import { toBeChecked } from '@testing-library/jest-dom/matchers'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Customers = () => {
  const [open, setopen] = useState(true)
  const change = () => {
    setopen(!open)
  }

  const [infoOpen, setInfo] = useState(false)
  const infochange = () => { setInfo(!infoOpen) }


  const [customer, setCustomers] = useState([])
  useEffect(() => {
    const list = () => {
      fetch("https://api.fake-rest.refine.dev/users")
        .then(response => response.json())
        .then(data => setCustomers(data))
    }; list()
  }, [])


  ///search vermek ucun //  1ci variant .geriye silende datalar gelmirdi
  //  function handleSearch(event){
  //  const search=customer.filter(item=>{return item.firstName.toLowerCase().includes(event.target.value.toLowerCase())})
  //  setCustomers(search)
  // }
  ///search vermek ucun 2ci variant//

  const [search, setsearch] = useState('')



  //silmek ucun 1ci metod .istenilen row secib silmek olar.amma Api-den silinmeyecek.onun ucun fetch ile silmek lazimdir/// 
  function dele(each) {
    const x = customer.findIndex((item) => item.id === each);
    const conf = [...customer];
    const confirmDelete = window.confirm("Do you want to delete?");
    if (confirmDelete) {
      conf.splice(x, 1);
      setCustomers(conf);
       alert("Record has been deleted.");
    }
 
  }



  //silmek ucun 2ci metod .yalniz sehifenin 1ci row-sun silir/// 
  // function dele(index){
  //   const conf=[...customer];
  //   conf.splice(index,1);
  //   setCustomers(conf)
  //   }   


  //silmek ucun 2ci metod.alinmadi//
  // const dele=x=>{
  //   setCustomers(customer.filter(item=>item.id !== x.id))
  // }

  //Info//
  //1-ci metod.datalari rowdan goturub info sehifesine veririk.

  const [selectedRowData, setSelectedRowData] = useState("");
  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };

  //ikinci metod//
  // INfoya vermek.datalari row-dan goturmek.Yalniz birincinin icindekileri goturur.bize lazimdir ki,hansinin ustune vursaq onun icindekileri secsin//
  // const [name,setName]=useState();
  // const [surname,setSurname]=useState();
  // const [adress,setAdress]=useState();


  //     useEffect(() => {
  //   if (pageData.length>0 ) {
  //     const selectedCustomer = pageData[0]; 
  //     setName(selectedCustomer.firstName);
  //     setSurname(selectedCustomer.lastName);
  //     setAdress(selectedCustomer.email);
  //   }
  // }, [customer]);




  //Pagination//

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(7);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = customer.slice(startIndex, endIndex);

  function previous() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function next() {
    const totalPages = Math.ceil(customer.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  //Filter//

  const [checkboxes, setCheckboxes] = useState({
    All: true,
    Id: true,
    "First name": true,
    "Last name":true,
    Email: true,
    Birthday: true,
    Skills: true,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'All') {
      // If "All" is checked, set all checkboxes to the same value
      const updatedCheckboxes = {};
      for (const key in checkboxes) {
        updatedCheckboxes[key] = checked;
      }
      setCheckboxes(updatedCheckboxes);
    } else {
      // If any other checkbox is checked, update "All" checkbox if all others are checked
      setCheckboxes((prevCheckboxes) => {
        const updatedCheckboxes = { ...prevCheckboxes, [name]: checked };
        updatedCheckboxes.All = Object.values(updatedCheckboxes).slice(1).every((value) => value);
        return updatedCheckboxes;
      });
    }
  };



  return (
    <div className='Customers'>
      <div className='title'>
        {infoOpen && 
      <div className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog className='info'>
        <Modal.Header closeButton onClick={infochange}>
          <Modal.Title>List of register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <label>Id</label>
          <input type='text' className='form-control mt-3 mx-5 ' placeholder='Id' value={selectedRowData.id} />
          <label>Name</label>
          <input type='text' className='form-control mt-3 mx-5 ' placeholder='Name' value={selectedRowData.firstName} />
          <label>Surname</label>
          <input type='text' className='form-control mt-3 mx-5' placeholder='Surname' value={selectedRowData.lastName} />
          <label>Adress</label>
          <input type='text' className='form-control mt-3 mx-5' placeholder='Birthday' value={selectedRowData.birthday} />
          <label>Skills</label>
          <input type='text' className='form-control mt-3 mx-5' placeholder='Skills' value={selectedRowData.skills} />
     
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Save</Button>
          <Button onClick={infochange} variant="primary">Exit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    }

        <button onClick={change} className='form-control columns'><i class="bi bi-list-columns-reverse"></i>Columns <i className={open ? ` bi bi-arrow-down-circle` : ` bi bi-arrow-up-circle`} ></i></button>
        {!open && <div className='choose'>
          <p><input type='checkbox' name='All' checked={checkboxes.All} onChange={handleCheckboxChange} /> All </p>
          <p><input type='checkbox' name='Id' checked={checkboxes.Id} onChange={handleCheckboxChange} /> Id </p>
          <p><input type='checkbox' name='First name' checked={checkboxes["First name"]} onChange={handleCheckboxChange} /> First name </p>
          <p><input type='checkbox' name='Last name' checked={checkboxes["Last name"]} onChange={handleCheckboxChange} />Last name</p>
          <p><input type='checkbox' name='Email' checked={checkboxes.Email} onChange={handleCheckboxChange} />Email</p>
          <p><input type='checkbox' name='Birthday' checked={checkboxes.Birthday} onChange={handleCheckboxChange} />Birthday</p>
          <p><input type='checkbox' name='Skills'  checked/>Skills  </p>
        </div>}
        <input className='form-control columns' placeholder='Search' onChange={(e) => setsearch(e.target.value)} />
      </div>

      <div className='tab'>
        <table className='t'>
          <tr className='head'>
            {checkboxes.Id && <th>Id</th>}
            {checkboxes["First name"] && <th>First name</th>}
            {checkboxes["Last name"] && <th>Last name</th>}
            {checkboxes.Email && <th>Email</th>}
            {checkboxes.Birthday && <th>Birthday</th>}
            <th>Skills</th>
            <th>Info</th>
            <th>Delete</th>
          </tr>

          {pageData.filter((item) => { return search.toLowerCase() === "" ? item : item.firstName.toLowerCase().includes(search) })
            .map((item, index) => {
              return <tr className='head1' key={index} onClick={() => handleRowClick(item)}>
                {checkboxes.Id && <td>{item.id}</td>}
                {checkboxes["First name"] && <td>{item.firstName}</td>}
                {checkboxes["Last name"] && <td>{item.lastName}</td>}
                {checkboxes.Email && <td>{item.email}</td>}
                {checkboxes.Birthday && <td>{item.birthday}</td>}
               <td>{item.skills}</td>
                <td onClick={infochange}> <i class="bi bi-info-circle"></i></td>
                <td onClick={() => dele(item.id)}><input type='checkbox'  checked={customer.includes(item.id)} /></td>

              </tr>
            })}
        </table>

      </div>  <div className='paginationbar'>

        <select style={{ marginRight: "10px", color: "red", textAlign: "center", backgroundColor: "cyan" }} onChange={(e) => setitemsPerPage(parseInt(e.target.value))}>
          <option>5</option>
          <option>10 </option>
          <option>15</option>
        </select>

        <button onClick={previous}> Previous</button>
        <p>Page {currentPage}</p>
        <button onClick={next}>Next</button></div>
    </div>
  )
}

export default Customers