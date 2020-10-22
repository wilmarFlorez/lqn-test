import React from "react";
import { Routes } from "../routes";
import { StarwarsProvider } from "./StarwarsContext";
import { AppProvider } from "./App";

export const Provider: React.FC = () => (
  <AppProvider>
    <StarwarsProvider>
      <Routes />
    </StarwarsProvider>
  </AppProvider>
);
