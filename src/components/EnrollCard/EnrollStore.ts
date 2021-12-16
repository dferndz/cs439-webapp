import { makeAutoObservable, action } from "mobx";
import { ChangeEvent, FormEvent } from "react";

import { apiService } from "../../services/apiService";
import { AccessCodeRequestStatus } from "../../services/types";

enum View {
  FormView,
  SuccessView,
  ErrorView,
}

class EnrollViewStore {
  csid: string = "";
  eid: string = "";
  submitting: boolean = false;
  status: AccessCodeRequestStatus = AccessCodeRequestStatus.Success;
  view: View = View.FormView;

  constructor() {
    makeAutoObservable(this);
  }

  handleChangeCsid = (event: ChangeEvent<HTMLInputElement>) => {
    this.csid = event.target.value;
  };

  handleChangeEid = (event: ChangeEvent<HTMLInputElement>) => {
    this.eid = event.target.value;
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.submitting = true;

    apiService.postRequestAccessCode(this.payload).then(
      action((res) => {
        this.status = res.status;

        if (res.status === AccessCodeRequestStatus.Success) {
          this.view = View.SuccessView;
        } else {
          this.view = View.ErrorView;
        }

        this.submitting = false;
      })
    );
  };

  handleReset = () => {
    this.csid = "";
    this.eid = "";
    this.view = View.FormView;
    this.status = AccessCodeRequestStatus.Success;
    this.submitting = false;
  };

  get payload() {
    return {
      csid: this.csid,
      eid: this.eid,
    };
  }

  get isValid() {
    return this.csid && this.eid;
  }
}

export { EnrollViewStore, View, AccessCodeRequestStatus };
