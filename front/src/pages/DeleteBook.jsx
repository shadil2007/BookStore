import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const {enqueueSnackbar}=useSnackbar()

  const handleDelete = () => {
    axios.delete("https://bookstore-a7qg.onrender.com")
      .then(() => {
        enqueueSnackbar('book deleted succesfully',{variant:'success'})
        navigate('/');
      })
      .catch((error) => {
        alert("An error occurred");
        console.log(error);
      });
  };

  // Fetch the book details
  useEffect(() => {
    axios.get("https://bookstore-a7qg.onrender.com")
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='flex justify-center items-center p-4 bg-linear-to-t from-[#0a0a0a] to-[#015888] h-screen'>
      <div className='h-90 w-160 backdrop-blur-lg bg-white/40 rounded-xl'>
        
        <h1 className='font-bold text-center text-white p-4 text-lg'>
          Are You Sure You Want To Delete This Book?
        </h1>

        {/* Book details */}
        <div className='p-4 text-white'>
          
            <div className='h-50 flex justify-evenly items-center text-xl  gap-x-2 '>
              <h1 >Title: <span className='font-semibold text-yellow-300'> {book.title}</span></h1>
              <h1 >Author: <span  className='font-semibold text-yellow-300'>{book.author}</span></h1>
              <h1 >Publish Year: <span  className='font-semibold text-yellow-300'>{book.year}</span></h1>
            </div>

        </div>

        <button
          className='w-[90%] mx-auto px-7 bottom-10 absolute py-3 ml-9 bg-red-500 text-white text-lg outline-none font-bold rounded-2xl'
          onClick={handleDelete}
        >
          Yes, Delete It.
        </button>

      </div>
    </div>
  )
}






















// import React from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'




// export default function DeleteBook() {

// const {id}=useParams();
// const navigate =useNavigate()
// const [book,setBook]=useState([])

// const handledelete=()=>{


//    axios.delete(`http://localhost:5555/book/delete/${id}`)
//    .then(()=>{
//      navigate('/')
//    })
//    .catch((error)=>{
//     alert("an error occured")
//     console.log(error)
//    })




// }

// useEffect(()=>{
//   axios.get(`http://localhost:5555/book/list/${id}`)
//   .then((res)=>{
//     setBook(res.data)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// },[])

//   return (
//     <div className='flex justify-center items-center p-4 bg-linear-to-t from-[#0a0a0a] to-[#015888] h-screen'>

//       <div className='h-120 w-160 backdrop-blur-lg bg-white/40 rounded-xl'>

//          <h1 className=' font-bold text-center text-white p-4 text-lg'>Are You Sure You Want To Delete This Book?</h1>


//          <div>
//           {book.map((book,index)=>(
//             <div>

//               <h1> title:
//                 {book.title}
//               </h1>
//               <h1> author:
//                 {book.author}
//               </h1>
//               <h1> publish year:
//                 {book.year}
//               </h1>

//             </div>
          
//           )
// )}
//          </div>


//          <button className='w-[90%] mx-auto px-7 py-3 ml-9 bg-red-500 text-white text-lg font-bold rounded-2xl'
//          onClick={handledelete}>
//           Yes ,Delete It.
//          </button>



//       </div>






//     </div>
//   )
// }
