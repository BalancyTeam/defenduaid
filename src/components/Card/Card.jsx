import {
  CardItem,
  Button,
  CheckIcon,
  TitleWrapper,
  CardImage,
  ImageWrapper,
  ArrowIcon,
  Title,
  TelegramImage,
  TelegramImageWrapper
} from "./Card.styled.js";
import checkIcon from "../../assets/icons/check.svg";
import arrowIcon from "../../assets/icons/arrow.svg";

const Card = ({ data }) => {
  return (
    <CardItem>
      {data.type === "foundation" ? (
        <ImageWrapper>
          <CardImage src={data.imageUrl} alt={`${data.type} logo`} />
        </ImageWrapper>
      ) : (
        <TelegramImageWrapper>
          <TelegramImage src={data.imageUrl} alt={`${data.type} logo`} />
        </TelegramImageWrapper>
      )}
      
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
