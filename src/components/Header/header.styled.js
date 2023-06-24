import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 30px;

  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 0px;
    margin-bottom: 116px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    margin-bottom: 112px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1424px;
  }
`;

export const Logo = styled.div`
  width: 228px;
  height: 34px;
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 228px;
    height: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 228px;
    height: 25px;
  }
  @media screen and (min-width: 1536px) {
    width: 304px;
    height: 32px;
  }
`;
