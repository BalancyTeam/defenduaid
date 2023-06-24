import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 80px;
  gap: 42px;
  max-width: 100%;

    @media ${(props) => props.theme.media.tablet} {
    margin-top: 96px;
  }


`;

export const FooterLogo = styled.img`
  width: 150px;
  height: 16px;


    @media ${(props) => props.theme.media.tabletXl} {
    width: 228px;
    height: 24px;
  }

   @media ${(props) => props.theme.media.desktopXl} {
    width: 304px;
    height: 32px;
  }
`;

export const FooterText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 9px;
  line-height: 150%;
  color: #141414;

  >a {
    text-decoration: underline;
    color: #141414;
  }
`;
