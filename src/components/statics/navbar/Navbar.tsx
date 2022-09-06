import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
// importei do @mui e não do pacote do material-ui como o vídeo mostrou, e não é mais /core e sim mui/material

function Navbar() {
    return (
        <>
        <AppBar position="static" style={{ backgroundColor: "#ff9036" }}>
                <Toolbar variant='dense'>
                    <Box className='cursor'>
                        <Typography variant='h6' color='white'>BlogPessoal</Typography>
                    </Box>
                    
                    <Box display='flex' justifyContent='start'>
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                home
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                temas
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                cadastrar temas
                            </Typography>
                        </Box>
                    </Box>
        
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' color='white'>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                        <Button color="inherit">Login</Button>
                
                </Toolbar>
        </AppBar>
            


        </>
    )
}

export default Navbar;