import { Header } from "./components/Header/Header";
import { Container } from "./styles";
import { ContentPage } from "./components/ContentPage/ContentPage";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Container>
      <Header />
      <ContentPage />
      <Footer />
    </Container>
  );
};
