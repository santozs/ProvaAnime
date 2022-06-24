import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function listAnime() {
    const r = await api.get('/anime')
    return r.data
}

export async function postAnime(nome) {
    const r = await api.post('/inserir', {
        nome: nome
    });
    return r.status
}