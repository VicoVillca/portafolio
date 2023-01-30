import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function ImageItem({item}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <ImageListItem  >
         <img
            src={`${item.img}?w=548&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />

<ImageListItemBar

sx={{margin:"1rem",
borderRadius:".5rem",
background:"white",
opacity:"0.8",
"& .MuiImageListItemBar-title": { color: "black" },  //styles for subtitle
}}
           title={item.title}
            actionIcon={<>
             <IconButton
             edge="start"
             size="small"
                color="primary"
                aria-label={`info about ${item.title}`}
              >
                <OpenInNewIcon />
              </IconButton>
              <IconButton
              size="small"
               color="primary"
                aria-label={`info about ${item.title}`}
              >
                <GitHubIcon/>
              </IconButton>
              </>
            }
          />
        
              
        </ImageListItem>
  );
}