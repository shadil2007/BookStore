import React, { useState ,useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi"



export default function Bookmoodel({book, onClose}) {





   
  return (
    <div className='fixed bottom-0 right-0 left-0 top-0 z-50 flex justify-center items-center
    bg-black/60'  onClick={onClose}>


        <div  onClick={(event)=> event.stopPropagation()}
            className='relative w-[600px] h-[450px]  flex flex-col bg-white rounded-xl p-4'>

                <AiOutlineClose className=' right-6 top-6 text-xl text-red-600 cursor-pointer absolute'
                onClick={onClose}/>

                <h2 className='w-fit text-black rounded-lg bg-yellow-400 text-md my-2 px-4 py-1'>
                    {book.year}
                </h2>
                <h2 className='flex justify-start text-xl text-black items-center my-3 gap-x-2'>
                   <PiBookOpenTextLight className='text-blue-500 text-xl my-1'/> <span>:{book.title}</span>
                </h2>
                <h2 className='flex justify-start items-center my-3 text-xl gap-x-2'>
                  <BiUserCircle className='text-blue-600 text-xl my-1'/>  <span className='text-black '>:{book.author}</span>
                </h2>

                <p className='text-gray-500'><span className='text-xl text-black'>BLURB</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptates veritatis est vero quaerat ipsum nostrum, officiis reiciendis fugit exercitationem repellendus itaque laborum enim earum illum doloribus animi molestiae iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste architecto excepturi! Facere architecto ullam sed laboriosam doloribus, eligendi veniam fugiat praesentium quisquam ipsam vero, impedit natus ipsa sequi minus?</p>
                

        </div>
     


    </div>
  )
}
