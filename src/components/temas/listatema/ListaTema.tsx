import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, Button, Typography, CardContent } from '@material-ui/core';
import './listatema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate(); /// se o token não estiver salvo no localStorage, será redirecionado para a pg inicial

    useEffect(() => {
        if (token == '') {
            alert('Você precisa estar logado')
            history("/login")
        }
    }, [token])

    async function getTema() {
        await busca("/tema", setTemas, {
            headers: { ///passa no cabeçalho da solicitação a autorização
                'Authorzations': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length]) /// sempre que temas sofrer alteração, vai renderizar pela função getTema

    return (
        <>
            {
                temas.map(tema => (

                    <Box m={2}>
                        <Card variant='outlined' className='card'>
                            <CardContent>
                                <Typography gutterBottom className='posts'>
                                    Tema
                                </Typography>

                                <Typography variant='h5' component='h2' className='posts'>
                                    {tema.descricao}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box display='flex' justifyContent='center' mb={1.5}>
                                    <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant="contained" className='atualizar' size='small'>
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant="contained" className='deletar' size='small'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaTema;