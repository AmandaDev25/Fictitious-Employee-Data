import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { registerUser } from '../services/DashboardService';
import { addAlert } from '../store/messages/AlertReducer';
import { CodeAlertsMessage } from '../constants/CodeAlertsMessage';
import { CodeErrorMessage } from '../constants/CodeErrorMessage';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      const res = await dispatch(registerUser(values));
      navigate('/login');
      if (res.success) {
        dispatch(
          addAlert({
            severity: CodeAlertsMessage.SUCCESS,
            message: 'Usuário cadastrado com sucesso',
          }),
        );
      } else {
        dispatch(
          addAlert({
            severity: CodeAlertsMessage.ERROR,
            message: CodeErrorMessage.REGISTRATION_FAILED,
          }),
        );
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Card sx={{ mt: '20%', p: 5, textAlign: 'center' }}>
            <Formik
              initialValues={{
                user: '',
                password: '',
              }}
              validationSchema={Yup.object().shape({
                user: Yup.string().required('Novo Usuário é obrigatório'),
                password: Yup.string().required('Nova Senha é obrigatória'),
              })}
              onSubmit={async (values) => {
                await onSubmit(values);
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ textAlign: 'left', mb: 1 }}>
                    <Typography color="textPrimary" variant="h5">
                      Registro
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <TextField
                    error={Boolean(touched.user && errors.user)}
                    fullWidth
                    helperText={touched.user && errors.user}
                    label="Novo Usuário"
                    margin="normal"
                    name="user"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.user}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Nova Senha"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box sx={{ py: 1, textAlign: 'center' }}>
                    <Button
                      color="primary"
                      size="large"
                      type="submit"
                      variant="contained"
                      sx={{ mt: 1, width: '150px' }}
                      startIcon={<PersonAddIcon />}
                    >
                      Registrar
                    </Button>
                  </Box>
                  <Box sx={{ py: 1, textAlign: 'center' }}>
                    <Typography color="textSecondary" variant="body1">
                      Já possui uma conta? <Link to="/login">Faça login</Link>
                    </Typography>
                  </Box>
                </form>
              )}
            </Formik>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Register;
