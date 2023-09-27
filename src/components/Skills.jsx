import { styled } from "styled-components";
import RadarChartComponent from "./RadarChartComponent";

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;


const Left = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;


const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5em;
  margin-top: 3.5em;
  gap: 0.3em;
  background: #2a013154;
  border: 0.5px solid #908f9068;
  box-shadow: 10px 10px 20px #00000073;
  padding: 1em 2em;
  border-radius: 30px;

  @media only screen and (max-width: 992px) {
    flex: 1;
    margin: 0;
    padding: 1em;
    justify-content: center;
    align-items: center;
    background: transparent;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.9em;
  margin: 0.3em 0;
  text-shadow: 0px 5px 12px #ff730063;

  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  margin: 0.5em 0;
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff7300;
`;


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        
        <Left>
          <RadarChartComponent />
        </Left>
        <Right>
          <Title>My hard skills</Title>
          <List>
          <ListItem>
              <Emp>Programming languages:</Emp> C, C++, Java, Python, JavaScript
            </ListItem>
            <ListItem>
              <Emp>Front-End:</Emp> HTML5, CSS3, Sass, Bootstrap, JS, React, Redux
            </ListItem>
            <ListItem>
            <Emp>Back-End:</Emp> Node.js, Express.js, Mongoose
            </ListItem>
            <ListItem>
              <Emp>Databases:</Emp> MongoDB, Oracle SQL, and PostgreSQL
            </ListItem>
            <ListItem>
              <Emp>Version Control: </Emp> Git, GitHub
            </ListItem>
            
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Skills;
