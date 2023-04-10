import * as React from "react";

import Proyectos from "./Proyectos";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonAppBar from "./ButtonAppBar";
import Tablas from "./Tablas";

import TablasPrueba from "./TablasPrueba";
import { red } from "@mui/material/colors";
const theme = createTheme();

export default function SignInSide() {
  return (
    <div>
      <ThemeProvider theme={theme}>
 
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            component={Paper}
            elevation={6}
            square
            sx={{ height: "100vh" }}
           
          >
            <TablasPrueba />
          </Grid>

          <Grid item xs={12} sm={4} md={8} style={{backgroundImage:'url("https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_520/MTkzOTUzODU0MDkyNjE3MjIx/particlesjs-examples.webp")',backgroundColor:red}}>
            <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
              <Proyectos />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
