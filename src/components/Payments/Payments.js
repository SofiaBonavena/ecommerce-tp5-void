import React from 'react'
import { Grid, Col } from '../../components/Grid'
import { H2 } from '../Common/Common'
import { Container } from "./styled";

const Payments = () => {

const metodos = [
    "visa.png",
    "cabal.png",
    "mastercard.png",
    "mercadopago.png",
    "rapipago.png",
    "american.png",
    "pagofacil.png",
    "uala.png",
]

    return (
        <div>
            <Container>
                <H2>FORMAS DE PAGO</H2>
                <Grid rowGap={30} colGap={20}>
                    {metodos.map((m, index) =>
                        <Col desktop={3} tablet={6} mobile={12} key={index}>
                            <img  className="box" src={`${process.env.PUBLIC_URL}/assets/image/${m}`} width={150} alt="mediodepago"/>
                        </Col>
                    )}
                </Grid>
                
            </Container>
        </div>
    )
}

export default Payments
