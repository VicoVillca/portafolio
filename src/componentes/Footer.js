import * as React from 'react';

import Typography from '@mui/material/Typography';



export default function Footer() {


  return (
    <Typography className='copyright' variant="body2" color="text.secondary" align="center" padding={1} sx={{ mt: 3}}>
      © {new Date().getFullYear()}, creado con ❤️ por Abraham villca
     
    </Typography>
  );
}