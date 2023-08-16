import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string().min(6).max(10).required(''),
});

export class ContactForm extends Component {
  handleAddContact = values => {
    const { name, number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.onAddContact(newContact);
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          this.handleAddContact(values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <p>Name</p>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <p>Phone number</p>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
