import React from "react";
import "./SearchTask.css";

export const SearchTask = ({ searchValue, setSearchValue }) => {
  return (
    <label htmlFor="" className="search-bar-container">
      <input
        value={searchValue.trimStart()}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        type="text"
        id="searchBar"
        placeholder="Busca tu tarea aqui!"
      
      />
    </label>
  );
};
