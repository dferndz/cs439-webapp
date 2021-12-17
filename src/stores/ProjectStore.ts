import { makeAutoObservable, action } from "mobx";
import { apiService } from "../services/apiService";
import { GenericStatus, Project } from "../services/types";

class ProjectStore {
  projects: Project[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchProjects();
  }

  fetchProjects = () => {
    this.initFetch();
    apiService.getProjects(null).then(
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
    this.loading = true;
  };

  resolveFetch = (results: Project[]) => {
    this.projects = results;
    this.loading = false;
  };

  get activeProjects() {
    return this.projects.filter((project: Project) => project.active);
  }
}

export { ProjectStore };
