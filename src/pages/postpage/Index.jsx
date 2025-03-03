import { Grid, Tooltip } from "@mui/material";
import { useEffect } from "react";
import SimpleBottomNavigation from "../../layout/Footer";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { createCollaborator } from "../../services/DashboardService";
import { getLoginUser } from "../../storage/LoginStorage";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useFormik } from 'formik';

export default function Newcollaborator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = getLoginUser();

  const formik = useFormik({
    initialValues: {
      id: uuid(),
      img: 'https://imgs.search.brave.com/Gi1WxThbcuTa_2m7IhMT4D481-RQOvLlbV4a_z2DQ1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL3NpZGUv/Q29tby1GYXplci1J/bWFnZW0tUE5HLnBu/Zw',
      name: '',
      description: '',
      author: user
    },
    validationSchema:
      Yup.object().shape({
        img: Yup.string().required('Imagem é obrigatório'),
        name: Yup.string().required('Nome é obrigatório'),
        description: Yup.string()
          .required('Descrição é obrigatório')
      }),
    onSubmit: async (values) => {
      await onSubmit(values);
    }
  });

  
  const onSubmit = async (values) => {
    await dispatch(createCollaborator(values))
    navigate("/dashboard");
  };

  useEffect(() => {
    if (!user) {
      navigate('/new')
    }
  }, [])

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box>
            <Container maxWidth="sm">
              <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                <Typography color="textPrimary" variant="h3">
                  Crie seu colaborador aqui
                </Typography>
              </Box>
              <Card sx={{ textAlign: 'center' }}>
                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ textAlign: 'left', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '10rem' }} src={formik.values.img} />
                  </Box>
                  <Box display='flex'>
                    <TextField
                      error={Boolean(formik.touched.img && formik.errors.img)}
                      fullWidth
                      helperText={formik.touched.img && formik.errors.img}
                      label="Coloque uma url de imagem para o colaborador"
                      margin="normal"
                      name="img"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      value={formik.values.img}
                      variant="outlined"
                    />
                    <Tooltip title={'Apagar url'}>
                      <Button
                        size="small"
                        onClick={() => formik.setFieldValue('img', '')}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </Tooltip>
                  </Box>
                  <TextField
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Coloque um nome para o colaborador"
                    margin="normal"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.name}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(formik.touched.description && formik.errors.description)}
                    fullWidth
                    helperText={formik.touched.description && formik.errors.description}
                    label="Descreva suas funções da profissão."
                    multiline
                    rows={3}
                    margin="normal"
                    name="description"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="description"
                    value={formik.values.description}
                    variant="outlined"
                    color={'info'}
                  />
                  <Box sx={{ py: 1, mr: 3, textAlign: 'center' }}>
                    <Button
                      color="primary"
                      size="large"
                      type="submit"
                      variant="contained"
                      sx={{ mt: 1, width: '150px' }}
                      title="User"
                      startIcon={<AddIcon titleAccess="Add" />}
                    >
                      Criar
                    </Button>
                  </Box>
                </form>
              </Card>
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <SimpleBottomNavigation />
      </Grid>
    </>
  );
}