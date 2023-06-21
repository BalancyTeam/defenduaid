import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 80px;
  padding-bottom: 32px;
  gap: 42px;
  max-width: 360px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 96px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const FooterLogo = styled.img`
  width: 150px;
  height: 16px;

  @media screen and (min-width: 768px) {
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

export const FooterText = styled.p`
  font-family: "e-Ukraine";
  font-style: normal;
  font-weight: 200;
  font-size: 9px;
  line-height: 150%;
  color: #141414;
`;
