import { createContext, useContext } from "react";

import { ProjectStore } from "./ProjectStore";
import { ResourceStore } from "./ResourceStore";

type IStoreContext = {
  projectStore: ProjectStore;
  resourceStore: ResourceStore;
};

const defaultStores: IStoreContext = {
  projectStore: new ProjectStore(),
  resourceStore: new ResourceStore(),
};

const storesContext = createContext(defaultStores);

const useStores = () => useContext(storesContext);

export { defaultStores, useStores, storesContext };
