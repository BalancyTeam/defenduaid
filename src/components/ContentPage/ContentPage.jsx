import { useState } from "react";
import CardList from "../CardList/CardList";
import { Filter } from "../Filter/Filter";
import { Pagination } from "../Pagination/Pagination"
import data from "../../assets/data/data.json";
import { ContentWraper } from "./ContentPage.styled";
import { Hero } from "../Hero/Hero";
import { usePagination } from "../../hooks/usePagination";

export const ContentPage = () => {
  const initialData = Object.freeze(data);
  const defaultCardsPerPage = 12;

  const { perPage, loadMore, setPerPage } = usePagination(defaultCardsPerPage);
  const [displayedData, setDisplayedData] = useState(initialData);

  const handleFilter = (param) => {
    if (param === "all") {
      setDisplayedData(initialData);
    } else {
      setDisplayedData(initialData.filter((item) => item.type === param));
    }

    setPerPage(defaultCardsPerPage)
  };

  const handleSearch = (value) => {
    setDisplayedData(
      initialData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );

    setPerPage(defaultCardsPerPage)
  };

  return (
    <ContentWraper>
      <Hero handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} />
      <CardList data={displayedData.slice(0, perPage)} />

      {displayedData.length > perPage && (
        <Pagination loadMore={loadMore} />
      )}
    </ContentWraper>
  );
};
