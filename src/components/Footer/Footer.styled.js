import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 88px;
  margin-bottom: 32px;

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

export const FooterLogo = styled.div`
  width: 150px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 240px;
    height: 24px;
  }
  @media screen and (min-width: 1536px) {
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

  color: #141414;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Link = styled.a`
  color: #141414;
  text-decoration: underline;
`;
