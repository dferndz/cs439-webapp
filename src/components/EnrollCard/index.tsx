import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { EnrollViewStore } from "./EnrollStore";
import { observer } from "mobx-react";

const EnrollCard = observer(() => {
  const [store] = useState(() => new EnrollViewStore());

  return (
    <Card>
      <CardHeader title="Get an access code" />
      <CardContent>
        First time around? Get a personal code to submit regrade requests.
        <Box pt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={5}>
              <TextField
                fullWidth
                label="CSID"
                value={store.csid}
                onChange={store.handleChangeCsid}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                fullWidth
                label="UT eID"
                value={store.eid}
                onChange={store.handleChangeEid}
              />
            </Grid>

            <Grid item xs={12} md={2} style={{ display: "flex" }}>
              <Button
                disabled={!store.isValid}
                fullWidth
                color="secondary"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              You will receive a verification email with a personal code in your
              CS email.
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
});

export { EnrollCard };
