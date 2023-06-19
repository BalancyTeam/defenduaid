import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import { Image, SearchInput, SearchWrapper } from "./search.styled";

export const Search = () => {
  return (
    <SearchWrapper>
      <Image src={searchIcon} alt="search icon" />
      <SearchInput type="text" placeholder="Пошук" />
    </SearchWrapper>
  );
};
