import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";

class EnrollViewStore {
  code: string = "123";
  csid: string = "";
  eid: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    this.code = event.target.value;
  };

  handleChangeCsid = (event: ChangeEvent<HTMLInputElement>) => {
    this.csid = event.target.value;
  };

  handleChangeEid = (event: ChangeEvent<HTMLInputElement>) => {
    this.eid = event.target.value;
  };

  get isValid() {
    return this.code && this.csid && this.eid;
  }
}

export { EnrollViewStore };
