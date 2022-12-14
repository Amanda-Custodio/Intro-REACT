import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

/// aciona o método busca que faz uma listagem de post ou temas
/// o método pede 3 parâmetros: url, a rota, e o token (header - autenticação)
/// se a API autentica o usuário, retorna a var setDado, com atribuição dos dados URL e header
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

///post
export const post = async (url: any, setDado: any, header: any, dados: any) => {
    const resposta = await api.post(url, header, dados)
    setDado(resposta.data)
}

///put
export const put = async (url: any, setDado: any, header: any, dados: any) => {
    const resposta = await api.put(url, header, dados)
    setDado(resposta.data)
}

///delete
export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}