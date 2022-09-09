import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
/* import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; */
import { Link } from 'react-router-dom';
import './Navbar.css';
// importei do @mui e não do pacote do material-ui como o vídeo mostrou, e não é mais /core e sim mui/material

function Navbar() {
    return (
        <>
            <AppBar className='container'>
                <Toolbar variant='dense'>
                    <Link to='/home' className='text-decorator-none'>
                        <Typography variant='h5' className='nome'>BlogPessoal</Typography>
                    </Link>

                    <Box className='barra'>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6'>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6'>
                                Cadastrar temas
                            </Typography>
                        </Box>
                        </Link>

                        <Box mx={1} className='cursor'>
                            <Typography variant='h6'>
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                    <Link to='/login' className='text-decorator-none'>
                        <Button className='botao-login'>Login</Button>
                    </Link>


                </Toolbar>
            </AppBar>



        </>
    )
}

export default Navbar;