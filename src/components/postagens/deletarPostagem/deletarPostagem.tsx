import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import './deletarPostagem.css';

function DeletarPostagem() {

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography color='textSecondary' gutterBottom>
                                Deseja deletar a Postagem:
                            </Typography>

                            <Typography color='textSecondary'>
                                Descrição da postagem
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button variant='contained' className='marginLeft' size='large' color='primary'>
                                    Sim
                                </Button>
                            </Box>

                            <Box mx={2}>
                                <Button variant='contained' size='large' color='secondary'>
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

export default DeletarPostagem;