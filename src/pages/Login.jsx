import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
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
import { newDashboard } from '../services/DashboardService';
import { setLoginUser } from '../storage/LoginStorage';
import { addAlert } from '../store/messages/AlertReducer';
import { CodeAlertsMessage } from '../constants/CodeAlertsMessage';
import { CodeErrorMessage } from '../constants/CodeErrorMessage';
import { CodeSuccessMessage } from '../constants/CodeSuccessMessage';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      const res = await dispatch(newDashboard(values, navigate));
      if (res && res.length > 0) {
        const validation = res.find(el => el.user === values.user && el.password === values.password)
        if (validation) {
          navigate('/dashboard')
          setLoginUser({ user: values.user });
          return dispatch(
            addAlert({
              severity: CodeAlertsMessage.SUCCESS,
              message: CodeSuccessMessage.USER_LOGGED,
            }),
          );
        }
        return dispatch(
          addAlert({
            severity: CodeAlertsMessage.ERROR,
            message: CodeErrorMessage.UNAUTHORIZED,
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
        <title>Colaboradores</title>
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
                user: Yup.string().required('Login inválido'),
                password: Yup.string()
                  .required('Senha é obrigatório')
                  .required('Senha inválido'),
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
                      Colaboradores
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <TextField
                    error={Boolean(touched.login && errors.login)}
                    fullWidth
                    helperText={touched.login && errors.login}
                    label="Usuário"
                    margin="normal"
                    name="user"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.user}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.senha && errors.senha)}
                    fullWidth
                    helperText={touched.senha && errors.senha}
                    label="Senha"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    color={'info'}
                  />
                  <Box sx={{ py: 1, textAlign: 'right' }}>
                    <Typography color="textSecondary" variant="body1">
                      <Link to="/recuperar/senha" variant="h6">
                        Esqueci minha senha
                      </Link>
                    </Typography>
                  </Box>
                  <Box sx={{ py: 1, textAlign: 'center' }}>
                    <Button
                      color="primary"
                      size="large"
                      type="submit"
                      variant="contained"
                      sx={{ mt: 1, width: '150px' }}
                      title="User"
                      startIcon={<LoginIcon titleAccess="User" />}
                    >
                      Entrar
                    </Button>
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

export default Login;
