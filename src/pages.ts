import React from "react";

import { HomePage } from "./containers/HomePage";

type Page = {
  name: string;
  path: string;
  exact?: boolean;
  component?: React.ElementType;
};

const pages: Page[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
  },
];

export { pages };
export type { Page };
