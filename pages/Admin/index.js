import React, { useState } from "react";
import AdminCss from "/styles/Admin.module.css";
import Contact from "./Contact";

const Admin = () => {
  return (
    <React.Fragment>
      <div className={AdminCss.container}>
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default Admin;
