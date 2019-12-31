import React from "react";
import "../App.css";
import { BrowserRouter } from "react-router-dom";

import {
  Grid,
  Box,
  ThemeProvider,
  createMuiTheme,
  Paper
} from "@material-ui/core";

import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";

import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

// Create theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink[500]
    },
    grey: {
      main: grey[50]
    }
  }
});

const customContainer = {
  maxWidth: "1000px",
  margin: "0 auto",
  height: "100%"
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={customContainer}>
        <Header />
        <BrowserRouter>
          <Box display={{ xs: "none", md: "initial" }}>
            <Grid container style={{ height: "calc(100% - 64px)" }}>
              <Grid item md={2}>
                <Menu />
              </Grid>
              <Grid item md={10} style={{ backgroundColor: "#f5f5f5" }}>
                <Content />
              </Grid>
            </Grid>
          </Box>
          <Box display={{ xs: "initial", md: "none" }}>
            <Grid container style={{ height: "calc(100% - 64px)" }}>
              <Grid
                item
                xs={12}
                style={{ backgroundColor: "#f5f5f5", height: "100%" }}
              >
                <Content />
              </Grid>
              <Grid item xs={12}>
                <MobileMenu />
              </Grid>
            </Grid>
          </Box>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}
