import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content>
        <Link to="/detail">
          <Wrap>
            <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png" />
          </Wrap>
        </Link>
        <Link to="/detail">
          <Wrap>
            <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png" />
          </Wrap>
        </Link>
        <Link to="/detail">
          <Wrap>
            <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png" />
          </Wrap>
        </Link>
        <Link to="/detail">
          <Wrap>
            <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png" />
          </Wrap>
        </Link>
        <Link to="/detail">
          <Wrap>
            <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season24/season24_ep04_ss03.png" />
          </Wrap>
        </Link>
      </Content>
    </Container>
  );
};

export default Movies;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(240, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: white;
  }
`;
