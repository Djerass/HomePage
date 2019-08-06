import React from "react";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Weather />
    </div>
  );
};

export default Header;
