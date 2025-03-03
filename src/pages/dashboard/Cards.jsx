import {Card, CardMedia} from "@mui/material";
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { getLoginUser } from "../../storage/LoginStorage";


export default function Cards({ collaborator }) {

  const { user } = getLoginUser() || ''; 

  return (
    <Link style={{ textDecoration: 'none' }} to={`/collaborator/${collaborator.id}`}>
      <Card sx={{ mt: '1rem' }} style={{ cursor: 'pointer', textDecoration: 'none' }} >
        <CardMedia
          sx={{ height: 200 }}
          image={collaborator.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {collaborator.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {collaborator.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}