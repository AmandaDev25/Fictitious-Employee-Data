import { Card, CardMedia } from "@mui/material";
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { getLoginUser } from "../../storage/LoginStorage";


export default function Cards({ collaborator }) {
  const navigate = useNavigate();
  const isLoggedIn = getLoginUser();
  return (
    <Card sx={{ mt: '1rem', cursor: 'pointer' }} style={{ backgroundImage: 'black' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={collaborator.img}
        title={collaborator.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {collaborator.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {collaborator.description}
        </Typography>
      </CardContent>
      {isLoggedIn &&
        <CardActions>
          <Button size="small"  onClick={() => navigate('/page')}>Crie um colaborador(a)</Button>
        </CardActions>
      }
      {!isLoggedIn &&
        <>
          <CardActions>
            <Button size="small"  onClick={() => navigate('/login')}>Já é usuário? Faça login</Button>
          </CardActions>
          <CardActions>
            <Button size="small"  onClick={() => navigate('/register')}>Não é usuário? Registre-se</Button>
          </CardActions>
        </>
      }
    </Card>
  )
}