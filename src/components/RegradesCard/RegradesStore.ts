import { SelectChangeEvent } from "@mui/material/Select";
import { makeAutoObservable, action } from "mobx";
import { ChangeEvent, FormEvent } from "react";

import {
  RegradeRequestResponse,
  RegradeRequestStatus,
} from "../../services/types";
import { defaultStores } from "../../stores";
import { apiService } from "../../services/apiService";

const validateCommit = (commit: string) => {
  return commit.length === 40;
};

enum View {
  FormView,
  SuccessView,
  ErrorView,
}

class RegradesViewStore {
  code: string = "";
  csid: string = "";
  project: string = "";
  commit: string = "";
  projectStore = defaultStores.projectStore;
  submitting: boolean = false;
  view: View = View.FormView;
  status: RegradeRequestStatus = RegradeRequestStatus.Success;

  constructor() {
    makeAutoObservable(this);
  }

  setProject = (value: string) => {
    this.project = value;
  };

  handleChangeProject = (event: SelectChangeEvent<string>) => {
    this.project = event.target.value;
  };

  handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    this.code = event.target.value;
  };

  handleChangeCsid = (event: ChangeEvent<HTMLInputElement>) => {
    this.csid = event.target.value;
  };

  handleChangeCommit = (event: ChangeEvent<HTMLInputElement>) => {
    this.commit = event.target.value;
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.submitting = true;
    apiService.postRegradeRequest(this.payload).then(
      action((res: RegradeRequestResponse) => {
        this.status = res.status;

        switch (res.status) {
          case RegradeRequestStatus.Success:
            this.view = View.SuccessView;
            break;
          default:
            this.view = View.ErrorView;
            break;
        }
        this.submitting = false;
      })
    );
  };

  handleReset = () => {
    this.code = "";
    this.csid = "";
    this.commit = "";
    this.project = "";

    this.submitting = false;
    this.status = RegradeRequestStatus.Success;
    this.view = View.FormView;
  };

  get payload() {
    return {
      code: this.code,
      csid: this.csid,
      project: this.project,
      commit: this.commit,
    };
  }

  get loading() {
    return this.projectStore.loading;
  }

  get projects() {
    return this.projectStore.projects;
  }

  get isValid() {
    return (
      this.code && this.csid && this.project && validateCommit(this.commit)
    );
  }
}

export { RegradesViewStore, View, RegradeRequestStatus };
