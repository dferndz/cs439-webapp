import React, { useCallback } from "react";
import { CardHeader, Box, Button, ButtonGroup } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import { observer } from "mobx-react";
import { useStores } from "../../stores";
import { Project } from "../../data/projects";

type ActiveProjectProp = {
  project: Project;
};

const ActiveProjectItem = ({ project }: ActiveProjectProp) => {
  const link = `https://www.cs.utexas.edu/~gheith/${project.info_site_name}.html`;
  const handleClick = useCallback(() => {
    window.open(link, "_blank");
  }, [link]);
  return (
    <ButtonGroup size="small" variant="outlined" color="secondary">
      <Button>
        <Box pt={1} pr={1}>
          <CircleIcon fontSize="small" color="success" />
        </Box>

        {project.name}
      </Button>
      {project.description && <Button>{project.description}</Button>}
      <Button onClick={handleClick} color="secondary">
        Go to website
      </Button>
    </ButtonGroup>
  );
};

const ActiveProject = observer(() => {
  const { projectStore } = useStores();

  return (
    <React.Fragment>
      <CardHeader title="Active project" />
      {projectStore.activeProjects.map((project: Project, index: number) => (
        <ActiveProjectItem key={index} project={project} />
      ))}
    </React.Fragment>
  );
});

export { ActiveProject };
