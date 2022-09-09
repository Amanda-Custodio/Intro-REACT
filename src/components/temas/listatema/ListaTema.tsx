import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardActions, Button, Typography, CardContent } from '@material-ui/core';
import './listatema.css';

function ListaTema() {
    return (
        <>
            <Box m={2}>
                <Card variant='outlined' className='card'>
                    <CardContent>
                        <Typography gutterBottom className='posts'>
                            Tema
                        </Typography>

                        <Typography variant='h5' component='h2' className='posts'>
                            Minha descrição
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to="" className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant="contained" className='atualizar' size='small'>
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>

                            <Link to="" className='text-decorator-none'>
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
        </>
    )
}

export default ListaTema;