import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FilterWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  max-width: 100%;

  @media ${(props) => props.theme.media.phone} {
    gap: 8px;
    margin: 80px 0px 32px 0px;
  }

  @media ${(props) => props.theme.media.tablet} {
    gap: 24px;
    margin: 112px 0px 32px 0px;
  }

  @media ${(props) => props.theme.media.tabletXl} {
    margin: 112px 0px 32px 0px;
  }

  @media ${(props) => props.theme.media.desktop} {
    margin: 144px 0px 32px 0px;
  }
`;

export const TabItem = styled.li`
  cursor: pointer;
  padding: 12px 24px;
  border-radius: ${(props) => props.theme.radii.medium};
  overflow: hidden;
  user-select: none;
  outline: none;
  transition: 0.3s ease-in-out;
  background: ${(props) =>
    props.active ? theme.colors.secondary : theme.colors.grayPrimary};
  color: ${(props) =>
    props.active ? theme.colors.white : theme.colors.graySecondary};
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }
`;
