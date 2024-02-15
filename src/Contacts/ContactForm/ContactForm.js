import React from 'react';
import { Formik, Form } from 'formik';
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { initialValues, validationSchema } from './ContactFormSchema';
import { FormError } from './ContactFormError';

const ContactForm = ({ handlerSubmit }) => {
  return (
    <>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlerSubmit}
        >
          <Form autoComplete="off">
            <FormLabel htmlFor="name">
              Name
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <FormError name="name" />
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <FormInput
                type="text"
                id="number"
                name="number"
                placeholder="Number"
                required
              />
              <FormError name="number" />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </Formik>
      </FormContainer>
    </>
  );
};

export default ContactForm;
