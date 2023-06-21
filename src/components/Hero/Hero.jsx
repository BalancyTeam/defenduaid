
import { Search } from "../Search/Search";
import {
  HeroContent,
  HeroHeader,
  HeroSubHeader,
  HeroSubHeaderBold,
  HeroWrapper,
} from "./hero.styled";
import PropTypes from 'prop-types';

export const Hero = ({ handleSearch }) => {
  return (
    <HeroWrapper>
      <HeroHeader>Спільними зусиллями до перемоги</HeroHeader>
      <HeroContent>
        <HeroSubHeaderBold>Шукайте, фільтруйте, досліджуйте.</HeroSubHeaderBold>
        <HeroSubHeader>
          20+ перевірених фондів та telegram-каналів для донату
        </HeroSubHeader>
      </HeroContent>
      <Search handleSearch={(e) => handleSearch(e)} />
    </HeroWrapper>
  );
};

Hero.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
