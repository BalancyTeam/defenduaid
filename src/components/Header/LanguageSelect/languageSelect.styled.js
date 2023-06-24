import styled from "styled-components";

export const ContainerLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f6f6f9;
  border-radius: 5px;
  width: 76px;
  height: 32px;
  padding-bottom: 12px;
  @media screen and (min-width: 1024px) {
    padding-bottom: 0px;
  }
`;

export const Select = styled.select`
  font-family: "e-Ukraine";
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  border: 5px solid transparent;
  color: #141414;
  padding: 4px 16px;
`;
