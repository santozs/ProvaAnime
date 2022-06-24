import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { listAnime } from "../api/anime"


export default function Index() {

  const [anime, setAnime] = useState([]);

        async function list() {
        const r = await listAnime();
        setAnime(r);
     }

      useEffect(() => {
    list()
  }, [])
  return (
    <div >
      <div >

        <table >
          <tr>
            <th >Nome Dos animes que foi cadastrado</th>
          </tr>
          {anime.map(item =>
            <tr>
              <td>{item.nome}</td>
            </tr>
          )}
        </table>
        
      </div>
    </div>
  );
}