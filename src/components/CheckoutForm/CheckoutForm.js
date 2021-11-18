import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from './styled';

const CheckoutForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: "", name: "", phone: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      if (!values.phone) {
        errors.phone = "Please tell us your phone";
      }
      if (!values.email) {
        errors.email = "We need to know your mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "mmm... this mail is not valid";
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
        <p class="contact">Contact details</p>
        <Field class="field" placeholder="Name" type="text" name="name" />
        <ErrorMessage class="error" name="name" component="span" />
        <Field class="field" placeholder="Email" type="email" name="email" />
        <ErrorMessage class="error" name="email" component="span" />
        <Field class="field" placeholder="Phone" type="text" name="phone" />
        <ErrorMessage class="error" name="phone" component="span" />
        <div class="frame" />
        <button class="custom-btn btn-16" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
      </Container>
    )}
  </Formik>
);
export default CheckoutForm;
