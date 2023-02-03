import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import ImageItem from './ImageItem';
//imagenes de proyectos
import portafolio from './images/proyectos/portafolio.png';
import obi from './images/proyectos/obi.png';
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
    img: obi,
    title: 'GoldPrice',
    demo: 'https://vicovillca.github.io/GoldPrice',
    git: 'https://github.com/VicoVillca/Obi-FontEnd'
  },
  
];

