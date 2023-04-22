import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';

const validationSchema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
  emailConfirmation: yup.string().oneOf([yup.ref('email')], 'Las direcciones de correo electrónico deben coincidir').required('La confirmación de correo electrónico es obligatoria'),
  phone: yup.string().required('El teléfono es obligatorio'),
  address: yup.string().required('La dirección es obligatoria'),
});

const Formulario = ({onFormSubmit}) => {
  const initialValues = {
    name: '',
    email: '',
    emailConfirmation: '',
    phone: '',
    address: '',
  };

  const handleSubmit = (values) => {
    onFormSubmit(values);
  };

  return (
    <>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="formForm">
              <Field
                variant="outlined"
                name="name"
                as={TextField}
                label="Nombre"
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
              />
              <Field
                variant="outlined"
                name="email"
                as={TextField}
                label="Correo electrónico"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                variant="outlined"
                name="emailConfirmation"
                as={TextField}
                label="Confirmar correo electrónico"
                error={touched.emailConfirmation && errors.emailConfirmation}
                helperText={touched.emailConfirmation && errors.emailConfirmation}
              />
              <Field
                variant="outlined"
                name="phone"
                as={TextField}
                label="Teléfono"
                error={touched.phone && errors.phone}
                helperText={touched.phone && errors.phone}
              />
              <Field
                variant="outlined"
                name="address"
                as={TextField}
                label="Dirección"
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
              />
              <Button type="submit">Enviar</Button>
            </Form>
          )}
        </Formik>
    </>
  );
}

export default Formulario;
