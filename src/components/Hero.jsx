import { styled } from "styled-components";
import { HorizontalRule } from "@mui/icons-material";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 3em;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2em 0 0;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  margin-left: 10em;
  margin-right: 0em;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 21em;
  height: 21em;
  object-fit: contain;
  position: absolute;
  top: -3em;
  left: 0;
  right: 0em;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  border-radius: 50%;
  filter: drop-shadow(0px 10px 15px #edc3f5ea);

  @keyframes animate {
    100% {
      transform: translateY(1.1em);
    }
  }
`;

const ProfileImg = styled.img`
  display: none;

  @media only screen and (max-width: 992px) {
    display: flex;
    align-self: center;
    width: 10em;
    object-fit: contain;
    border-radius: 50%;
    filter: drop-shadow(0px 10px 20px #2a013154);
    margin-bottom: 1em;
  }
`;

const Right = styled.div`
  flex: 1;

  height: 16em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10em;
  margin-left: 5em;
  gap: 0.3em;
  border: 0.5px solid #908f9068;
  background: #2a013154;
  padding: 2em;
  border-radius: 30px;
  box-shadow: 10px 10px 20px #00000073;

  @media only screen and (max-width: 992px) {
    flex: 1;
    margin: 0;
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0.3em 0;
  width: 10em;
  text-shadow: 0px 5px 12px #ff730063;

  @media only screen and (max-width: 992px) {
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
  color: #ffb300;
  letter-spacing: 0.07em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;

  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff7300;
`;





const Hero = () => {
  return (
    <Container id="home">
      <Wrapper>
       
        <Left>
          <Canvas style={{ height: "95vh" }}>
            <OrbitControls enableZoom={false} autorotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 1]} />
            <Sphere args={[2.4, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="#47045c"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="/assets/ava1.webp" />
        </Left>
        <Right>
        <ProfileImg src="/assets/ava1.webp" />
        <Title>
          Hi, my name is Vladislav. <br />
        </Title>
        <Subtitle>
        <HorizontalRule style={{ color: "white", width: "1.5em" }} />
        Welcome to my Portfolio!
        </Subtitle>
        <Description>
        It was created using <Emp>Three.js</Emp>, <Emp>React.js</Emp>, and{" "}
          <Emp>styled-components</Emp>.
        </Description>
        
      </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
