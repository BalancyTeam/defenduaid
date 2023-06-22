import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 88px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 120px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-top: 144px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const FooterLogo = styled.img`
  padding: 16px;
  padding-left: 16px;
  width: 150px;
  height: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-bottom: 32px;
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-bottom: 32px;
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 120px;
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1536px) {
    padding-left: 322px;
    width: 320px;
    height: 32px;
  }
`;

export const FooterText = styled.p`
  font-family: "e-Ukraine";
  font-style: normal;
  font-weight: 200;
  font-size: 9px;
  line-height: 150%;
  padding-bottom: 16px;
  color: #141414;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 32px;
  }
`;
