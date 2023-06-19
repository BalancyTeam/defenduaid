import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${(props) => props.theme.media.mobile} {
    padding: 45px 0px 0px;
  }

  @media ${(props) => props.theme.media.tablet} {
    padding: 16px 0px 0px;
  }

  @media ${(props) => props.theme.media.tabletXl} {
    padding: 16px 0px 0px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 32px 0px 0px;
  }

  @media ${(props) => props.theme.media.desktopXl} {
    padding: 32px 0px 0px;
  }
`;

export const HeroHeader = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.medium};

  @media ${(props) => props.theme.media.mobile} {
    font-size: 38px;
  }

  @media ${(props) => props.theme.media.tablet} {
    font-size: 54px;
  }

  @media ${(props) => props.theme.media.tabletXl} {
    font-size: 70px;
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: 70px;
  }

  @media ${(props) => props.theme.media.desktopXl} {
    font-size: 100px;
  }
`;

export const HeroContent = styled.div``;

export const HeroSubHeader = styled.h4`
  font-weight: ${(props) => props.theme.fontWeights.thin};

  @media ${(props) => props.theme.media.mobile} {
    font-size: ${(props) => props.theme.fontSizes.s};
  }

  @media ${(props) => props.theme.media.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s};
  }

  @media ${(props) => props.theme.media.tabletXl} {
    font-size: ${(props) => props.theme.fontSizes.s};
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }

  @media ${(props) => props.theme.media.desktopXl} {
    font-size: 25px;
  }
`;

export const HeroSubHeaderBold = styled.h4`
  font-weight: ${(props) => props.theme.fontWeights.normal};

  @media ${(props) => props.theme.media.mobile} {
    font-size: ${(props) => props.theme.fontSizes.m};
  }

  @media ${(props) => props.theme.media.tablet} {
    font-size: ${(props) => props.theme.fontSizes.m};
  }

  @media ${(props) => props.theme.media.tabletXl} {
    font-size: ${(props) => props.theme.fontSizes.m};
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }

  @media ${(props) => props.theme.media.desktopXl} {
    font-size: 25px;
  }
`;
