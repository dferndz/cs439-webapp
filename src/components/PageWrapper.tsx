import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../theme";

type PageWrapperProps = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CS 439 Homepage
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export { PageWrapper };
