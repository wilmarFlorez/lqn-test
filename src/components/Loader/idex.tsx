import React from "react";
import { Spin } from "antd";
import "./styles.css";

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <Spin tip="loading" size="large" />
    </div>
  );
};
