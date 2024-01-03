import { lazy, Suspense } from "react";
import HomePage from "../pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/:helpId",
    component: lazy(
      () => import("../pages/HelpMainContentPage/HelpMainContentPage")
    )
  }
];

const RoutesApplication = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ path, component: Component }, key) => {
            return <Route path={path} element={<Component />} key={key} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesApplication;
