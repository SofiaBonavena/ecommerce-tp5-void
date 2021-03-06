import React, { useState, useEffect } from 'react'
import { Grid, Col } from '../../components/Grid'
import { Container } from './Styled'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../services/firebase'
import { Spinner } from 'react-bootstrap'
import { H2 } from '../Common/Common'

const CategoryContainer = ({ catId }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const db = getFirestore()
                const productsCollection = db.collection(`products`)
                const productsSnapshot = catId ?
                    await productsCollection.where('category', '==', catId).limit(20).get()
                    :
                    await productsCollection.orderBy('price', 'desc').limit(20).get();

                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        getProducts()
    }, [catId])

    return (
        <Container>
            {loading ? (
                <Spinner className="loader" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
                <>
                    { catId === undefined ?
                    <H2>PRODUCTOS</H2> 
                    :
                    <H2>{catId}</H2> 
                }
                    <Container>
                        <Grid rowGap={30} colGap={30}>
                        {products.map(({ name, image, description, id }, index) =>
                            <Col desktop={3} tablet={6} mobile={12} key={index}>
                                <ProductCard name={name} image={image} description={description} id={id} />
                            </Col>
                        )}
                        </Grid>
                    </Container>
                    
                </>
            )}

        </Container>
    )
}

export default CategoryContainer
