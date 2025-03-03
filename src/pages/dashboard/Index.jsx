import { Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboard } from '../../services/DashboardService';
import * as React from 'react';
import SimpleBottomNavigation from '../../layout/Footer';
import Cards from './Cards';


const Dashboard = () => {
  const dispatch = useDispatch();
  const [collaboratorList, setCollaboratorList] = useState([]);
  

  const handlePost = async () => {
    const res = await dispatch(getDashboard())
    setCollaboratorList(res) 
  }
  useEffect(() => {
    handlePost()
  }, []);

  return (
    <>
      <Helmet>
        <title>Colaboradores</title>
      </Helmet>
      <Container fixed maxWidth='md' >
        <Grid key={'item'} container spacing={2}>
          {collaboratorList?.map((collaborator) =>
            <Grid key={'index'} item xs={12} sm={6} md={3} >
              <Cards 
                collaborator={collaborator}      
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <SimpleBottomNavigation />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
