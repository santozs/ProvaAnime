import { Router } from "express";
import { inserirAnime, ListarTodosAnimes } from "../repository/animeRepository.js";
const server = Router()

server.post('/inserir', async (req,resp) => {
	try{
        const nome = req.body;
        const resposta = await inserirAnime(nome)
        resp.send(resposta)} 

        catch(err){
            resp.status(400).send({
                erro: err.message
            })
        }
})
server.get('/anime', async (req, resp) => {
	try{
	const resposta = await ListarTodosAnimes();
	resp.send(resposta)
} catch(err){
	resp.status(400).send({
	    erro: err.message
    })}})
export default server;