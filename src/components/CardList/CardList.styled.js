import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  gap: ${(p) => p.theme.space[6]}px;
  grid-template-columns: 1fr;

  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 32px;
  }
`;
