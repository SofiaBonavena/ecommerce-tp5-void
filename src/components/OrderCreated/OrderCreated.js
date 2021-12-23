import React from 'react';
import { Link } from "react-router-dom";
import { H2 } from "../Common/Common";
import { Container } from '../OrderCreated/styled';

const OrderCreated = ({ orderCreated }) => {
    return (
        <>
            <Container>
                <H2>¡Muchas gracias por tu compra!</H2>
                <img src="https://media.istockphoto.com/vectors/green-check-mark-icon-in-a-circle-tick-symbol-in-green-color-vector-id1190641917?k=20&m=1190641917&s=170667a&w=0&h=Xy9szUsw3QOoN8PPDUBO3GchuBsvJ92TsJd2PKDyQ2M=" width="150px"></img> 
                <p>Nro de orden: <br/> #{orderCreated}</p>
                <Link to="/">
                    <button className="custom-btn btn-16">
                        Volver al home
                    </button>
                </Link>
            </Container>
        </>
    )
}

export default OrderCreated

