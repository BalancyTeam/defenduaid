import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import { Image, SearchInput, SearchWrapper } from "./search.styled";

export const Search = ({ handleSearch }) => {
  return (
    <SearchWrapper>
      <Image src={searchIcon} alt="search icon" />
      <SearchInput
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Пошук"
      />
    </SearchWrapper>
  );
};
