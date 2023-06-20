import React, { useState } from "react";
import { FilterWrapper, TabItem } from "./filter.styled";

export const Filter = ({ handleFilter }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, param) => {
    setActiveTab(index);
    handleFilter(param);
  };

  return (
    <FilterWrapper>
      <TabItem
        active={activeTab === 0}
        onClick={() => handleTabClick(0, "all")}
      >
        Усi
      </TabItem>
      <TabItem
        active={activeTab === 1}
        onClick={() => handleTabClick(1, "foundation")}
      >
        Фонди
      </TabItem>
      <TabItem
        active={activeTab === 2}
        onClick={() => handleTabClick(2, "telegram")}
      >
        Тг-канали
      </TabItem>
    </FilterWrapper>
  );
};
