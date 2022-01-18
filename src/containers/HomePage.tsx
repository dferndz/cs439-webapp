import React from "react";
import { Grid, Container, Box } from "@mui/material";

import { Banner } from "../components/Banner";
import { RegradesCard } from "../components/RegradesCard";
import { EnrollCard } from "../components/EnrollCard";
import { ResourcesCard } from "../components/ResourcesCard";
import { ProjectsCard } from "../components/ProjectsCard";
import { ActiveProject } from "../components/ActiveProject";
import { RegradeStatusCard } from "../components/RegradeStatus";

const HomePage = () => {
  return (
    <Container style={{ marginTop: 25 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RegradesCard />
          <Box pt={2}>
            <ActiveProject />
          </Box>
          <Box pt={2}>
            <ProjectsCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Box>
            <EnrollCard />
          </Box>
          <Box pt={4}>
            <ResourcesCard />
          </Box>
          <Box pt={4}>
            <RegradeStatusCard />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { HomePage };
