import React from "react";
import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";

import OSBannerPicture from "../assets/os-banner.png";

const Banner = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={OSBannerPicture}
        alt="green iguana"
      />
      <CardHeader title="Welcome to CS 439!" />
      <CardContent>
        Here you will find information about assignments, regrades, etc.
      </CardContent>
    </Card>
  );
};

export { Banner };
