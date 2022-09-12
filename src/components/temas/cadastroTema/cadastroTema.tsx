import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './cadastroTema.css';

function CadastroTema() {
    return (
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>
                    Formulário de cadastro Tema
                </Typography>

                <TextField value='' id='descricao' label='descricao' variant='outlined' name='descricao' margin='normal' fullWidth></TextField>

                <Button type='submit' variant='contained' color='primary'>
                    Finalizar
                </Button>
            </form>
        </Container>

    )
}

export default CadastroTema;
