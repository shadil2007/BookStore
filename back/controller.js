
import { book } from "./module.js"

export const addbook= async(req,res)=>{

    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.year
        ){
            return res.status(400).send({
                messege:'all field required'
            })  
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            year:req.body.year
        }

        const books=await book.create(newBook)

        res.status(200).send(books)

    }

    
    catch(error){
        console.log(error.messege)
        res.status(504).send("an error ocuured")
    }
    
}

export const listbook= async(req,res)=>{
    try{
      const books= await book.find({}) 
      res.status(200).send({
        count:books.length,
        data:books
      })
    }
    catch(error){
          console.log(error.messege)
        res.status(504).send("an error ocuured")
    }
}

export const onebook=async (req,res)=>{
    try{

        const { id }= req.params

        const onebook= await book.findById(id)

        res.status(200).json({
            result:" 1 found",
            data:onebook


        })

    }
    catch(error){
          console.log(error.messege)
        res.status(504).send("an error ocuured")
    }
}

export const editbook=async (req,res)=>{
    try{
          if(
            !req.body.title||
            !req.body.author||
            !req.body.year
        ){
            return res.status(400).send({
                messege:'all field required'
            })  
        }

        const { id }= req.params

        const editbook= await book.findByIdAndUpdate(id,req.body)

      if(!editbook){
        res.status(400).json({messege:"book not found"})
      }
      res.status(200).json({messege:"book updated successly"})
    }
    catch(error){
          console.log(error.messege)
        res.status(504).send("an error ocuured")
    }
}

export const deletebook= async (req,res)=>{
    try{

        const {id }=req.params
       
        const deletebook= await book.findByIdAndDelete(id)

        if(!deletebook){
            res.status(404).json({messege:"book not found"})
        }

        res.status(200).json({messege:"book deleted sucesfully"})
    }
    catch(error){
        console.log(error.messege)
        res.status(504).send({messege:"an error occured"})
    }
}