import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PageWrapper } from "./components/PageWrapper";
import { Page, pages } from "./pages";

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          {pages.map((page: Page, index: number) => (
            <Route
              key={index}
              path={page.path}
              element={page.component && <page.component />}
            />
          ))}
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
