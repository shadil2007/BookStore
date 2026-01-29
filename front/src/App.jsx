import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Showbook from './pages/Showbook'
import CreateBook from './pages/CreateBook'





export default function App() {



  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>,
        <Route path='/book/create' element={<CreateBook/>}/>,
        <Route path='/book/details/:id' element={<Showbook/>}/>,
        <Route path='/book/edit/:id' element={<EditBook/>}/>,
        <Route path='/book/delete/:id' element={<DeleteBook/>}/>

      </Routes>

    </div>
  )
}
