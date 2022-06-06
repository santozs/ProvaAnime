import { inserirAnime } from "../repository/animerepository.js";
import { Router } from "express";

const server = Router();

server.post("/anime", async (req,resp) => {
    try{
        const novoAnime= req.body;
        const Animeinserido= await inserirAnime(novoAnime);

        resp.send(Animeinserido);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.get('/anime', async (req, resp) => {
	try{
	const resposta = await inserirAnime();
	resp.send(resposta)
} 
catch(err){
	resp.status(400).send({
	    erro: err.message})
    }
})
    
