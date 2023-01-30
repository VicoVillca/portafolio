import * as React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



export default function Footer() {


  return (
    <Typography variant="body2" color="text.primary" align="center" padding={1} sx={{ mt: 3}}>
      {'Hecho con ❤️ por '}
      <Link color="inherit" href="https://mui.com/">
      Abraham villca
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}