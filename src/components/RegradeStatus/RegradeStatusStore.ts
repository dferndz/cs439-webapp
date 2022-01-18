import { makeAutoObservable } from "mobx";
import { apiService } from "../../services/apiService";

type Regrade = {
  id: string;
  commit: string;
  project: string;
  status: string;
};

class RegradeStatusStore {
  regrades: Regrade[] = [];

  constructor() {
    makeAutoObservable(this);
    //this.fetchRegrades();
  }

  fetchRegrades = () => {};
}
