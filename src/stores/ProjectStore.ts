import { makeAutoObservable, action } from "mobx";
import { Project } from "../data/projects";

class ProjectStore {
  projects: Project[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchProjects();
  }

  fetchProjects = () => {
    this.initFetch();
    import("../data/projects").then(
      action((module) => {
        this.resolveFetch(module.projects);
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
}

export { ProjectStore };
