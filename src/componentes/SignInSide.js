import * as React from 'react';

import Proyectos from './Proyectos';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from './ButtonAppBar';
import Tablas from './Tablas';
const theme = createTheme();

export default function SignInSide() {


  return (
    <>
    <ButtonAppBar/>
    <ThemeProvider theme={theme}>
       
      <Grid container component="main" sx={{ height: '93vh' }}>
      
        <CssBaseline />
       
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square  sx={{ height: '93vh' }}>
        <Tablas/>
          
        </Grid>

        
        <Grid
          item
          xs={12}
          sm={4}
          md={8}
          
        >
          <Box style={{maxHeight: '93vh', overflow: 'auto'}} >
          <Proyectos />
          </Box>
          
        </Grid>
      </Grid>
    </ThemeProvider>
    
    </>
  );
}