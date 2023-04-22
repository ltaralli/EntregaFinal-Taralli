import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { Link } from 'react-router-dom';

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
    <Box 
    width={900}
    bgcolor="white"
    border={1}
    borderColor="grey.300"
    borderRadius={4}
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    p={3}
    display="flex"
    flexDirection= "column"
    justifyContent="center"
    alignItems="center">
      <p><b>CHECKOUT</b></p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="formForm" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Field
            fullWidth
              variant="outlined"
              name="name"
              as={TextField}
              label="Nombre"
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
              margin="normal"
            />
              <Field
              fullWidth
                variant="outlined"
                name="email"
                as={TextField}
                label="Correo electrónico"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                margin="normal"
                
              />
              <Field
              fullWidth
                variant="outlined"
                name="emailConfirmation"
                as={TextField}
                label="Confirmar correo electrónico"
                error={touched.emailConfirmation && errors.emailConfirmation}
                helperText={touched.emailConfirmation && errors.emailConfirmation}
                margin="normal"
              />
              <Field
              fullWidth
                variant="outlined"
                name="phone"
                as={TextField}
                label="Teléfono"
                error={touched.phone && errors.phone}
                helperText={touched.phone && errors.phone}
                margin="normal"
              />
              <Field
              fullWidth
                variant="outlined"
                name="address"
                as={TextField}
                label="Dirección"
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
                margin="normal"
              />
              <Stack direction="row" spacing={5} mt={2}>
              <Link to={'/'}><Button  color="error"size="large" variant="contained" endIcon={<DisabledByDefaultIcon/>}>CANCELAR COMPRA</Button></Link>
              <Button color="success" size="large" variant="contained" endIcon={<ShoppingCartCheckoutIcon/>} type="submit">FINALIZAR COMPRA</Button>
              </Stack>
        </Form>
      )}
    </Formik>
  </Box>
);
        }

export default Formulario;
