import React from 'react'
import { Container } from './Styled'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, image, description, id }) => {
    return (
        <Container>
            <img src={`${process.env.PUBLIC_URL}/assets/image/${image}`} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="frame" />
            <Link to={`/product/${id}`}>
                <button className="custom-btn btn-16">+ INFO</button>
            </Link>
        </Container>
    )
}
export default ProductCard
