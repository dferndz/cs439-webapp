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
import { EnrollViewStore, View, AccessCodeRequestStatus } from "./EnrollStore";
import { observer } from "mobx-react";

const EnrollCard = observer(() => {
  const [store] = useState(() => new EnrollViewStore());

  return (
    <Card>
      <CardHeader title="Get an access code" />
      <CardContent>
        First time around? Get a personal code to submit regrade requests.
        {store.view === View.FormView && (
          <form onSubmit={store.handleSubmit}>
            <Box pt={2}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={5}>
                  <TextField
                    fullWidth
                    label="CSID"
                    value={store.csid}
                    onChange={store.handleChangeCsid}
                    disabled={store.submitting}
                  />
                </Grid>
                <Grid item xs={6} md={5}>
                  <TextField
                    fullWidth
                    label="UT eID"
                    value={store.eid}
                    onChange={store.handleChangeEid}
                    disabled={store.submitting}
                  />
                </Grid>

                <Grid item xs={12} md={2} style={{ display: "flex" }}>
                  <Button
                    disabled={!store.isValid || store.submitting}
                    fullWidth
                    color="secondary"
                    variant="contained"
                    type="submit"
                  >
                    {store.submitting ? "Submitting..." : "Submit"}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  You will receive a verification email with a personal code in
                  your CS email.
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
        {store.view === View.SuccessView && (
          <React.Fragment>
            <p>You will receive an email with a personal access code.</p>
            <Button onClick={store.handleReset}>Start Again</Button>
          </React.Fragment>
        )}
        {store.view === View.ErrorView && (
          <React.Fragment>
            {store.status === AccessCodeRequestStatus.NotRegistered && (
              <p>
                Your UT eID is not yet registered in the system. Please contact
                a TA.
              </p>
            )}
            {store.status === AccessCodeRequestStatus.MatchingError && (
              <p>Your UT eID and CS ID do not match. Please contact a TA.</p>
            )}
            {store.status === AccessCodeRequestStatus.ServerError && (
              <p>Something went wrong. Please contact a TA.</p>
            )}
            <Button onClick={store.handleReset}>Try Again</Button>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
});

export { EnrollCard };
