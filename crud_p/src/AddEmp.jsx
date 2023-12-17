import React,{useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddEmp = () => {
  let [emp,setEmp]=useState({
    name: "",
    email:"",
    password:""
  });


  let naviage =useNavigate()
  
  let {name,email,password} = emp; 

  let handlechange = (e) => {
    //console.log(e);
    let { name, value } = e.target;
    setEmp({...emp,[name]:value});
    }

  console.log(emp);

  let handleSubmit = (e) => 
  {
    if (name==="" && email==="" && password==="")
    {
      alert("Fill all fields")
    }
    else
    {
    e.preventDefault();
    console.log(emp);
    try {
    let payload = {
      name,
      email,
      password,
   };
    axios.post("http://localhost:5000/employee",payload);
    naviage("/viewall");
  } catch (e) {
    console.log(e);
  }
  finally {
      setEmp({
        name: "",
        email: "",
        password: ""
      });
  }

}
  }
  return (
    <>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" 
          placeholder='Enter Your name' 
          value = {name} 
          name= 'name' 
          onChange={handlechange}/>
        </div>
      <div>
          <input type='email' 
          placeholder='Enter Your Email' 
          value={email} 
          name = 'email' 
          onChange={handlechange}/>
      </div>
      <div>
          <input type='password' 
          placeholder='Enter Your Password' 
          value={password} 
          name= 'password' 
          onChange={handlechange} />   
          </div>
      <div>
          <button>Add Employee</button>
      </div>
      </form>
    </>
  )
}

export default AddEmp
