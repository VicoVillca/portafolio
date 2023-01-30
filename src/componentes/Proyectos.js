import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from './MediaCard';
import ButtonBases from './ButtonBases';
import TitlebarImageList from './TitlebarImageList';

export default function Proyectos() {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box sx={{ flexGrow: 5 }}>
     <TitlebarImageList/>
    </Box>
  );
}