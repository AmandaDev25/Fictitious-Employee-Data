import { Box, Button, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SimpleBottomNavigation from "../../layout/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function WhoWeAre() {
  return (
    <Box sx={{ overflow: 'hidden', maxHeight: '100vh', padding: 2 }}>
      <Grid container>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Typography variant="body1">
            Somos desenvolvedores web focados em facilitar a vida das pessoas e solucionar problemas
          </Typography>
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <img width={250} src="../../../public/favicon/colaboradores.png" />
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Typography variant="body2">
            Conheça nossas redes sociais:
          </Typography>
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Tooltip title="LinkedIn" >
            <Link to={'https://br.linkedin.com/'} >
              <LinkedInIcon sx={{ cursor: 'pointer' }} />
            </Link>
          </Tooltip>
          <Link to={'https://www.instagram.com/'} >
          <Tooltip title="Instagram">
            <InstagramIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
          </Link>
          <Link to={'https://web.whatsapp.com/'}>
          <Tooltip title="WhatApp">
            <WhatsAppIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
          </Link>
          <Link to={'https://www.youtube.com/'}>
          <Tooltip title="Youtube">
            <YouTubeIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
          </Link>
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Typography variant="body2">
            Conheça nossos serviços:
          </Typography>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Link to={'https://mandysystem.netlify.app/inicio'} >
            <Button variant="text">
              MandyKSystem
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={2}>
          <Link to={'https://neivcsystem.netlify.app'} >
            <Button variant="text">
              Vcsystem
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Box display={'flex'} justifyContent={'center'}>
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}