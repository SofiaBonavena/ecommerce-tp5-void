import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from './styled';
import { H2 } from '../Common/Common'

// Alert: Te has suscrito con exito
const Newsletter = () => {
    const successAlert = (mail) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Gracias!",
            text: ` ${mail} Has sido suscrito con éxito`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const [suscrito, setSuscrito] = useState(false)

    // Formulario newsletter
    return (
        <div>
            {!suscrito && 
                <Formik
                    initialValues={{ email: "" }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Ingresá un mail";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "Mail inválido";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            successAlert(values.email);
                            setSuscrito(true);
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Container>
                            <H2>NEWSLETTER</H2>
                            <Form id="my-form">
                                <p class="contact">Recibí promociones y novedades en tu mail</p>
                                <Field class="field" placeholder="Ingresá tu mail" type="email" name="email" />
                                <button class="custom-btn btn-16" type="submit" disabled={isSubmitting}>
                                    SUSCRIBIRME  
                                </button>
                                <ErrorMessage class="error" name="email" component="span" />
                                
                            </Form>
                        </Container>
                    )}
                </Formik>}


        </div>
    )
}

export default Newsletter
