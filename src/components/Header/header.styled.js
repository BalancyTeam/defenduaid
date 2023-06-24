import styled from "styled-components";

export const HeaderStyle = styled.header`
  max-width: 100%;
  margin-bottom: 80px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 112px;
  }

  @media ${(props) => props.theme.media.desktop} {
     margin-bottom: 144px;
  }
`;

export const Logo = styled.img`
  width: 228px;
  height: 34px;
  
  @media ${(props) => props.theme.media.tablet} {
    width: 228px;
    height: 24px;
  }

   @media ${(props) => props.theme.media.desktopXl} {
    width: 304px;
    height: 32px;
  }
`;
