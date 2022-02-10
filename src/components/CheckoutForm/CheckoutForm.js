import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from './styled';
import { H2 } from '../Common/Common'

const CheckoutForm = ({ handleSubmit, cartTotalItems }) => (
  <Formik
    initialValues={{ email: "", name: "", phone: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Ingresá tu nombre";
      }
      if (!values.phone) {
        errors.phone = "Ingresá tu teléfono";
      }
      if (!values.email) {
        errors.email = "Ingresá tu email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "mmm... este mail es inválido";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit(values);
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
      <Container>
        <Form id="my-form">
          <H2 className="contact">Detalles de contácto</H2>
          <Field className="field" placeholder="Nombre" type="text" name="name" />
          <ErrorMessage className="error" name="name" component="span" />
          <Field className="field" placeholder="Email" type="email" name="email" />
          <ErrorMessage className="error" name="email" component="span" />
          <Field className="field" placeholder="Teléfono" type="text" name="phone" />
          <ErrorMessage className="error" name="phone" component="span" />
          <div className="frame" />
          {cartTotalItems() === 0
            ?
            <p className="warning"><strong>*IMPORTANTE*</strong> Para completar el formulario <br></br> debes agregar productos al carrito de compras</p>
            
            :
            <button className="custom-btn btn-16" type="submit" disabled={isSubmitting}>
              COMPRAR
            </button>
          }

        </Form>
      </Container>
    )}
  </Formik>
);
export default CheckoutForm;
