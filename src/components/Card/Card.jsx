import {
  CardItem,
  Button,
  CheckIcon,
  TitleWrapper,
  CardImage,
  ImageWrapper,
  ArrowIcon,
  Title
} from "./Card.styled.js";
import checkIcon from "../../assets/icons/check.svg";
import arrowIcon from "../../assets/icons/arrow.svg";

const Card = ({ data }) => {
  return (
    <CardItem>
      <ImageWrapper>
        <CardImage src={data.imageUrl} alt="foundation logo" />
      </ImageWrapper>
      <TitleWrapper>
        <Title>{data.title}</Title>
        <CheckIcon src={checkIcon} alt="check icon" />
      </TitleWrapper>

      <p>{data.description}</p>
      <Button href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <span>Задонатити</span>
        <ArrowIcon src={arrowIcon} alt="arrow icon" />
      </Button>
    </CardItem>
  );
};

export default Card;
