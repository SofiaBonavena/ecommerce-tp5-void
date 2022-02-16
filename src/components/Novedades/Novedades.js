import React, { useState, useEffect } from 'react'
import { Grid, Col } from '../../components/Grid'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../services/firebase'
import { H2 } from '../Common/Common'
import { Container } from "./styled";

const Novedades = ({ catId }) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const db = getFirestore()
                const productsCollection = db.collection(`products`)
                const productsSnapshot = catId ?
                    await productsCollection.where('category', '==', catId).limit(4).get()
                    :
                    await productsCollection.orderBy('price', 'desc').limit(4).get();

                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            } catch (error) {
                console.log('Error', error)
            }
        }
        getProducts()
    }, [catId])

    return (
        <div>
            <Container>
                <H2>ÚLTIMAS NOVEDADES</H2>
                <div className="novedadescontainer">
                    <Grid rowGap={30} colGap={30} >
                        {products.map(({ name, image, description, id }, index) =>
                            <Col desktop={3} tablet={6} mobile={12} key={index}>
                                <ProductCard name={name} image={image} description={description} id={id} />
                            </Col>
                        )}
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Novedades
