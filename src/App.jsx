import { Container } from "./styles";
import CardList from "./components/CardList/CardList";
import data from "./assets/data/data.json";

export const App = () => {
  return (
    <Container>
      <div>DFND</div>
      <CardList data={ data} />
    </Container>
  );
};
