import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media ${(props) => props.theme.media.phone} {
    width: 360px;
    padding: 60px 16px 16px 16px;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 688px;
    padding: 55px 40px 32px 40px;
  }

  @media ${(props) => props.theme.media.tabletXl} {
    width: 944px;
    padding: 55px 40px 32px 40px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1040px;
    padding: 55px 120px 32px 120px;
  }

  @media ${(props) => props.theme.media.desktopXl} {
    width: 1424px;
    padding-top: 55px;
    padding-bottom: 32px;
  }
`;
