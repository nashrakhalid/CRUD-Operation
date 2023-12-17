import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'


const ViewAll = () => {
  let [emp,setEmp]=useState([])

  let getApi = async () => {
//!useEffect is best place to fetch the api or to get the data  from the server

     let {data} = await axios.get("http://localhost:5000/employee");
     setEmp(data)
  }
  useEffect(() => {
    getApi()
  },[])

  console.log(emp); 
  return (
    <>
      <NavBar/>
      <h1 className='tableHeading'>All the Employees Details</h1>
      <table className='tableContainer'>
        <thead>
          
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th colSpan={3}>OPTIONS</th>
            </tr>
          
        </thead>
        <tbody>
          {emp.map((x) => {
             return (
               <tr key={x.id}>
                 <td>{x.id}</td>
                 <td>{x.name}</td>
                 <td>{x.email}</td>
                 <td>
                  <NavLink to={`/viewsingle/${x.id}`}>
                    <button>View More</button>
                    </NavLink>
                    </td>
                 <td>
                  <button>Update</button>
                 </td>
                 
                 <td>
                  <button>Delete</button>
                 </td>
               </tr>
             );
          })}
        </tbody>
      </table>
    </>
  )
}

export default ViewAll
