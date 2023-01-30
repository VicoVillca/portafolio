import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
export default function ActionAreaCard() {
  const [isShown, setIsShown] = useState(false);
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/10/hipertextual-que-ningun-animal-tiene-tres-patas-2019533984.jpg?fit=1200%2C800&quality=60&strip=all&ssl=1"
          alt="green iguana"
        >
        </CardMedia>
      </CardActionArea>
      
    </Card>
  );
}