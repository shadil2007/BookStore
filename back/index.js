import express from "express"
import mongoose from "mongoose"
import { routes } from "./routes.js"
import cors from 'cors'

const app=express()

const mongosh='mongodb://localhost:27017/bookstore'

const port= process.env.PORT || 5555 ;


app.use(express.json())
app.use(cors())


mongoose.connect(mongosh)
.then(
    ()=>console.log("mongosh is connected"),

    app.use('/book',routes)

)
.catch(
    ()=>console.log("error")
)


app.listen(port,()=>console.log(`running on port${port}`))