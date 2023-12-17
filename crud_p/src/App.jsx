import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddEmp from './AddEmp'
import Home from './Home'
import Layout from './Layout'
import ViewAll from './ViewAll'
import SingleEmp from './SingleEmp'


const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path='/' element= {<Home/>} >
              <Route index element = {<Layout/>}/>
                <Route path = '/addemp' element = {<AddEmp/>}/>
                <Route path = '/viewall' element = {<ViewAll/>}/>
                <Route path='viewsingle/:id' element={<SingleEmp/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
