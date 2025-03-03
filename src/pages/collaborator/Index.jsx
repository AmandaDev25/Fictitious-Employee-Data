import { useParams } from 'react-router';
import {  getCollabById } from '../../services/DashboardService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import { getLoginUser } from '../../storage/LoginStorage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Collaborator() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [collaborator, setCollaborator] = useState({})
  const { user } = getLoginUser() || ''; 

  
  const handleCollaboratorById = async () => {
    const res = await dispatch(getCollabById(id))
    setCollaborator(res)
  }

  const handleCollaborator = async () => {
    formik.handleReset()
    handleCollaboratorById()
  };


  const formik = useFormik({
    initialValues: {
      user_name: user || '',
      date: new Date(),
      image: "https://imgs.search.brave.com/QttSFiXK49m8PJqv0ZoaWTxp4BOBNw6VntOD2Mc0KSE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVBORy1GcmVl/LUltYWdlLnBuZw",
      post_id: id,
      description: ''
    },
    validationSchema:
      Yup.object().shape({
        user_name: Yup.string().required('Nome é obrigatório'),
        description: Yup.string()
          .required('Descrição é obrigatória')
      }),
    onSubmit: async (values) => {
      await handleCollaborator(values);
    }
  });

  useEffect(() => {
    handleCollaboratorById()

  }, [])
  return (
    <Container maxWidth="sm">
      <Typography color="textPrimary" variant="h6" textAlign='center' m={1}>
        {collaborator.name}
      </Typography>

      <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <CardMedia image={collaborator.img} sx={{ height: '20rem', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'center' }} />
            <Typography variant='body2' m={1}><strong>Descrição:</strong> {collaborator.description}</Typography>
            <Typography variant='body2' m={2}><strong>Nome:</strong> {collaborator.author}</Typography>
          </form>
        </Card>
      </Box>
    </Container>
  )
}
