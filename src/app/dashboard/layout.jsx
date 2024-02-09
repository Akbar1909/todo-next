"use client";
import React, { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    console.log("layout");
  }, []);

  return (
    <>
      <header>header</header>

      {children}
    </>
  );
};

export default DashboardLayout;
