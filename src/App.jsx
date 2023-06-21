import { Header } from "./components/Header/Header";
import { Container } from "./styles";
import { ContentPage } from "./components/ContentPage/ContentPage";

export const App = () => {
  return (
    <Container>
      <Header />
      <ContentPage />
    </Container>
  );
};
