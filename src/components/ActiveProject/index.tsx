import React, { useCallback } from "react";
import { CardHeader, Box, Card, CardContent, Grid, Link } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LinkIcon from "@mui/icons-material/Link";

import { observer } from "mobx-react";
import { useStores } from "../../stores";
import { Project } from "../../data/projects";

type ActiveProjectProp = {
  project: Project;
};

const ActiveProjectItem = ({ project }: ActiveProjectProp) => {
  const link = `https://www.cs.utexas.edu/~gheith/${project.info_site_name}.html`;

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={1}>
            <CircleIcon style={{ fontSize: 12 }} color="success" />
          </Grid>
          <Grid item>{project.name}</Grid>
          <Grid item>
            <Box pl={2}>
              <Link href={link} target="_blank" underline="hover">
                Go to website <LinkIcon style={{ fontSize: 15 }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pt={2}>{project.description}</Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ActiveProject = observer(() => {
  const { projectStore } = useStores();

  if (!projectStore.activeProjects.length) return null;

  return (
    <React.Fragment>
      <CardHeader title="Active project" />
      {projectStore.activeProjects.map((project: Project, index: number) => (
        <Box key={index} pb={2}>
          <ActiveProjectItem project={project} />
        </Box>
      ))}
    </React.Fragment>
  );
});

export { ActiveProject };
