import { makeAutoObservable, action } from "mobx";
import { apiService } from "../services/apiService";
import { Resource, GenericStatus } from "../services/types";

class ResourceStore {
  resources: Resource[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchResources();
  }

  fetchResources = () => {
    this.initFetch();
    apiService.getResources(null).then(
      action((res) => {
        if (res.status === GenericStatus.Success && res.payload !== null) {
          this.resolveFetch(res.payload);
        } else {
          this.resolveFetch([]);
        }
      })
    );
  };

  initFetch = () => {
    this.resources = [];
    this.loading = true;
  };

  resolveFetch = (results: Resource[]) => {
    this.resources = results;
    this.loading = false;
  };
}

export { ResourceStore };
