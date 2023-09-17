import { HorizontalRule } from "@mui/icons-material";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Laptop from "./Laptop";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1 4em;
  height: 100%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 1em;
  }
`;



const Left = styled.div`
  flex: 2;
  height: 18em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.3em;
  margin-Left: 4em;
  background: #2a013154;
  border: 0.5px solid #908f9068;
  padding: 1.5em;
  border-radius: 30px;
  box-shadow: 10px 10px 20px #00000073;

  @media only screen and (max-width: 992px) {
    flex: 1;
    display: flex;
    margin: 0;
    justify-content: flex-end;
    align-self: flex-start;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0.3em 0;
  text-shadow: 0px 5px 12px #ff730063;
  

  @media only screen and (max-width: 992px) {
    width: 100vw;
    display: flex;
    align-self: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const Subtitle = styled.h3`
  display: flex;
  align-items: center;
  color: #ff7300;
  letter-spacing: 0.07em;
  margin: 0;
`;

const TitleText = styled.h2`
  font-size: 2.2em;
  margin: 0.5em 0;
  height: 2em;
  width: 100%;
  letter-spacing: 0.07em;
  color: #c7641360;
  -webkit-text-stroke: 1px #ffd3f2;
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;


const Right = styled.div`
  flex: 3;

  @media only screen and (max-width: 1200px) {
    flex: 2;
    width: 80%;
    height: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 992px) {
    flex: 1;
  }
`;


const Who = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const toRotate = [
    "Create FullStack applications...",
    "Strive for excellence in everything I do...",
    "Learn new technologies...",
    "Develop and improve new skills...",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };
  return (
    <Container id="about">
      <Wrapper>
        
        <Left>
          <Title>Who do I enjoy?</Title>
          <Subtitle>
            <HorizontalRule style={{ color: "white", width: "1.5em" }} />I Like to
          </Subtitle>
          <TitleText>{text}|</TitleText>
        </Left>
        <Right>
          <Canvas style={{ height: "90vh" }}>
            <OrbitControls enableZoom={false} autoRotate />
            <Stage environment="city" intensity={0.5}>
              <Laptop />
            </Stage>
          </Canvas>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Who;
