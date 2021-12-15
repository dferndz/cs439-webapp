import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Card, Container } from "@mui/material";

import { Banner } from "../components/Banner";
import { RegradesCard } from "../components/RegradesCard";

const HomePage = () => {
  return (
    <Container style={{ marginTop: 25 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RegradesCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export { HomePage };
