import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border: ${(props) => [props.theme.borders.normal, props.theme.colors.border]};
  border-radius: ${(props) => props.theme.radii.medium};
  font-size: ${(props) => props.theme.fontSizes.s};
`;

export const SearchInput = styled.input`
  width: 100%;
  heigth: 100%;
  border: none;
  outline: none;
  //color: ${(props) => props.theme.colors.graySecondary};
  ::placeholder {
    ${(props) => props.theme.colors.graySecondary}
`;

export const Image = styled.img`
  width: 15px;
  heigth: 15px;
`;
