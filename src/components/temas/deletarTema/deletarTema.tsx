import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import './deletarTema.css';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarTema() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage("token");
    const [tema, setTema] = useState<Tema>();

    useEffect(() => {
        if(token == '')
        alert("Você precisa estar logado")
        history("/login")
    }, [token])

    useEffect(() => {
        if(id != undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function Sim() {
        history('/temas')
        deleteId(`/temas/${id}`, {
            headers: {
            'Authorization': token
            }
        });
        alert('Tema deletado com sucesso')
    }

    function Nao(){
        history('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>

                            <Typography color='textSecondary'>
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={Sim} variant='contained' className='marginLeft' size='large' color='primary'>
                                    Sim
                                </Button>
                            </Box>

                            <Box mx={2}>
                                <Button onClick={Nao} variant='contained' size='large' color='secondary'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>
            </Box>
        </>
    )
}

export default DeletarTema;
