import { styled } from "styled-components";
import PieChartComponent from "./PieChartComponent";

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
    justify-content: center;
    align-items: center;
    padding: 7em 0 0;
  }
`;



const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-Left: 4em;
  margin-top: 3.5em;
  gap: 0.3em;
  background: #2a013154;
  border: 0.5px solid #908f9068;
  box-shadow: 10px 10px 20px #00000073;
  padding: 1em 2em;
  border-radius: 30px;

  @media only screen and (max-width: 992px) {
    margin: 0;
    padding: 0 1em;
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
    display: flex;
    align-self: center;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: square;

  @media only screen and (max-width: 768px) {
    font-size: 1em;
    margin: 0;
  }
`;

const ListItem = styled.li`
  font-size: 1.1em;
  margin: 0.5em 0;
`;

const Emp = styled.span`
  font-weight: 600;
  color: #ff7300;
`;


const Right = styled.div`
  flex: 2;
  margin-top: 2em;

  @media only screen and (max-width: 1200px) {
    flex: 1.5;
    height: 70%;
    width: 70%;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0;
  }
`;

const SoftSkills = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
          <Title>My soft skills</Title>
          <List>
            <ListItem>
            Effective <Emp>communication</Emp> and <Emp>collaboration </Emp> skills
            </ListItem>
            <ListItem>
            Strong <Emp>attention to detail </Emp> and <Emp>accuracy</Emp>
            </ListItem>
            <ListItem>
              Ability to work <Emp>independently</Emp> as well as {" "}
             actively and easily work in a <Emp> team environment</Emp>
            </ListItem>
            <ListItem>
              Excellent <Emp>problem-solving</Emp> and <Emp>critical thinking </Emp>mindset 
            </ListItem>
            <ListItem>
              Due to well developed <Emp>time management</Emp>, I am able to work under pressure and with strict deadlines
            </ListItem>
            <ListItem>A <Emp>friendly personality</Emp></ListItem>
          </List>
        </Left>
        <Right>
          <PieChartComponent />
        </Right>
        
      </Wrapper>
    </Container>
  );
};

export default SoftSkills;
