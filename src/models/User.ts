//aqui não precisa o token porque não estamos fazendo o login, apenas o cadastro

interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
}

export default User;