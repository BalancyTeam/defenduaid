import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 56px 16px 0px 16px;
  gap: 34px;
  max-width: 360px;
  /* height: 122px; */

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 56px 40px 0px 40px;
    gap: 384px;
    /* height: 80px; */
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    gap: 640px;
  }
  @media screen and (min-width: 1280px) {
    gap: 736px;
    padding: 56px 120px 0px 120px;
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1424px;
    padding: 56px 0px 0px;
    gap: 1044px;
    /* height: 88px; */
  }
`;

export const Logo = styled.img`
  width: 228px;
  height: 34px;
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 24px;
  }
  @media screen and (min-width: 1024px) {
    width: 228px;
    height: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 228px;
    height: 24px;
  }
  @media screen and (min-width: 1536px) {
    width: 304px;
    height: 32px;
  }
`;
