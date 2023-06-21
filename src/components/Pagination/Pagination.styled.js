import styled from "styled-components";

export const LoadMoreBtn= styled.button`
  display: block;
  margin: 40px auto 0;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.graySecondary};
  font-family: e-Ukraine, sans-serif;
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-decoration: underline;
  cursor: pointer;
`;