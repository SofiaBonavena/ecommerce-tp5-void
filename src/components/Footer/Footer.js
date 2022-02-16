import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from "./styled";

const Footer = () => {
    return (
        <div>
            <Box bgcolor="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1} p={0.5} color="white">
                                <b>VOID</b>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/' color="white">
                                    Home
                                </Link>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/shop' color="white">
                                    Tienda
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box borderBottom={1} p={0.5} >
                                <b>CONTACTO</b>
                            </Box>
                            <Box p={0.5}>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                            </Box>
                            <Box p={0.5}>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                            </Box>
                            <Box p={0.5}>
                                <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">WhatsApp</a>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;