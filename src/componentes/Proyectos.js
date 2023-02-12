import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import ImageItem from "./ImageItem";
//FORMULARIOS
import Grid from "@mui/material/Grid";
// componentes de card

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
//{"/*<ImageItem item={item} key={item.img}/>*/}
//imagenes de proyectos
import portafolio from "./images/proyectos/portafolio.png";
import obi from "./images/proyectos/obi.png";
import goldprice from "./images/proyectos/golgprice.png";
import Divider from "@mui/material/Divider";
export default function Proyectos() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ flexGrow: 5 }}>
      <ListSubheader component="div">Proyectos</ListSubheader>
      <ImageList
        cols={matches ? 3 : 1}
        rowHeight={164}
        sx={{ pr: 2, pl: 2 }}
      >
        {itemData.map((item) => (
          <Card
            key={item.title}
            sx={{ m: 1, border: " grey", borderRadius: 5 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="green iguana"
              />
            </CardActionArea>
            <Divider light />
            <CardActions>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h7" component="div">
                    {item.title}
                  </Typography>
                </Grid>

                <Grid item>
                  <IconButton
                    edge="start"
                    size="small"
                    color="primary"
                    onClick={() => window.open(item.demo)}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(item.git)}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              </Grid>
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
    title: "Portafolio",
    demo: "https://vicovillca.github.io/portafolio/",
    git: "https://github.com/VicoVillca/portafolio",
  },
  {
    img: obi,
    title: "ObiAdmin",
    demo: "https://obi-font-end.vercel.app/",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    img: goldprice,
    title: "GoldPrice",
    demo: "https://vicovillca.github.io/GoldPrice",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
];
