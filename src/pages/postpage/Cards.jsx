import { Card, CardMedia } from "@mui/material";
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';


export default function Cards({collaborator}) {
    const navigate = useNavigate();
    return (
        <Card sx={{  mt: '1rem', cursor: 'pointer' }} style={{ backgroundImage: 'black' }}>
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
              <CardActions>
                <Button size="small" sx={{m: '5rem', my: '3rem', p: '1rem'}}  onClick={()=>navigate('/page')}></Button>
              </CardActions>
            </Card>
    )
}