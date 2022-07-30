import React from "react";

import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <div className={styles.root}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch}></FontAwesomeIcon>
      <input className={styles.input} type="text" placeholder="Поиск пиццы..." />
    
    
    </div>
  );
};

export default Search;
