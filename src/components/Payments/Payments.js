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
    "paypal.png",
    "maestro.png",
    "cabaldebito.png"
]

    return (
        <div>
            <Container>
                <H2>FORMAS DE PAGO</H2>
                <Grid rowGap={30} colGap={30}>
                    {metodos.map((m, index) =>
                        <Col desktop={1} tablet={6} mobile={12} key={index}>
                            <img src={`${process.env.PUBLIC_URL}/assets/image/${m}`} width={100} alt=""/>
                        </Col>
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default Payments
