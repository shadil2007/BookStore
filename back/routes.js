import express from 'express'
import { addbook, deletebook, editbook, listbook, onebook } from './controller.js'

 export const routes= express.Router()


 routes.post('/add',addbook)

 routes.get('/list',listbook)

 routes.get('/list/:id',onebook)
 routes.put('/edit/:id',editbook)
 routes.delete('/delete/:id',deletebook)