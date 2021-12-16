import { createContext, useContext } from "react";

import { ProjectStore } from "./ProjectStore";

type IStoreContext = {
  projectStore: ProjectStore;
};

const defaultStores: IStoreContext = {
  projectStore: new ProjectStore(),
};

const storesContext = createContext(defaultStores);

const useStores = () => useContext(storesContext);

export { defaultStores, useStores, storesContext };
