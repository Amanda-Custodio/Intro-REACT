import React, { useEffect } from 'react';
import { Paper, Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage("token");

    useEffect(() => {
        if(token == '') {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='titulo-bemvindo'>Olá! Bem-vinde!!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='subtitulo-bemvindo'>Este é um espaço livre para falarmos sobre todos os assuntos relevantes!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src="https://static-cse.canva.com/_next/static/assets/default-featured-image_w2568xh2568_eff55e4ec7f143f1b7297ce513afe971fb37c349142298e4803e07f970506aae.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;