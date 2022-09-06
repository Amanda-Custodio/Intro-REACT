import React from "react";
import { GitHub } from "@material-ui/icons";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Conecte-se comigo! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookIcon className='icones-redes-sociais'/>
                            </a>
                            <a href="https://github.com/Amanda-Custodio" target="_blank">
                                <GitHub className='icones-redes-sociais'/>
                            </a>
                            <a href="https://www.linkedin.com/in/amandaccustodio" target="_blank">
                                <LinkedInIcon className='icones-redes-sociais'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos-finais' >Todos os direitos reservados:</Typography>
                        </Box>
                        <Box>
                                <Typography variant="subtitle2" gutterBottom className='textos-finais' align="center">Amanda Custódio ©</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;