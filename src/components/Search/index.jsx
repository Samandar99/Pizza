import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    },1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value)
  
  };

  return (
    <div className={styles.root}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faSearch}
      ></FontAwesomeIcon>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {value && (
        <FontAwesomeIcon
          onClick={onClickClear}
          className={styles.clearIcon}
          icon={faClose}
        ></FontAwesomeIcon>
      )}
    </div>
  );
};

export default Search;
