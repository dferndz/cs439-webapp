import React from "react";
import { CardHeader, CardContent, Grid, CircularProgress } from "@mui/material";
import { observer } from "mobx-react";

import { ResourceItem } from "./ResourceItem";
import { Resource } from "../../services/types";
import { useStores } from "../../stores";

const ResourcesCard = observer(() => {
  const { resourceStore } = useStores();

  return (
    <React.Fragment>
      <CardHeader title="Resources" />
      {resourceStore.loading ? (
        <CardContent>
          <CircularProgress />
        </CardContent>
      ) : (
        <Grid container spacing={2}>
          {resourceStore.resources.map((resource: Resource, index: number) => (
            <Grid key={index} item xs={6} md={4}>
              <ResourceItem
                title={resource.title}
                image={resource.image_src}
                description={resource.description}
                link={resource.url}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
});

export { ResourcesCard };
