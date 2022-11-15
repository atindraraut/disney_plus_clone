import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://cdn.vox-cdn.com/thumbor/0kw6ieKTdzGxVk-ApCKesrwQF2o=/0x0:2257x1320/2000x1333/filters:focal(1129x660:1130x661)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png"
          alt="img"
        />
      </Background>
      <ImageTitle>
        <img src="https://seeklogo.com/images/P/Pokemon-logo-0EAFBD7E4E-seeklogo.com.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-black.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 / 7m / Family / Fantasy / Kids / Animation</SubTitle>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into.
      </Description>
    </Container>
  );
};

export default Details;
const Container = styled.div`
  position: relative;
  padding: 30px;
  min-height: 100%;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0px 24px;
  margin-right: 22px;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249, 0.6);
  border: none;
  letter-spacing: 1.6px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 16px;
  border: 2px solid white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    font-size: 30px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  font-size: 15px;
  width: 50%;
  color: rgb(249, 249, 249);
`;
