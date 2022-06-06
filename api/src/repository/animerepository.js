import {con} from "./conection.js"

export async function inserirAnime(anime){
    const comando =
    `INSERT INTO tb_anime (id_anime, nm_anime)
    VALUES (?,?)`

    const [resposta] = await con.query(comando, [anime])
    anime.id =resposta.insertId;
    
    return anime;
}
