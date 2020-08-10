import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lista-negra-app.herokuapp.com/'
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

}