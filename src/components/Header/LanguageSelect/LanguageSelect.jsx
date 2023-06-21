import React, { useState } from "react";
import {ContainerLanguage, Select} from "./languageSelect.styled"


export const LanguageSelect = () =>{
  const [selectedLanguage, setselectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setselectedLanguage(event.target.value);
  };
  return (
    <ContainerLanguage>
      <label htmlFor="language-select"></label>
      <Select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="ua">ua</option>
        <option value="en">en</option>
      </Select>
    </ContainerLanguage>
  );
}
