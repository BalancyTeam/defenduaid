import { Hero } from "./components/Hero/Hero";
import { Container } from "./styles";
import CardList from "./components/CardList/CardList";
import data from "./assets/data/data.json";

export const App = () => {
  return (
    <Container>
      <div>DFND</div>
      <Hero />
      <CardList data={data} />
    </Container>
  );
};
