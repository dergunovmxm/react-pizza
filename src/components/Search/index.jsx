import React from "react";
import { FiSearch, FiXSquare } from "react-icons/fi";
import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  console.log(searchValue);
  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
      <input
        className={styles.serach}
        placeholder="Поиск..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      {searchValue && (
        <FiXSquare
          className={styles.close}
          onClick={(event) => {setSearchValue(''); event.stopPropagation(); }}
        />
      )}
    </div>
  );
};

export default Search;
