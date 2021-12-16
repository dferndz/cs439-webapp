import React from "react";
import { CardHeader, Grid } from "@mui/material";
import { observer } from "mobx-react";

import { ResourceItem } from "./ResourceItem";

type Resource = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const resources: Resource[] = [
  {
    title: "OH Queue",
    image: "https://utcshelphours.com/duck.png",
    description: "Queue for online and in-person office hours",
    link: "https://www.cs439.utcshelphours.com/",
  },
  {
    title: "Piazza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILMwWopf2PgWi5CPIlnPbmhRC3xWTztoH4w&usqp=CAU",
    description: "Communication portal for the class",
    link: "https://piazza.com/class/krqhq8m4va8hv",
  },
  {
    title: "OSdev",
    image:
      "data:image/png;base64,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",
    description: "Development resources for operating systems.",
    link: "https://wiki.osdev.org/Main_Page",
  },
];

const ResourcesCard = observer(() => {
  return (
    <React.Fragment>
      <CardHeader title="Resources" />
      <Grid container spacing={2}>
        {resources.map((resource: Resource, index: number) => (
          <Grid key={index} item xs={6} md={4}>
            <ResourceItem
              title={resource.title}
              image={resource.image}
              description={resource.description}
              link={resource.link}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
});

export { ResourcesCard };
