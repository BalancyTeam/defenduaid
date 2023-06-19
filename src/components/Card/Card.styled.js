import styled from "styled-components";

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: ${(p) => p.theme.space[4]}px;
  border-radius: ${(p) => p.theme.radii.normal};
  color: ${(p) => p.theme.colors.primary};
  border: 2px solid ${(p) => p.theme.colors.border};

  & > p:first-of-type {
    padding-bottom: ${(p) => p.theme.space[5]}px;
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: ${(props) => props.theme.fontWeights.ultraLight};
  }
`;

export const CardImage = styled.img`
  height: 100%; 
  object-fit: cover;
 
`;

export const TelegramImage = styled.img`
  height: 100%;
  object-fit: scale-down;
  object-position: center;
 
`;

export const ImageWrapper = styled.div`
  height: 120px;
  min-width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0px 0px;
`;

export const TelegramImageWrapper = styled.div`
  height: 120px; 
  overflow: hidden;
  border-radius: 8px 8px 0px 0px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(p) => p.theme.space[5]}px;
  padding-bottom: ${(p) => p.theme.space[3]}px;
`;

export const Title = styled.p`
  width: 80%;
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: 1.45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  overflow: hidden;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-inline: ${(p) => p.theme.space[8]}px;
  padding-block: 18px;
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.35;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.medium};
  border: none;
`;

export const ArrowIcon = styled.img`
  width: 10px;
  height: 10px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;
