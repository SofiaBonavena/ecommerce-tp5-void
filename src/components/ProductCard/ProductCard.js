import React from 'react'
import { Container } from './Styled'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, image, description, id }) => {
    return (
        <Container>
            <img src={`${process.env.PUBLIC_URL}/assets/image/${image}`} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div class="frame" />
            <Link to={`/product/${id}`}>
                <button class="custom-btn btn-16">+ info</button>
            </Link>
        </Container>
    )
}
export default ProductCard
