import "dotenv/config"
import express from 'express'
import cors from 'cors'
import animeController from './controller/animeController.js'
import {con} from './repository/connection.js'

const server = express()
server.use(cors())
server.use(express.json())

//endpoints
server.use(animeController)

//msg
server.listen(process.env.PORT, () => console.log(`Api aberta na porta ${process.env.PORT}`))