import * as React from "react";
import Box from "@mui/material/Box";

//FORMULARIOS
import Grid from "@mui/material/Grid";
// componentes de card

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
//imagenes de proyectos
import portafolio from "./images/proyectos/portafolio.png";
import obi from "./images/proyectos/obi.png";
import goldprice from "./images/proyectos/goldprice.png";
import "../Cards.css";
export default function Proyectos() {
  return (
    <Box sx={{ width: '100%',height:'100%'}}>
      
      <h1>Proyectos</h1>
      {/** probamos grid */}
      <Grid container  sx={{pr:2, pl:2 }}justifyContent="center"  columns={{ xs: 4, sm: 8, md: 13 }} gap={3}>
        {itemData.map((item) => (
          <Grid className="card" item xs={4} sm={8} md={4} key={item.title} sx={{
            
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}>
            <img alt="green iguana" src={item.img} />
            <div className="info">
              <h1>{item.title}</h1>
              <p>
                {item.descripcion}
              </p>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => window.open(item.demo)}>
                  <OpenInNewIcon />
                  Demo
                </Button>
                <Button onClick={() => window.open(item.git)}>
                  <GitHubIcon />
                  Codigo
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        ))}
      </Grid>
      <h1></h1>
    </Box>
  );
}

const itemData = [
  {
    img: portafolio,
    title: "Portafolio",
    descripcion:"My portafolio desarrollado con reactjs y gitpages",
    demo: "https://vicovillca.github.io/portafolio/",
    git: "https://github.com/VicoVillca/portafolio",
  },
  {
    img: obi,
    title: "ObiAdmin",
    descripcion:"Sistema de gestionde los tutores coordinadores y estudiantes en OBI.",
    demo: "https://obi-font-end.vercel.app/",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    img: goldprice,
    title: "GoldPrice",
    descripcion:"herramienta para calcular el precio del oro para la compra segun la onza troy",
    demo: "https://vicovillca.github.io/GoldPrice",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
];
