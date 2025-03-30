import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormikForm.css';

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  // Mock API function
  const mockApiCall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Submitted data:', data);
        resolve({ message: 'Registration successful!' });
      }, 1000);
    });
  };

  return (
    <div className="formik-form">
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            const response = await mockApiCall(values);
            setStatus({ message: response.message });
          } catch (error) {
            setStatus({ message: 'Registration failed. Please try again.' });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            
            {status && status.message && (
              <div className="submit-message">{status.message}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;