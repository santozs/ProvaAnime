import {con} from './connection.js'

export async function inserirAnime(anime){
    const comando = `
    INSERT INTO tb_anime(nm_anime) 
    VALUES (?)`
    const [resposta] = await con.query(comando, [anime.nome])
    anime.id = resposta.insertId
    
    return anime;
}
export async function ListarTodosAnimes(){
    const comando =`SELECT id_anime			            id,
                           nm_anime			            nome
  FROM tb_anime`
const [linhas] = await con.query(comando)
return linhas
}