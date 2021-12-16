import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Project } from "../../data/projects";
import { RegradesViewStore, View, RegradeRequestStatus } from "./RegradesStore";

const RegradesCard = observer(() => {
  const [store] = useState(() => new RegradesViewStore());

  return (
    <Card>
      <CardHeader title="Regrade request" />
      <CardContent>
        {store.view === View.FormView && (
          <form onSubmit={store.handleSubmit}>
            <Box pt={2}>
              <TextField
                id="username"
                name="username"
                value={store.csid}
                autoComplete="username"
                fullWidth
                label="CS ID"
                disabled={store.submitting}
                onChange={store.handleChangeCsid}
              />
            </Box>
            <Box pt={2}>
              <TextField
                id="password"
                name="password"
                value={store.code}
                type="password"
                autoComplete="current-password"
                fullWidth
                label="Personal code"
                helperText="This is your personal access code"
                disabled={store.submitting}
                onChange={store.handleChangeCode}
              />
            </Box>
            <Box pt={2}>
              <FormControl fullWidth>
                <InputLabel>Project</InputLabel>
                <Select
                  displayEmpty
                  label="Project"
                  value={store.project}
                  disabled={store.submitting}
                  onChange={store.handleChangeProject}
                >
                  {store.loading ? (
                    <MenuItem disabled value="null">
                      Loading...
                    </MenuItem>
                  ) : (
                    store.projects &&
                    store.projects.map((project: Project, index: number) => (
                      <MenuItem key={index} value={project.name}>
                        {project.name}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box pt={2}>
              <TextField
                fullWidth
                value={store.commit}
                label="Commit hash"
                helperText="Full commit hash"
                disabled={store.submitting}
                onChange={store.handleChangeCommit}
              />
            </Box>
            <Box pt={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!store.isValid || store.submitting}
              >
                {store.submitting ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </form>
        )}
        {store.view === View.SuccessView && (
          <React.Fragment>
            Request successfully sent. You will receive a confirmation email.
            <Box pt={2}>
              <Button
                onClick={store.handleReset}
                variant="contained"
                color="secondary"
                fullWidth
              >
                Start again
              </Button>
            </Box>
          </React.Fragment>
        )}

        {store.view === View.ErrorView && (
          <React.Fragment>
            {store.status === RegradeRequestStatus.AuthError
              ? "Your CSID or personal code are incorrect."
              : "Something went wrong"}
            <Box pt={2}>
              <Button
                onClick={store.handleReset}
                variant="contained"
                color="secondary"
                fullWidth
              >
                Try again
              </Button>
            </Box>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
});

export { RegradesCard };
