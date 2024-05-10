import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import SingleProductView from "./views/SingleProduct/SingleProduct";
import Dashboard from "./views/Dashboard/Dashboard";

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/:productId" element={<SingleProductView />} />
    </RouterRoutes>
  );
};

export default Routes;
