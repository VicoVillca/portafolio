import React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function ImageItem({item}) {
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
background:"black",
opacity:"0.8",
"& .MuiImageListItemBar-title": { color: "white" },  //styles for subtitle
}}
           title={item.title}
            actionIcon={<>
             <IconButton
             edge="start"
             size="small"
             sx={{color: "white"}}
                aria-label={`info about ${item.title}`}
                onClick={() => window.open(item.demo)}
              >
                <OpenInNewIcon />
              </IconButton>
              <IconButton
              size="small"
              sx={{color: "white"}}
                aria-label={`info about ${item.title}`}
                onClick={() => window.open(item.git)}
              >
                <GitHubIcon/>
              </IconButton>
              </>
            }
          />
        
              
        </ImageListItem>
  );
}