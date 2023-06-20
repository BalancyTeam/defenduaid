import React, { useState } from "react";
import CardList from "../CardList/CardList";
import { Filter } from "../Filter/Filter";
import data from "../../assets/data/data.json";
import { ContentWraper } from "./ContentPage.styled";
import { Hero } from "../Hero/Hero";

export const ContentPage = () => {
  const initialData = Object.freeze(data);
  const [displayedData, setDisplayedData] = useState(initialData);

  const handleFilter = (param) => {
    if (param === "all") {
      setDisplayedData(initialData);
    } else {
      setDisplayedData(initialData.filter((item) => item.type === param));
    }
  };

  const handleSearch = (value) => {
    setDisplayedData(
      initialData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <ContentWraper>
      <Hero handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} />
      <CardList data={displayedData} />
    </ContentWraper>
  );
};
