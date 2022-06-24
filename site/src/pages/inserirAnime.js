
import { useState } from "react";
import { postAnime } from "../api/anime";
import { Link }from "react-router-dom"
import { toast } from "react-toastify";

function App() {
  const [name, setName] = useState("");
  async function post() {
    try {
      const r = await postAnime(name);
      toast.success(`anime cadastrado com sucesso!`);
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.erro);
      } else {
        toast.error(err.message);
      }
    }
  }
  return (
    <div >

      <div >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </div>

    <div>
        <button onClick={post}>cadastrar</button>
    </div>

    <div>
        <Link to="/ver">consultar os animes</Link>
    </div>
  
  
  </div>
    
  );
}

export default App;
