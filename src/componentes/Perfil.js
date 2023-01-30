import * as React from 'react';
import Footer from './Footer';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import GotMilk from "./images/foto.png";
import SpinningText from './SpinningText';
import { SocialIcon } from 'react-social-icons';
import curriculum from '../componentes/curriculum abraham villca.pdf'
export default function Perfil() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(curriculum).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'curriculum abraham villca.pdf';
        alink.click();
    })
    })
}

  return (
    <Grid container  padding={2}>
      <Grid  item xs={12} style={{height: "65vh",backgroundColor: ""}}  >
      <Stack direction="column"
       justifyContent="center"
       alignItems="center"
              >
              <SpinningText text="Frontend * Backend * Software * Engineer * ">
                <img src={GotMilk} alt="Got Milk" />
              </SpinningText>
           
          
            </Stack>
      
      <Typography variant="subtitle2" gutterBottom sx={{ mt: 3}}>
      Hey,hola! 👋 Mi nombre es...
      </Typography>
      <Typography className="prueba" variant="h4" gutterBottom >
          Abraham Villca | 
      </Typography>
          
          
          
          <Typography variant="subtitle1" gutterBottom>
          Soy un desarrollador fullstack Apacionado por la programación creando proyectos de codigo abierto.
      </Typography>
          
      <Stack direction="row"
       justifyContent="center"
       alignItems="center"
       margin={1}
       spacing={1}
              >
              <SocialIcon url="https://github.com/Vicovillca"network='github' />
              <SocialIcon url="https://www.facebook.com/SinVidaSoci4l/" network='facebook' />
              <SocialIcon url="https://bo.linkedin.com/in/abraham-villca-0169301a1" network='linkedin'/>
            </Stack>
            <Stack direction="column"
              justifyContent="center"
              alignItems="center"
              >
              <Button variant="contained"  sx={{ borderRadius: 12.5 }}  endIcon={<FileDownloadIcon />} onClick={onButtonClick}>
                Descargar CV
              </Button>
              <Footer style={{color: "red"}}  />
            
            </Stack>
      </Grid>

    </Grid>
  );
}