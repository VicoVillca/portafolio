import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import ImageItem from './ImageItem';
// componentes de card

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
//{"/*<ImageItem item={item} key={item.img}/>*/}
//imagenes de proyectos
import portafolio from './images/proyectos/portafolio.png';
import obi from './images/proyectos/obi.png';
import goldprice from './images/proyectos/golgprice.png';
export default function Proyectos() {
    const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box
    sx={{ flexGrow: 5 }}
    > 
    <ListSubheader component="div">Proyectos</ListSubheader>
    <ImageList  cols={matches ? 3 : 1} rowHeight={164} sx={{ pr: 5,pl: 5 }} variant="masonry" gap={8}>
      {itemData.map((item) => (
        
        
        <Card key={item.title} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
       
      </CardActionArea>
      <CardActions>
        Portafolio
        <IconButton
             edge="start"
             size="small"
             color="primary"
              >
                <OpenInNewIcon />
              </IconButton>
              <IconButton
              size="small"
              color="primary"
              >
                <GitHubIcon/>
              </IconButton>
      </CardActions>
    </Card>
      ))}
    </ImageList>
   
    </Box>
  );
}

const itemData = [
  {
    img: portafolio,
    title: 'Portafolio',
    demo: 'https://vicovillca.github.io/portafolio/',
    git: 'https://github.com/VicoVillca/portafolio'
  },
  {
    img: obi,
    title: 'ObiAdmin',
    demo: 'https://obi-font-end.vercel.app/',
    git: 'https://github.com/VicoVillca/Obi-FontEnd'
  },
  {
    img: goldprice,
    title: 'GoldPrice',
    demo: 'https://vicovillca.github.io/GoldPrice',
    git: 'https://github.com/VicoVillca/Obi-FontEnd'
  },
  
];

