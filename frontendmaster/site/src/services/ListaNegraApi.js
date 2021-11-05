import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lista-negra-app.herokuapp.com/'
    //baseURL: 'http://localhost:5000'
})

export default class ListaNegraApi {

    async cadastrar(ln) {
        const resp = await api.post('/listanegra', ln);
        return resp;
    }

    async consultar() {
        const resp = await api.get('/listanegra');
        return resp.data;
    }

    async alterar(id, ln) {
        const resp = await api.put(`/listanegra/${id}`, ln);
        return resp;
    }

    async deletar(id) {
        const resp = await api.delete(`/listanegra/${id}`);
        return resp;
    }
}