import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Box,
  Button,
} from "@mui/material";

const RegradesCard = () => {
  return (
    <Card>
      <CardHeader title="Regrade request" />
      <CardContent>
        <Box pt={2}>
          <TextField fullWidth label="CS ID" />
        </Box>
        <Box pt={2}>
          <TextField fullWidth label="Project" />
        </Box>
        <Box pt={2}>
          <TextField fullWidth label="Commit hash" />
        </Box>
        <Box pt={2}>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export { RegradesCard };
