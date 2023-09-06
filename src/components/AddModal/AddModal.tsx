import React from 'react';
import {Box, Button, Grid, Modal, TextField} from '@mui/material';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (url: string, name: string) => void;
}

const AddModal = ({open, onClose, onAdd}: ModalProps) => {
  const initialValues = {
    url: '',
    name: '',
  };

  const validationSchema = Yup.object({
    url: Yup.string()
        .required('La URL es requerida'),
    name: Yup.string().required('El nombre es requerido'),
  });

  const handleSubmit = (values: { url: string; name: string }) => {
    onAdd(values.url, values.name);
    onClose();
  };

  return (
      <Modal open={open} onClose={onClose}>
        <Box className={'modal-add'}>
          <h2>Ingresa la URL</h2>
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                      name="name"
                      as={TextField}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                  />
                  <ErrorMessage name="name" component="div" className="error-message"/>
                </Grid>
                <Grid item xs={12}>
                  <Field
                      name="url"
                      as={TextField}
                      label="URL"
                      variant="outlined"
                      fullWidth
                  />
                  <ErrorMessage name="url" component="div" className="error-message"/>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                  <Button variant="contained" color="primary" type="submit">
                    Verificar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
  );
};

export default AddModal;