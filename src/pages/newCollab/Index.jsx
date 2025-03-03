import { Card, CardMedia, Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newDashboard } from '../../services/DashboardService';
import { useNavigate } from 'react-router';
import * as React from 'react';
import SimpleBottomNavigation from '../../layout/Footer';
import Cards from './Cards';

export default function NewCollaborator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collaborator, setCollaborator] = useState([])
  const handlePost = async () => {
    const res = await dispatch(newDashboard())
    setCollaborator(res)
  }
  useEffect(() => {
    handlePost()
  }, []);

  const navigateTo = (route, data) => {
    navigate(route, { state: data });
  };


  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}  display={'flex'} justifyContent={'center'} >
          <Cards
            collaborator={{
              img: "../../../public/favicon/colaboradores.png",
              title: "Criar colaborador",
              name: "Crie seu colaborador aqui",
              description: "Voce pode criar vários colaboradores para visualização de dados aqui. Use sua criatividade"
            }} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
        <SimpleBottomNavigation />
      </Grid>
    </>
  )
}