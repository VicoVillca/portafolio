import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import ImageItem from './ImageItem';
//imagenes de proyectos
import logo from './images/proyectos/portafolio.png';
export default function Proyectos() {
    const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box
    sx={{ flexGrow: 5 }}
    > 
    <ListSubheader component="div">Proyectos</ListSubheader>
    <ImageList  cols={matches ? 3 : 1} rowHeight={164} sx={{ pr: 5,pl: 5 }} variant="masonry" gap={8}>
      {itemData.map((item) => (
        
        <ImageItem item={item} key={item.img}/>
      ))}
    </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: logo,
    title: 'Portafolio',
    demo: 'https://vicovillca.github.io/portafolio/',
    git: 'https://github.com/VicoVillca/portafolio'
  },


  
];
