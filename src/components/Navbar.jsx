import { AccountCircle, FileDownload, GitHub, LinkedIn } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #09000e6e;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 999;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0.2em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0.2em 1em;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5em;
  text-shadow: 0px 2px 25px #ff7300a2;
`;

const List = styled.ul`
  display: flex;
  gap: 1.5em;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  text-shadow: 0px 5px 10px #ff7300;
  font-size: 1em;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #938ab3;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media only screen and (max-width: 768px) {
    gap: 0.5em;
    margin-left: 1em;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.4em 1em;
  border: none;
  border-radius: 5px;
  background-color: rgba(222, 110, 18, 0.5);
  filter: drop-shadow(0px 0px 5px #ff7300bb);
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #55008d;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5em 0.5em;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = () => {
  const dowloadFile = () => {
    const link = document.createElement("a");
    link.href = "./Vladislav_Yatsenko_Resume.pdf";
    link.setAttribute("download", "Vladislav_Yatsenko_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Wrapper>
        <Links>
          <Logo>
            <LogoWrapper>
              <AccountCircle />
              <Title>Vladislav</Title>
            </LogoWrapper>
            <List>
              <ListItem href="#home">Home</ListItem>
              <ListItem href="#about">About</ListItem>
              <ListItem href="#skills">My Skills</ListItem>
              <ListItem href="#works">My Works</ListItem>
              <ListItem href="#contact">Contact</ListItem>
            </List>
          </Logo>
        </Links>
        <Icons>
          <Link href="https://github.com/vyatsenk0" target="_blank">
            <GitHub style={{"filter": "drop-shadow(0px 0px 5px #ff7300)"}} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vladislav-yatsenko/" target="_blank">
            <LinkedIn style={{"filter": "drop-shadow(0px 0px 5px #ff7300)"}}/>
          </Link>
          
          <Button onClick={dowloadFile}>
            <FileDownload style={{ fontSize: "1.7em" }} />
             Download My Resume
          </Button>
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
