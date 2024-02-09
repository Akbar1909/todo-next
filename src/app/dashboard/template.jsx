"use client";
import { useEffect } from "react";

const DashboardTemplate = ({ children }) => {
  useEffect(() => {
    console.log("template");
  }, []);
  return (
    <div>
      DashboardTemplate
      {children}
    </div>
  );
};

export default DashboardTemplate;
