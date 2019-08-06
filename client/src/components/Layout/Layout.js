import React from "react";

import style from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={style.Layout}> {children} </div>
);

export default Layout;
