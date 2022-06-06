import "dotenv/config"

import animecontroller from './controller/animecontroller.js'


import express  from "express"
import cors from "cors"




const server=express()
server.use(cors())
server.use(express.json())


//endpoints

server.use(animecontroller)





server.listen(process.env.port, () => console.log(`API online na porta ${process.env.port}`))