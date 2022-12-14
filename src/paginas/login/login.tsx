import React, { ChangeEvent, useState, useEffect } from 'react';
import './login.css';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import imagemFlor from '../imagens/images.jpg';

function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        //responsável pelo ciclo de vida de um componente - direcionar para home
        useEffect(() =>{
            if(token !='') // token diferente de vazio
                history('/home')
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            try {
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');

            } catch (error) {
                alert('Dados do usuário inconsistentes. Erro ao logar!')
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='texto-entrar'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                           
                                <Button type='submit' variant='contained' className='botao'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className='text-decorator-none'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-cadastre'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagemLogin'>

            </Grid>
        </Grid>
    );
}

export default Login;