import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'


const SingleEmp = () => {
    let [emp,setEmp]=useState("")

    let { id }= useParams()

    let getApi = async () => {
        let {data} = await axios.get("http://localhost:5000/employee" + id);
        setEmp(data)
    }

    useEffect(() => {
    getApi();
    }, [])

    console.log(emp);


  return (
    <>
      <NavBar/>
      <section>
          <h1>Id: {emp.id}</h1>
          <h1>Name: {emp.name}</h1>
          <h1>Email: {emp.email}</h1>
      </section>
    </>
  )
}

export default SingleEmp
