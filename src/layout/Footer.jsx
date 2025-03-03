import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <Box sx={{  display: 'flex' , justifyContent: 'center'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={()=>navigate('/dashboard')}
      >
        <BottomNavigationAction label="© 2025" />
      </BottomNavigation>
    </Box>
  );
}
