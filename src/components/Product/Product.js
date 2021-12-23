import React from 'react';
import { Container } from './Styled';
import { Grid, Col } from '../Grid/index';

const Product = ({ prodId, product, addToCart }) => {

    console.log(product.image)
    return (
        <Container>
            <Grid>
                <Col desktop={6} tablet={6} mobile={12}>
                    <img src={`${process.env.PUBLIC_URL}/assets/image/${product.image}`} alt={product.name} />
                </Col>
                <Col desktop={6} tablet={6} mobile={12}>
                    <div>
                        <h1>{product.name}</h1>
                        <p className="textodesc">{product.desc}</p>
                        <p className="textoprecio">${product.price}</p>
                        <div className="frame" />
                        <button className="custom-btn btn-16" onClick={() => addToCart({ ...product, quantity: 1 })}> Add to cart</button>
                    </div>
                </Col>
            </Grid>
        </Container>
    )
}





export default Product
