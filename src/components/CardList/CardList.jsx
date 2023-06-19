import Card from "../Card/Card";
import { StyledList } from "./CardList.styled";

const CardList = ({ data }) => {
  return (
    <StyledList>
      {data.map((item) => (
        <Card data={item} key={item.title} />
      ))}
    </StyledList>
  );
};

export default CardList;
