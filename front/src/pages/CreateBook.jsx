import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'


export default function CreateBook() {

 const [title,setTitle]=useState('')
 const [author,setAuthor]=useState('')
 const [year,setYear]=useState('')
 const navigate = useNavigate()
 const {enqueueSnackbar}=useSnackbar()
 

 const handlesavebook=()=>{
 const data={
  title,
  author
  ,year
 }

 axios
 .post('http://localhost:5555/book/add',data)
 .then((res)=>{
  enqueueSnackbar('book created succesfully ', {variant:'success'})
      navigate('/')
 })
 .catch((error)=>{

  alert("an error happened,enter all fields")
  enqueueSnackbar('book not created',{variant:'error'})
  console.log("error")
 })

 }


  return (
    <div className='bg-linear-to-t from-[#0a0a0a] to-[#015888] h-screen flex justify-center items-center'>
           
      <div className=' w-130 h-110 rounded-xl bg-white/40 backdrop-blur-3xl '>

         <h1 className='m-5 text-2xl  text-white text-center font-bold shadow-2xl'> ADD NEW BOOK</h1>
       <div className='w-full'>

        <input type="text" 
        placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className=' py-4 w-[90%]   mx-6 mt-10 px-10  rounded-2xl border-none outline-none font-sans bg-amber-50'
        />

        <input type="text" 
        placeholder='Author'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        className=' py-4 w-[90%]   mx-6 mt-5 px-10  rounded-2xl border-none outline-none font-sans bg-amber-50'
        />

        <input type="number" 
        placeholder='Year'
        value={year}
        onChange={(e)=>setYear(e.target.value)}
        className=' py-4 w-[90%]   mx-6  mt-5 px-10  rounded-2xl border-none outline-none font-sans bg-amber-50'
        />

        <button 
        onClick={handlesavebook}
        className='py-4 w-[90%] hover:bg-linear-to-b  from-blue-300 to-cyan-400 hover:duration-700
         hover:transition hover:-translate-y-1 text-md font-semibold mx-6  mt-10 cursor-pointer px-10  rounded-full
          border-none outline-none font-sans bg-amber-50'>
        ADD
        </button>

       </div>

      </div>


    </div>
  )
}
