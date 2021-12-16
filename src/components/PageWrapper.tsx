import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { defaultStores, storesContext } from "../stores";
import { theme } from "../theme";

type PageWrapperProps = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <storesContext.Provider value={defaultStores}>
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
    </storesContext.Provider>
  );
};

export { PageWrapper };
