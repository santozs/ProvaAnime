import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { listAnime } from './api/anime'
import List from "./pages/ConsultarAnime"
import Home from "../src/pages/inserirAnime"

export default function Index(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ver" element={<List />} />

        </Routes>
        </BrowserRouter>
    );
}