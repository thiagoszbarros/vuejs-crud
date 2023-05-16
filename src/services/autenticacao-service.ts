import http from "./http";

interface Credenciais {
    email: string;
    password: string;
}

const AutenticacaoService = {

    async login(credenciais: Credenciais) {

        await http.post('api/login', credenciais)
    }
}

export default AutenticacaoService 