import React from "react";

import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { faClose } from "@fortawesome/free-solid-svg-icons";
const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && ( <FontAwesomeIcon
        onClick={() => setSearchValue('')}
        className={styles.clearIcon}
        icon={faClose}
      >
      </FontAwesomeIcon>)}
    </div>
  );
};

export default Search;
