import React, { useCallback } from "react";
import { observer } from "mobx-react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Box, Button, CardHeader } from "@mui/material";

import { useStores } from "../../stores";
import { Project } from "../../data/projects";

type DataLinkProps = {
  link: string;
};

const DataLink = ({ link }: DataLinkProps) => {
  const handleClick = useCallback(() => {
    window.open(link, "_blank");
  }, [link]);

  return (
    <Button onClick={handleClick} size="small" color="secondary">
      Go to website
    </Button>
  );
};

const makeWebsiteLink = (params: GridRenderCellParams<string>) => {
  const link = `https://www.cs.utexas.edu/~gheith/${params.value}.html`;

  return <DataLink link={link} />;
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Project", width: 80 },
  { field: "description", headerName: "Description", width: 200 },
  {
    field: "site",
    headerName: "Website",
    width: 150,
    renderCell: makeWebsiteLink,
  },
];

const ProjectsCard = observer(() => {
  const { projectStore } = useStores();
  const rows: GridRowsProp = projectStore.projects
    ? projectStore.projects.map((project: Project, index: number) => ({
        id: index,
        name: project.name,
        description: project.description || "",
        site: project.info_site_name || "",
      }))
    : [];

  return (
    <React.Fragment>
      <CardHeader title="Projects" />
      <Box pb={4}>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Box>
    </React.Fragment>
  );
});

export { ProjectsCard };
