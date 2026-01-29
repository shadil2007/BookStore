import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios'
import { MdOutlineAddBox } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import Bookmoodel from './Bookmoodel';






export default function Home() {

    const [book, setBook] = useState([])
   
    const [showmodel,setshowmodel]=useState(false)

    const [selectedbook,setSelectedBook]=useState('')

    useEffect(() => {
       
        axios
        .get ('https://bookstore-a7qg.onrender.com') 
            .then((res) => {
                setBook(res.data.data)
                console.log(res.data.data)

            })
            .catch((err) => {
                console.log(err)
               
            })

    }, [])
 

    return (
        <div className='p-4 bg-linear-to-t from-[#0a0a0a] to-[#015888] h-screen '>

            <div className='flex justify-between items-center mx-20 my-4 mt-20 mb-20'>

                <h1 className='  text-4xl font-sans font-semibold text-white'>BookList</h1>


                <Link to='/book/create' >
                <MdOutlineAddBox className='text-4xl text-blue-500 '/> <span className='bg-white/40 hover:block
                hidden px-2 py-2   rounded-full'> 
                click to add book</span>
                </Link>

            </div>

            <table className='w-full border-separate border-spacing-2 overflow-hidden justify-center items-center'>

                <thead className='mx-20'>
                    <tr >
                        <th className='border border-white text-white backdrop-blur-md bg-white/40  rounded-md'>No.</th>
                        <th className='border border-white text-white backdrop-blur-md bg-white/40 rounded-md'>Title.</th>
                        <th className='border border-white text-white backdrop-blur-md bg-white/40 rounded-md'>Author</th>
                        <th className='border border-white text-white backdrop-blur-md rounded-md bg-white/40'>Year</th>
                        <th className='border border-white text-white backdrop-blur-md rounded-md bg-white/40'>Opertion</th>
                    </tr>

                </thead>

                <tbody>
                    {book.map((book,index)=>(
                        <tr key={book._id} className='h-8'>

                            <td className='border border-white rounded-md text-center text-white'>
                                {index+1}
                            </td>
                            <td className='border border-white text-white rounded-md text-center'>
                               {book.title}
                            </td>
                            <td className='border border-white text-white rounded-md text-center'>
                             {book.author}
                            </td>
                            <td className='border border-white text-white rounded-md text-center'>
                             {book.year}
                            </td>
                            <td className='border border-white text-white rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>

                                <BiShow
                                className='text-white text-2xl hover:text-black'
                                onClick={()=>{setshowmodel(true),
                                     setSelectedBook(book)
                                }}
                                />

                                <Link to={`/book/edit/${book._id}`}>
                                <MdEdit className=' hover:text-amber-300 text-2xl'/>

                                </Link>

                                <Link to={`/book/delete/${book._id}`}>
                                <MdDelete className='hover:text-red-600  text-2xl'/>
                                </Link>

                                


                            </div>
                            </td>
                            

                        </tr>

                    ))}


                </tbody>

            </table>

            { showmodel  && (
                <Bookmoodel book={selectedbook} onClose={()=>setshowmodel(false)}/>
            )
            
            
            }



        </div>
    )
}
